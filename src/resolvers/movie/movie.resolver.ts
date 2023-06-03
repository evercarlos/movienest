import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MovieService } from 'src/services/movie/movie.service';
import { map } from 'rxjs/operators'
import { BillboardResponse } from 'src/models/billboard_response';

@Resolver(() => BillboardResponse)
export class MovieResolver {

     constructor(private movieService: MovieService){}

    /**
     * @pipe  Permite encadenar múltiples operadores y aplicar transformaciones, filtrados, combinaciones u otras acciones a los valores emitidos por un observable. 
     */
    @Query(()=> BillboardResponse, {nullable:true,name:'movies',description: 'Hola mundo desde grapql' })
    public findAllMovie(
      @Args('to', {nullable: true,type: () => Int}) to: number= 1
    ) {
        return this.movieService.findBillboard(to)
        .pipe( // ??
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