import { Container } from "@mui/system"

import { Routes, Route } from "react-router-dom"
import HomePageContextProvider from "./components/homePage/home-page.context"
import NavBar from "./components/navBar/navBar"

export default function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth='l'>
        <Routes>
          <Route path='/' element={<HomePageContextProvider />} />
          <Route path='/dogs' element={<>Dogs Page</>} />
          <Route path='/contact' element={<>Contact Page</>} />
        </Routes>
      </Container>
    </>
  )
}
