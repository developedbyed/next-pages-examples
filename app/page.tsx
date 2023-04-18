import Link from "next/link"

export default async function Home() {
  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl">Next 13 Pages example ✨</h1>
      <div className="flex gap-2 justify-center mt-12">
        <Link
          className=" inline-block py-3 px-6 rounded-md font-bold text-black bg-white"
          href="/movies"
        >
          Fetch movies
        </Link>
        <Link
          className="text-black  inline-block py-3 px-6 rounded-md font-bold bg-gradient-to-tr from-teal-400 to-cyan-400"
          href="/movies-loading"
        >
          Fetch movies with loading.tsx
        </Link>
      </div>
      <div className="flex gap-2 justify-center">
        <Link
          className="text-black my-2 inline-block py-3 px-6 rounded-md font-bold bg-gradient-to-tr from-orange-400 to-red-400"
          href="/movies-error"
        >
          Fetch movies with error.tsx
        </Link>
        <Link
          className="text-black my-2 inline-block py-3 px-6 rounded-md font-bold bg-slate-400"
          href="/movie-not-found"
        >
          Fetch with not-found.tsx
        </Link>
      </div>
    </main>
  )
}
