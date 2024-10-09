import BasicCard from "./BasicCard.jsx";
import Info from "./Info.jsx";
import { Box, Container, Grid2 } from "@mui/material";
import { useQuery } from "react-query";
import {
  retrievePossibleAllergens,
  retrieveProducts,
} from "../services/productService.js";

function LandingPage() {
  const { data: products } = useQuery("products", retrieveProducts);
  const { data: possibleAllergens } = useQuery(
    "allergens",
    retrievePossibleAllergens
  );

  return (
    <Container>
      <Info />
      <Grid2 className="cards" container spacing={4}>
        <Grid2 size={{ md: 6 }}>
          <BasicCard title="Your top allergens" contents={possibleAllergens} />
        </Grid2>
        <Grid2 size={{ md: 6 }}>
          <BasicCard title="Your products" contents={products} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default LandingPage;
