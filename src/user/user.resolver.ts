import { Resolver, Query, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../graphql.schema';

@Resolver('User')
export class UserResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query('user')
    async getPost(@Args() args, @Info() info): Promise<User> {
      return await this.prisma.query.user(args, info);
    }
}
