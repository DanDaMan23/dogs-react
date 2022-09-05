import { useContext } from "react"
import { HomePageContext } from "./home-page.context"

export default function HomePage() {
  const value = useContext(HomePageContext)

  return (
    <button
      type='button'
      onClick={() => {
        value.getData(2)
      }}
    >
      Click Me
    </button>
  )
}
