import BasicCard from "./BasicCard.jsx";
import Grid from "@mui/material/Grid2";
import { useQuery } from "react-query";
import {
  retrievePossibleAllergens,
  retrieveProducts,
} from "../services/productService.js";

const AllergenProductCards = () => {
  const { data: products } = useQuery("products", retrieveProducts);
  const { data: possibleAllergens } = useQuery(
    "allergens",
    retrievePossibleAllergens
  );
  return (
    <Grid className="cards" container spacing={4}>
      <Grid size={6}>
        <BasicCard title="Your top allergens" contents={possibleAllergens} />
      </Grid>
      <Grid size={6}>
        <BasicCard title="Your products" contents={products} />
      </Grid>
    </Grid>
  );
};

export default AllergenProductCards;
