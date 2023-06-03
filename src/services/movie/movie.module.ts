import { Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    /**
     * @HttpModule Para el funcionamiento del servicio en conjunto con MovieService
     * **/
    imports: [HttpModule],
    providers: [MovieService],
    exports: [MovieService]
})
export class MovieServiceModule {}