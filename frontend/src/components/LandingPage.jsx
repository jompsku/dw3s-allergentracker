import AllergenProductCards from "./AllergenProductCards.jsx";
import Info from "./Info.jsx";
import { Container } from "@mui/material";

function LandingPage() {
  return (
    <Container>
      <Info />
      <AllergenProductCards />
    </Container>
  );
}

export default LandingPage;
