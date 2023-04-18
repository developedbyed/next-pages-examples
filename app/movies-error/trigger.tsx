"use client"
import { useState } from "react"

const Trigger = () => {
  const [clicked, setClicked] = useState(false)
  if (clicked) {
    throw new Error("Something went wrong")
  }
  return (
    <div>
      <button
        onClick={() => {
          setClicked(true)
        }}
      >
        Trigger Error 👍
      </button>
    </div>
  )
}

export default Trigger
