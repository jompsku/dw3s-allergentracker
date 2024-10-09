import AllergenProductCards from "./AllergenProductCards.jsx";
import Info from "./Info.jsx";
import { Box, Button, Container, Modal } from "@mui/material";
import NewProductForm from "./NewProductForm.jsx";
import { useState } from "react";

function LandingPage() {
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
    <Container>
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
      <AllergenProductCards />
    </Container>
  );
}

export default LandingPage;
