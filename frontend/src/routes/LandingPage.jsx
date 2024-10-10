import AllergenProductCards from "../components/AllergenProductCards.jsx";
import Info from "../components/Info.jsx";
import { Box, Button, Container, Modal } from "@mui/material";
import NewProductForm from "../components/NewProductForm.jsx";
import { useState } from "react";

function LandingPage() {
  const [open, setOpen] = useState(false);
  const handleAddClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Info />
      <Box style={{ marginBottom: "12px" }}>
        <Button variant="contained" onClick={handleAddClick}>
          Add product
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <NewProductForm />
      </Modal>
      <AllergenProductCards />
    </Container>
  );
}

export default LandingPage;
