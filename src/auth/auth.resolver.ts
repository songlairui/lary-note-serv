import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  SignupInput,
  UserCreateInput,
  SigninInput,
  UserAbstract,
  LoginInfo,
} from 'src/graphql.schema';
import * as bcrypt from 'bcrypt';
import { NotFoundException, Logger, UseGuards } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { User } from '../prisma/prisma.binding';
import { JwtAuthGuard } from './jwt-auth.guard';

import { User as CurrentUser } from '../user.decorator';

@Resolver('Auth')
export class AuthResolver {
  private saltRounds = 10;
  private readonly logger = new Logger(AuthResolver.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async getHash(pwd: string | undefined): Promise<string> {
    return bcrypt.hash(pwd, this.saltRounds);
  }
  async verifyPwd(
    pwd: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return await bcrypt.compare(pwd, hash);
  }

  @Mutation('signup')
  async create(@Args('signupInput') args: SignupInput): Promise<UserAbstract> {
    args.pwd = await this.getHash(args.pwd);
    const data: UserCreateInput = new UserCreateInput();
    Object.assign(data, args);
    data.profile = {
      create: {},
    };
    this.logger.log(`create User ${data.email} with: ${data.pwd}`);

    const user = await this.prisma.mutation.createUser({ data });
    return {
      email: user.email,
      id: user.id,
      name: user.name,
    };
  }

  @Mutation('signin')
  async signin(@Args('signinInput') args: SigninInput): Promise<LoginInfo> {
    const { email, pwd } = args;
    const targetUser = await this.prisma.query.user({ where: { email } });
    if (!targetUser || !(await this.verifyPwd(pwd, targetUser.pwd))) {
      throw new NotFoundException();
    }
    const user: JwtPayload = {
      email,
    };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  @Query('selfProfile')
  @UseGuards(JwtAuthGuard)
  async myProfile(@CurrentUser() curUser, @Info() info): Promise<User> {
    const { email } = curUser;
    const user = await this.prisma.query.user({ where: { email } }, info);
    delete user.pwd;
    return user;
  }
}
