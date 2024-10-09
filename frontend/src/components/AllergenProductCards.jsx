import BasicCard from "./BasicCard.jsx";
import { Grid2 } from "@mui/material";
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
    <Grid2 className="cards" container spacing={4}>
      <Grid2 size={{ sm: 12, md: 6 }}>
        <BasicCard title="Your top allergens" contents={possibleAllergens} />
      </Grid2>
      <Grid2 size={{ sm: 12, md: 6 }}>
        <BasicCard title="Your products" contents={products} />
      </Grid2>
    </Grid2>
  );
};

export default AllergenProductCards;
