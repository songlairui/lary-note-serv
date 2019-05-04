import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import {
  NoteCreateInput,
  NoteCreateWithoutAuthorInput,
  NoteWhereInput,
  UserWhereInput,
} from '../graphql.schema';
import { CurUser } from 'src/user.decorator';
import { UseGuards, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Note } from 'src/prisma/prisma.binding';

@Resolver('Note')
export class NoteResolver {
  private readonly logger = new Logger(NoteResolver.name);
  constructor(private readonly prisma: PrismaService) {}

  @Query('notes')
  @UseGuards(JwtAuthGuard)
  async myNotes(
    @Args('where') where: NoteWhereInput,
    @Info() info,
    @CurUser() curUser,
  ): Promise<Note[]> {
    if (where.author) {
      this.logger.warn(`querying user ${curUser.email}`);
    }
    const author: UserWhereInput = new UserWhereInput();
    author.email = curUser.email;
    where.author = author;
    return await this.prisma.query.notes({ where }, info);
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
}
