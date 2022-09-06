import { useNavigate } from "react-router-dom"
import { AppBar, Button } from "@mui/material"
import { Box, Container } from "@mui/system"
import PetsIcon from "@mui/icons-material/Pets"

export default function NavBar() {
  const navigate = useNavigate()
  const pages = [
    { label: "Home Page", route: "/" },
    { label: "Dogs Page", route: "/dogs" },
    { label: "Contact Page", route: "/contact" }
  ]

  return (
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
                navigate(page.route)
              }}
              sx={{ color: "white", display: "block" }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  )
}
