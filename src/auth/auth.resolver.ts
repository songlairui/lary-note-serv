import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupInput, UserCreateInput } from 'src/graphql.schema';
import { User } from '../prisma/prisma.binding';
import * as bcrypt from 'bcrypt';

@Resolver('Auth')
export class AuthResolver {
  private saltRounds = 10;
  constructor(private readonly prisma: PrismaService) {}

  async getHash(pwd: string | undefined): Promise<string> {
    return bcrypt.hash(pwd, this.saltRounds);
  }

  @Mutation('signup')
  async create(@Args('signupInput') args: SignupInput): Promise<User> {
    args.pwd = await this.getHash(args.pwd);
    const data: UserCreateInput = new UserCreateInput();
    Object.assign(data, args);
    data.profile = {
      create: {},
    };
    return await this.prisma.mutation.createUser({ data });
  }
}
