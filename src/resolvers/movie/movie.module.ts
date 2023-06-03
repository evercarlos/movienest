import { Module } from '@nestjs/common';
import { MovieResolver } from './movie.resolver';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [
    ServicesModule
  ],
  providers: [MovieResolver],
})
export class MovieModule {}
