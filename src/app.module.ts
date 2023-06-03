import { join } from 'path';
import { Module } from '@nestjs/common';
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
    }),
    /**importante para uso de grapql***/
    ResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}