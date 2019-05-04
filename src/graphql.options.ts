import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      path: '/',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      context: ({ req }) => ({ req }),
    };
  }
}
