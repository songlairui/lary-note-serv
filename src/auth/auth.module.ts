import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AuthResolver],
})
export class AuthModule {}
