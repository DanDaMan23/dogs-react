import { createContext, useState } from "react"
import useFetch from "use-http"
import HomePage from "./home-page"

export const HomePageContext = createContext({
  data: [],
  getData: () => {}
})

export default function HomePageContextProvider() {
  const [randomDogs, setRandomDogs] = useState({ data: [], error: null })
  const { get, response, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  )

  const getRandomDogs = async (numberOfDogs) => {
    const initialGetDogs = await get(`/${numberOfDogs}`)
    if (response.ok) {
      console.log(initialGetDogs)
      setRandomDogs((prevState) => ({ ...prevState, data: initialGetDogs }))
    } else {
      setRandomDogs((prevState) => ({ ...prevState, error }))
    }
  }

  return (
    <HomePageContext.Provider
      value={{ data: randomDogs, getData: getRandomDogs }}
    >
      <HomePage />
    </HomePageContext.Provider>
  )
}
