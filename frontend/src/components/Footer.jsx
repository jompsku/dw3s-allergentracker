import { Container, Link, Box } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ p: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Link>About</Link>
          <Link>Terms of service</Link>
          <Link>Privacy policy</Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
