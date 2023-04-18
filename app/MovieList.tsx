"use client"
import Image from "next/image"
import { MoviesType } from "@/util/MovieTypes"

const MovieList = ({ page, results }: MoviesType) => {
  return (
    <>
      {results.map((movie) => (
        <div
          className="flex flex-col justify-center items-center my-12"
          key={movie.id}
        >
          <h2 className="text-lg font-bold py-6">{movie.original_title}</h2>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            width={1200}
            height={1200}
            className="w-full lg:w-1/2 h-auto rounded-2xl"
            alt={movie.original_title}
          />
        </div>
      ))}
    </>
  )
}

export default MovieList
