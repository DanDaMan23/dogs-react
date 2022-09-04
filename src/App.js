import useFetch from "use-http"
import { AppBar } from "@mui/material"
import { Container } from "@mui/system"
import PetsIcon from "@mui/icons-material/Pets"

export default function App() {
  const {
    loading,
    error,
    data = []
  } = useFetch("https://dog.ceo/api/breeds/list/all", {}, [])

  if (!loading && !error && !!data?.message) {
    console.log(data.message)
  }

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='l'>
          <h1>
            <PetsIcon /> Dogs App
          </h1>
        </Container>
      </AppBar>
    </>
  )
}
