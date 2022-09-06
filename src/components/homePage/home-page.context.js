import { createContext, useState } from "react"
import useFetch from "use-http"
import HomePage from "./home-page"

export const HomePageContext = createContext({
  data: [],
  getData: () => {}
})

export default function HomePageContextProvider() {
  const [randomDogs, setRandomDogs] = useState({})
  const { get, response, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  )

  const getRandomDogs = async (numberOfDogs) => {
    const initialGetDogs = await get(`/${numberOfDogs}`)
    if (response.ok) {
      setRandomDogs((prevState) => ({ ...prevState, data: initialGetDogs }))
    }
  }

  return (
    <HomePageContext.Provider
      value={{
        data: randomDogs,
        getData: getRandomDogs,
        error
      }}
    >
      <HomePage />
    </HomePageContext.Provider>
  )
}
