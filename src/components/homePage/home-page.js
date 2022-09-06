import { ImageList, ImageListItem } from "@mui/material"
import { useContext, useEffect } from "react"
import { HomePageContext } from "./home-page.context"

export default function HomePage() {
  const { data, error, getData } = useContext(HomePageContext)

  useEffect(() => {
    getData(4)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>Welcome to the Dogs App</h1>
      {!error && data?.data?.message && (
        <ImageList>
          {data?.data?.message.map((dog) => (
            <ImageListItem key={dog}>
              <img src={dog} alt='dog' />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  )
}
