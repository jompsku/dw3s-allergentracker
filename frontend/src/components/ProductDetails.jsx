import { Button, Card, Typography, React } from "./index.js"

const ProductDetails = ({ product }) => {
  const handleDelete = () => {
    alert("delete")
  }

  const handleEdit = () => {
    alert("edit")
  }

  return (
    <Card sx={{ margin: "10px", padding: "15px", backgroundColor: "#faf5f0" }}>
      <Typography fontWeight={"bold"}>{product.name}</Typography>
      <h5>Ingredients:</h5>
      <Typography>{product.ingredients?.map((i) => `${i}`).join(`, `)}</Typography>
      {product.isProblematic ? (
        <p style={{color:"red", fontWeight:"bold", fontSize:"0.9rem"}}>The product has been causing allergies</p>
      ) : (
        <p style={{fontWeight:"bold", fontSize:"0.9rem"}}>The product has not caused any allergies</p>
      )}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  )
}

export default ProductDetails
