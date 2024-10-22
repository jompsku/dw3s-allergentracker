import { Container, Box, Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom"

function Footer() {
  const links = [
    { name: "About", link: "/about" },
    { name: "Terms of service", link: "/terms-of-service" },
    { name: "Privacy policy", link: "/privacy-policy" },
  ]

  return (
    <Box component="footer" sx={{ p: 4, bgcolor: "background.footer" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {links.map((l, index) => (
            <MuiLink key={index} color="primary.light" component={Link} to={l.link} >
              {l.name}
            </MuiLink>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
