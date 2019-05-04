import { Module } from '@nestjs/common';
import { NoteResolver } from './note.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [NoteResolver],
})
export class NoteModule {}
