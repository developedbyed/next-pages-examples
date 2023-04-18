import getMovies from "@/util/getMovies"
import MovieList from "../MovieList"
import { MoviesType } from "@/util/MovieTypes"

export const dynamic = "force-dynamic"

export default async function MoviesLoading() {
  const movies: MoviesType = await getMovies(1500)

  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl flex justify-center items-center">
        Movies Fetched with
        <span className="inline-block bg-white/20 p-2 mx-2 rounded-md text-sm">
          loading.tsx
        </span>
      </h1>
      <div className="my-12">
        <MovieList page={movies.page} results={movies.results} />
      </div>
    </main>
  )
}
