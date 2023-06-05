import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable, map } from "rxjs";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { BillboardResponse, IBillboardResponse } from "src/models/billboard_response";
import { IRequestHeader } from "src/helpers/http/request-header";

@Injectable()
export class MovieService {

    constructor(private httpService: HttpService) {}

    /**
     * @Observable Observable<Movie[]: Observa los datos tipo movie, enviados desde servicio(backend)
     **/
    public findBillboard(headers: IRequestHeader, to:number):Observable<BillboardResponse> {

        const { authorization } = headers;

        const config: AxiosRequestConfig = {
            params: {
                page: to,
                language:'es-ES'
            },
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${authorization}`,
                //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmE5NWY1YzgwM2VjNjFiMjAxZWQ2NmE4NTRlMTUyMSIsInN1YiI6IjVlOTRjMTI3MzliNmMzMDAxYTI0YWUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twHmZDdLNTDnkt3XmYFLT9zvsY16Jkx-yhOXZ1db2z4',
            }
        }
        /**
         * @get get<IMovies>: Retorno como tipo IMovies(es una lista de IMovie)
         **/
        return this.httpService.get<IBillboardResponse>('https://api.themoviedb.org/3/movie/now_playing', config)
        .pipe(
          map((response: AxiosResponse<IBillboardResponse>)=> BillboardResponse.create(response.data))
        );
    }
}