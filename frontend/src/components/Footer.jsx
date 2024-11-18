import { Container, Box, Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom"

function Footer() {

  const pages = [
    { name: "About", url: "/about", needsLogin: false },
    { name: "Terms of Service", url: "/terms-of-service", needsLogin: false },
    { name: "Privacy policy", url: "/privacy-policy", needsLogin: false },
  ]

  return (
    <Box component="footer" sx={{ p: 4, mt: 4,  bgcolor: "background.footer" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {pages.map((page) => (
            <MuiLink
              key={page.name}
              color="primary.light"
              component={Link}
              to={page.url} >
              {page.name}
            </MuiLink>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
