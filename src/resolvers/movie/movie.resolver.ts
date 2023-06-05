import { Resolver, Query, Args, Int, Context } from '@nestjs/graphql';
import { MovieService } from 'src/services/movie/movie.service';
import { map } from 'rxjs/operators'
import { BillboardResponse } from 'src/models/billboard_response';
import { Logger } from '@nestjs/common';
import { IRequestHeader } from 'src/helpers/http/request-header';

@Resolver(() => BillboardResponse)
export class MovieResolver {
  
    private readonly logger = new Logger(MovieResolver.name);

     constructor(private movieService: MovieService){}

    /**
     * @pipe  Permite encadenar múltiples operadores y aplicar transformaciones, filtrados, combinaciones u otras acciones a los valores emitidos por un observable. 
     */
    @Query(()=> BillboardResponse, {nullable:true,name:'movies',description: 'Hola mundo desde grapql' })
    public findAllMovie(
      @Args('to', {nullable: true,type: () => Int}) to: number= 1,
      @Context('authorization') authorization: string
    ) {

      this.logger.log('start MovieResolver->findAllMovie');
      
      const headers: IRequestHeader = { authorization };

        return this.movieService.findBillboard(headers, to)
        .pipe( // los pipes son una forma de aplicar transformaciones, validaciones o filtros a los datos de entrada antes de que lleguen a los controladores o resolutores.
          map((response: BillboardResponse) => {

             return response;
          })       
        );
    }

    @Query(()=> String, {name:'hello',description: 'Hola mundo desde grapql' })
    helloWorld():string {
         return 'Hola Mundo';
    }

}