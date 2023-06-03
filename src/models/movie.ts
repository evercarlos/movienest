import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({description: 'Movie data'})
export class Movie {
    @Field({description: 'adult'})
    public adult:             boolean;

    @Field({description: 'backdrop_path'})
    public backdrop_path:     string;

    //@Field({description: 'genre_ids'})
    //public genre_ids:         number[];

    @Field({description: 'id'})
    public id:                number;

    @Field({description: 'original_language'})
    public original_language: string;

    @Field({description: 'original_title'})
    public original_title:    string;

    @Field({ nullable: true,description: 'overview'})
    public overview:          string;

    @Field({description: 'popularity'})
    public popularity:        number;
    
    @Field({description: 'poster_path'})
    public poster_path:       string;

    @Field({description: 'release_date'})
    public release_date:      string;

    @Field({description: 'title'})
    public title:             string;

    @Field({description: 'video'})
    public video:             boolean;

    @Field({description: 'vote_average'})
    public vote_average:      number;

    @Field({description: 'vote_count'})
    public vote_count:        number;


    public static create(impl: IMovie) {

        if(impl) {
            const movieResult = new Movie();

            movieResult.adult = impl.adult;
            movieResult.backdrop_path = impl.backdrop_path;
            //movieResult.genre_ids = impl.genre_ids;
            movieResult.id = impl.id;
            movieResult.original_language = impl.original_language;
            movieResult.original_title = impl.original_title;
            movieResult.overview = impl.overview;
            movieResult.popularity = impl.popularity;
            movieResult.poster_path = impl.poster_path;
            movieResult.release_date = impl.release_date;
            movieResult.title = impl.title;
            movieResult.video = impl.video;
            movieResult.vote_average = impl.vote_average;
            movieResult.vote_count = impl.vote_count;

            return movieResult;
        }
    }
}

export interface IMovie {
    adult:             boolean;

    backdrop_path:     string;

    //genre_ids:         number[];

    id:                number;

    original_language: string;

    original_title:    string;

    overview:          string;

    popularity:        number;
    
    poster_path:       string;

    release_date:      string;

    title:             string;

    video:             boolean;

    vote_average:      number;

    vote_count:        number;
}