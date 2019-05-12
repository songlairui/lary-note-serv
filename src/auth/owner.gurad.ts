import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { prisma as client } from '../../generated/prisma-client';

@Injectable()
export class OwnerGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const args = context.getArgs();
    const [root, { where }, ctx] = args;
    const author = await client.note(where).author();
    const { user } = ctx.req;
    // sentry email not equal
    return author.email === user.email;
  }
}
