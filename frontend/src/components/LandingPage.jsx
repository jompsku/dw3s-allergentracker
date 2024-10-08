import "./LandingPage.css";
import BasicCard from "./BasicCard.jsx";
import Info from "./Info.jsx";
import { Box, Button, Container, Modal } from "@mui/material";
import { useQuery } from "react-query";
import {
  retrievePossibleAllergens,
  retrieveProducts,
} from "../services/productService.js";
import { useState } from "react";
import NewProductForm from "./NewProductForm.jsx";

function LandingPage() {
  const { data: products } = useQuery("products", retrieveProducts);
  const { data: possibleAllergens } = useQuery(
    "allergens",
    retrievePossibleAllergens
  );
  const [open, setOpen] = useState(false);
  const handleAddClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    border: "2px solid #FF7F50",
    borderRadius: "4px",
    p: 4,
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Info />
      <Box style={{ marginBottom: "12px" }}>
        <Button variant="contained" onClick={handleAddClick}>
          Add product
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="form">
          <NewProductForm />
        </Box>
      </Modal>
      <div className="cards">
        <BasicCard title="Your top allergens" contents={possibleAllergens} />
        <BasicCard title="Your products" contents={products} isProduct />
      </div>
    </Container>
  );
}

export default LandingPage;
