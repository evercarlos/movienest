import { Field, ObjectType } from "@nestjs/graphql";
import { IMovie, Movie } from "./movie";

@ObjectType({description: 'Response data'})
export class BillboardResponse {

    @Field({description: 'page'})
    page:          number;

    @Field(() => [Movie], { description: 'movie results' })
    results: Movie[];


    @Field({description: 'total_pages'})
    total_pages:   number;

    @Field({description: 'total_results'})
    total_results: number;

    public static create(impl: IBillboardResponse): BillboardResponse {
        if( impl) {
            const billboardResponse: BillboardResponse = new BillboardResponse();

            billboardResponse.page = impl.page;
            billboardResponse.total_pages = impl.total_pages;
            billboardResponse.total_results = impl.total_results;
            if(!impl.results) {
                billboardResponse.results = [];
            } else {
                billboardResponse.results = impl.results.map((respx) => Movie.create(respx));
            }

            return billboardResponse;
        }
    }
}


export interface IBillboardResponse {
    page:          number;
    results?:       IMovie[];
    total_pages:   number;
    total_results: number;
}