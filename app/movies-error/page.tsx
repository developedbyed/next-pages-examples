import getMovies from "@/util/getMovies"
import MovieList from "../MovieList"
import { MoviesType } from "@/util/MovieTypes"

export default async function MoviesError() {
  const movies: MoviesType = await getMovies(0, true)

  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl flex justify-center items-center">
        Movies Fetched with
        <span className="inline-block bg-white/20 p-2 mx-2 rounded-md text-sm">
          error.tsx
        </span>
      </h1>
      <div className="my-12">
        <MovieList page={movies.page} results={movies.results} />
      </div>
    </main>
  )
}
