import { ImageList, ImageListItem } from "@mui/material"
import { useContext, useEffect } from "react"
import useFetch from "use-http"
import { ACTION_TYPES, HomePageContext } from "./home-page.context"

export function useGetRandomDogs() {
  const { state, dispatch } = useContext(HomePageContext)

  const { get, response, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  )

  useEffect(() => {
    const getRandomDogs = async (numberOfDogs) => {
      const initialGetDogs = await get(`/${numberOfDogs}`)
      if (response.ok) {
        dispatch({ type: ACTION_TYPES.SUCCESS, payload: initialGetDogs })
      } else if (error) {
        dispatch({ type: ACTION_TYPES.ERROR, payload: error })
      }
    }

    getRandomDogs(4)
  }, [dispatch, error, get, response.ok])

  return { state }
}

export default function HomePage() {
  const { state } = useGetRandomDogs()

  return (
    <>
      <h1>Welcome to the Dogs App</h1>
      {state?.data?.message && (
        <ImageList>
          {state?.data?.message.map((dog) => (
            <ImageListItem key={dog}>
              <img src={dog} alt='dog' />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  )
}
