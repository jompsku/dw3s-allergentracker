import { useQuery } from "react-query";
import { Card, Typography, React, Box, Tooltip } from "./index.js";
import { retrieveProducts } from "../services/productService.js";
import InfoIcon from "@mui/icons-material/Info";

const IngredientDetails = ({ ingredient }) => {
  const { data: products } = useQuery(["products"], retrieveProducts);
  const hasProducts = products
    .filter((p) => p.ingredients.includes(ingredient.name))
    .sort((a, b) => Number(b.isProblematic) - Number(a.isProblematic));

  return (
    <Card sx={{ margin: "10px", padding: "15px", backgroundColor: "#faf5f0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight={"bold"} fontSize="0.9rem" sx={{ marginBottom: "1rem" }}>
          Products that include {ingredient.name}:
        </Typography>
        <Tooltip title="Bolded products have been causing symptoms.">
          <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }}></InfoIcon>
        </Tooltip>
      </Box>
      {hasProducts?.map((p, index) =>
        p.isProblematic ? (
          <Typography sx={{ wordBreak: "break-word" }} fontWeight={"bold"} key={index}>
            {p.name}
          </Typography>
        ) : (
          <Typography key={index}>{p.name}</Typography>
        )
      )}
    </Card>
  );
};

export default IngredientDetails;
