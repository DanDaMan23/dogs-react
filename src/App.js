import useFetch from "use-http"
import { AppBar } from "@mui/material"
import { Container } from "@mui/system"
import PetsIcon from "@mui/icons-material/Pets"

import { BrowserRouter, Routes, Route } from "react-router-dom"

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
      <Container maxWidth='l'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<>Home Page</>} />
            <Route path='/dogs' element={<>Dogs Page</>} />
            <Route path='/contactPage' element={<>Contact Page</>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}
