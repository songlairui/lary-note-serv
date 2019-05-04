import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver],
})
export class UserModule {}
