import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import {
  SignupInput,
  UserCreateInput,
  SigninInput,
  UserAbstract,
  LoginInfo,
  UserOrderByInput,
} from '../graphql.schema';
import bcrypt from 'bcryptjs';
import {
  NotFoundException,
  Logger,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { User } from '../prisma/prisma.binding';
import { JwtAuthGuard } from './jwt-auth.guard';

import { CurUser } from '../user.decorator';

@Resolver('Auth')
export class AuthResolver {
  private saltRounds = 10;
  private readonly logger = new Logger(AuthResolver.name);
  private cacheVar = {
    signupCount: 3,
  };
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async getHash(pwd: string | undefined): Promise<string> {
    return new Promise((r, j) => {
      bcrypt.genSalt(this.saltRounds, (err0, salt) => {
        if (err0) {
          j(err0);
        }
        bcrypt.hash(pwd, salt, (err, hash) => {
          if (err) {
            j(err);
          } else {
            r(hash);
          }
        });
      });
    });
  }
  async verifyPwd(
    pwd: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return await bcrypt.compare(pwd, hash);
  }

  @Mutation('signup')
  async create(@Args('signupInput') args: SignupInput): Promise<UserAbstract> {
    if (this.cacheVar.signupCount > 10) {
      throw new NotFoundException();
    }
    this.cacheVar.signupCount += 1;
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
  async myProfile(@CurUser() curUser, @Info() info): Promise<User> {
    const { email } = curUser;
    const user = await this.prisma.query.user({ where: { email } }, info);
    delete user.pwd;
    return user;
  }

  @Mutation('resetLimit')
  @UseGuards(JwtAuthGuard)
  async resetLimit(@CurUser() curUser) {
    // 第一个用户为管理员
    const firstUser = (await this.prisma.query.users({
      orderBy: UserOrderByInput.createdAt_ASC,
      first: 1,
    }))[0];
    if (firstUser && curUser.email === firstUser.email) {
      this.cacheVar.signupCount = 0;
    }

    return `${this.cacheVar.signupCount}`;
  }
}
