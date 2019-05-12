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
  NoteWhereUniqueInput,
  NoteUpdateInput,
} from '../graphql.schema';
import { CurUser } from '../user.decorator';
import { UseGuards, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OwnerGuard } from 'src/auth/owner.gurad';

function overCurUser(notesArgs, curUser) {
  if (!notesArgs.where) {
    notesArgs.where = new NoteWhereInput();
  }
  if (!notesArgs.where.author) {
    notesArgs.where.author = new UserWhereInput();
  } else {
    this.logger.warn(`querying user ${curUser.email}`);
  }
  notesArgs.where.author.email = curUser.email;
  return notesArgs;
}

@Resolver('Note')
export class NoteResolver {
  private readonly logger = new Logger(NoteResolver.name);
  constructor(private readonly prisma: PrismaService) {}

  @Query('note')
  async oneNotes(@Args() args, @Info() info, @CurUser() curUser) {
    overCurUser(args, curUser);

    return await this.prisma.query.note(args, info);
  }

  @Query('notes')
  @UseGuards(JwtAuthGuard)
  async myNotes(@Args() args, @Info() info, @CurUser() curUser) {
    overCurUser(args, curUser);
    return await this.prisma.query.notes(args, info);
  }

  @Query('notesConnection')
  @UseGuards(JwtAuthGuard)
  async myNotesConnection(@Args() args, @Info() info, @CurUser() curUser) {
    overCurUser(args, curUser);
    return await this.prisma.query.notesConnection(args, info);
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
    if (!where) {
      where = new NoteSubscriptionWhereInput();
    }
    if (!where.node) {
      where.node = new NoteWhereInput();
    }
    if (!where.node.author) {
      where.node.author = new UserWhereInput();
    }
    where.node.author.email = curUser.email;
    return this.prisma.subscription.note({ where }, info);
  }
  @Mutation('updateNote')
  @UseGuards(JwtAuthGuard)
  @UseGuards(OwnerGuard)
  async updateNote(@Args() args, @Info() info) {
    return this.prisma.mutation.updateNote(args, info);
  }

  @Mutation('deleteNote')
  @UseGuards(JwtAuthGuard)
  @UseGuards(OwnerGuard)
  async deleteNote(@Args('where') where: NoteWhereUniqueInput, @Info() info) {
    return this.prisma.mutation.deleteNote({ where }, info);
  }
}
