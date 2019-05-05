import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from './prisma.binding';

const endpoint = process.env.PRISMA_ENDPOINT || 'http://prisma:44661';

@Injectable()
export class PrismaService extends Prisma {
  private logger = new Logger(PrismaService.name);
  constructor() {
    super({
      endpoint,
      debug: false,
    });
    this.logger.log(`Prisma Endpoint: ${endpoint}`);
  }
}
