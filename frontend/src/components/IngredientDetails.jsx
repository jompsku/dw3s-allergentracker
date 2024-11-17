import { useQuery } from "react-query"
import { Card, Typography, React } from "./index.js"
import { retrieveProducts } from "../services/productService.js"

const IngredientDetails = ({ ingredient }) => {
  const { data: products } = useQuery(["products"], retrieveProducts)
  const hasProducts = products.filter((p) => p.ingredients.includes(ingredient.name))

  return (
    <Card sx={{ margin: "10px", padding: "15px", backgroundColor: "#faf5f0" }}>
      <Typography fontWeight={"bold"} fontSize="0.9rem">
        Products that include {ingredient.name}:
      </Typography>
      {hasProducts?.map((p, index) =>
        p.isProblematic ? (
          <Typography fontWeight={"bold"} key={index}>{p.name}</Typography>
        ) : (
          <Typography key={index}>{p.name}</Typography>
        )
      )}
    </Card>
  )
}

export default IngredientDetails
