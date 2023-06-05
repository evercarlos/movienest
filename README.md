###### Lista de Películas en cartelera con el api de themoviedb ################
### Instalacion y Documentación ###########
https://docs.nestjs.com
npm i -g @nestjs/cli
## ejecutar para incializar el proyecto
- npm install
## Dependencias adicionales (ya instaladas)
- npm i axios
- npm i --save @nestjs/axios axios
## Para ejecutar el proyecto
npm run start:dev
## Example #####
{
  movies {
    results {
      adult,
      backdrop_path,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    },
    page,
    total_pages,
    total_results,
  }
}
# headers #
{
  "authorization": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmE5NWY1YzgwM2VjNjFiMjAxZWQ2NmE4NTRlMTUyMSIsInN1YiI6IjVlOTRjMTI3MzliNmMzMDAxYTI0YWUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twHmZDdLNTDnkt3XmYFLT9zvsY16Jkx-yhOXZ1db2z4"
}