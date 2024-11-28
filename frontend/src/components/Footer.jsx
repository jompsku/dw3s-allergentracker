import { Container, Box, Link as MuiLink, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const matches = useMediaQuery("(min-width:670px)");
  const pages = [
    { name: "About", url: "/about", needsLogin: false },
    { name: "Terms of Service", url: "/terms-of-service", needsLogin: false },
    { name: "Privacy policy", url: "/privacy-policy", needsLogin: false },
  ];

  return (
    <Box component="footer" sx={{ p: matches ? "2rem" : "1.5rem", bgcolor: "background.footer" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: matches ? 8 : 2,
            flexWrap: "wrap",
          }}
        >
          {pages.map((page) => (
            <MuiLink key={page.name} color="primary.light" component={Link} to={page.url}>
              {page.name}
            </MuiLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
