import "./LandingPage.css";
import BasicCard from "./BasicCard.jsx";
import Info from "./Info.jsx";
import { Container } from "@mui/material";
import { useQuery } from "react-query";
import { retrieveProducts } from "../services/productService.js";

function LandingPage() {
  const { data: products } = useQuery("products", retrieveProducts);
  console.log(products);
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="cards">
        <Info />
        <BasicCard title="Your top allergens" />
        <BasicCard title="Your products" contents={products} />
      </div>
    </Container>
  );
}

export default LandingPage;