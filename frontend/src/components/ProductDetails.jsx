import {
  Button,
  Card,
  Typography,
  React,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "./index.js"
import { deleteProduct, editProduct } from "../services/productService"
import { useMutation, useQueryClient } from "react-query"
import { useState } from "react"

const ProductDetails = ({ product }) => {
  const [editing, setEditing] = useState(false)
  const [productCausesProblems, setProductCausesProblems] = useState(product.isProblematic)
  const [productName, setProductName] = useState(product.name)
  const [productIngredients, setProductIngredients] = useState(product.ingredients.join(", "))

  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })

  const editMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })

  const handleEdit = () => {
    setEditing(true)
  }

  const handleEditSubmit = () => {
    const editedProduct = {
      name: productName,
      ingredients: productIngredients.split(",").map((i) => i.trim().toLowerCase()),
      isProblematic: productCausesProblems,
    }
    editMutation.mutate({ product, editedProduct })
    setEditing(false)
  }

  return (
    <Card sx={{ margin: "10px", padding: "15px", backgroundColor: "#faf5f0" }}>
      {editing ? (
        <Box>
          <FormControl sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <TextField
              defaultValue={`${productName}`}
              label="Product's name"
              multiline
              required
              onChange={(e) => setProductName(e.target.value)}
            ></TextField>
            <TextField
              defaultValue={`${productIngredients}`}
              label="Ingredients"
              multiline
              required
              onChange={(e) => setProductIngredients(e.target.value)}
            ></TextField>
            <div>
              <FormLabel component="legend">Causes problems</FormLabel>
              <RadioGroup
                row
                value={productCausesProblems}
                onChange={(e) => setProductCausesProblems(e.target.value === "true")}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </div>
          </FormControl>
          <Box>
            <Button onClick={handleEditSubmit}>Save</Button>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ margin: "1rem" }}>
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
        </Box>
      )}
    </Card>
  )
}

export default ProductDetails
