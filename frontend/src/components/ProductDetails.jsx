import { Button, Card, Typography, React } from "./index.js"
import { deleteProduct } from "../services/productService"
import { useMutation, useQueryClient } from "react-query"

const ProductDetails = ({ product }) => {
  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })

  const handleEdit = async (event) => {
    event.preventDefault()
  }

  return (
    <Card sx={{ margin: "10px", padding: "15px", backgroundColor: "#faf5f0" }}>
      <Typography fontWeight={"bold"}>{product.name}</Typography>
      <h5>Ingredients:</h5>
      <Typography>{product.ingredients?.map((i) => `${i}`).join(`, `)}</Typography>
      {product.isProblematic ? (
        <p style={{ color: "red", fontWeight: "bold", fontSize: "0.9rem" }}>
          The product has been causing allergies
        </p>
      ) : (
        <p style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
          The product has not caused any allergies
        </p>
      )}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={() => deleteMutation.mutate(product)}>Delete</Button>
    </Card>
  )
}

export default ProductDetails
