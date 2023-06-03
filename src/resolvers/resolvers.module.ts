import { Module } from "@nestjs/common";
import { MovieModule } from "./movie/movie.module";


@Module({
    imports: [
        MovieModule,
    ],
    exports: [
        MovieModule,
    ]
})
export class ResolversModule {}