import { AppBar } from "@mui/material"
import { Container } from "@mui/system"
import PetsIcon from "@mui/icons-material/Pets"

export default function App() {
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
