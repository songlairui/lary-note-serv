import {
  Resolver,
  Mutation,
  Args,
  Info,
  Query,
  Subscription,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import {
  NoteCreateInput,
  NoteCreateWithoutAuthorInput,
  NoteWhereInput,
  UserWhereInput,
  NoteSubscriptionWhereInput,
} from '../graphql.schema';
import { CurUser } from '../user.decorator';
import { UseGuards, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Note } from '../prisma/prisma.binding';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Note')
export class NoteResolver {
  private readonly logger = new Logger(NoteResolver.name);
  constructor(private readonly prisma: PrismaService) {}

  @Query('notes')
  @UseGuards(JwtAuthGuard)
  async myNotes(
    @Args() args,
    @Info() info,
    @CurUser() curUser,
  ): Promise<Note[]> {
    if (!args.where) {
      args.where = new NoteWhereInput();
    }
    if (!args.where.author) {
      args.where.author = new UserWhereInput();
    } else {
      this.logger.warn(`querying user ${curUser.email}`);
    }
    args.where.author.email = curUser.email;
    return await this.prisma.query.notes(args, info);
  }

  @Mutation('createNoteAuto')
  @UseGuards(JwtAuthGuard)
  async createNoteAuto(
    @Args('data') args: NoteCreateWithoutAuthorInput,
    @Info() info,
    @CurUser() curUser,
  ) {
    const { email } = curUser;
    const data: NoteCreateInput = { ...args, author: { connect: { email } } };
    return await this.prisma.mutation.createNote(
      {
        data,
      },
      info,
    );
  }
  @Subscription('note')
  @UseGuards(JwtAuthGuard)
  async subscribeNote(
    @Args('where') where: NoteSubscriptionWhereInput,
    @Info() info,
    @CurUser() curUser,
  ) {
    if (!where.node) {
      where.node = new NoteWhereInput();
    }
    if (!where.node.author) {
      where.node.author = new UserWhereInput();
    }
    where.node.author.email = curUser.email;
    return this.prisma.subscription.note({ where }, info);
  }
}
