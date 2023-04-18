export type MovieType = {
  id: number
  original_title: string
  backdrop_path: string
}
export type MoviesType = {
  page: number
  results: MovieType[]
}
