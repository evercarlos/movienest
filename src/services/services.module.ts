
import { Module, } from '@nestjs/common';
import { MovieServiceModule } from './movie/movie.module';

@Module({
    imports: [
        MovieServiceModule,
    ],
    exports: [
        MovieServiceModule,
    ]
})
export class ServicesModule {}