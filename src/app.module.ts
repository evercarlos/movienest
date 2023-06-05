import { join } from 'path';
import { Module } from '@nestjs/common';
import { Request } from 'express';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ResolversModule } from './resolvers';

@Module({
  imports: [
    /**importante para uso de grapql***/
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      /*playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
      ]*/
      context: ({ req }: { req: Request }) => {
        const authorization = req.headers.authorization || null;
        // Aquí puedes realizar cualquier procesamiento adicional del contexto si es necesario
        return { authorization };
      },
    }),
    /**importante para uso de grapql***/
    ResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}