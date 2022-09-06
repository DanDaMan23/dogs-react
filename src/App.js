import useFetch from "use-http"
import { AppBar, Box, Button } from "@mui/material"
import { Container } from "@mui/system"
import PetsIcon from "@mui/icons-material/Pets"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import HomePageContextProvider from "./components/homePage/home-page.context"

export default function App() {
  const navigate = useNavigate()
  const pages = [
    { label: "Home Page", route: "/" },
    { label: "Dogs Page", route: "/dogs" },
    { label: "Contact Page", route: "/contact" }
  ]

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='l'>
          <h1>
            <PetsIcon /> Dogs App
          </h1>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  navigate(page.route, { replace: false })
                }}
                sx={{ color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth='l'>
        <Routes>
          <Route path='/' element={<HomePageContextProvider />} />
          <Route path='/dogs' element={<>Dogs Page</>} />
          <Route path='/contactPage' element={<>Contact Page</>} />
        </Routes>
      </Container>
    </>
  )
}
