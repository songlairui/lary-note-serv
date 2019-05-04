import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    NoteModule,
    AuthModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AuthModule],
})
export class AppModule {}
