import { notFound } from "next/navigation"

const getMovie = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1545345")
  if (!res.ok) {
    console.log("not found")
    notFound()
  }
  return res.json()
}

export default async function NotFoundMovie() {
  const movie = await getMovie()
  return (
    <div>
      <h1>User Data</h1>
    </div>
  )
}
