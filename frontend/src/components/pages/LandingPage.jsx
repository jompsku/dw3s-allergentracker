import AllergenProductCards from "../AllergenProductCards.jsx";
import Info from "../Info.jsx";
import { Box, Button, Container, Modal, theme, Tooltip, useState } from "../index.js";
import NewProductForm from "../NewProductForm.jsx";
import { fillDB, deleteDB } from "../../services/productService";
import { useMutation, useQueryClient } from "react-query";
import { useMediaQuery } from "@mui/material";

function LandingPage() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);
  const handleAddClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();
  const matches = useMediaQuery("(min-width:670px)");

  const mutateDelete = useMutation({
    mutationFn: deleteDB,
    onSuccess: () => {
      mutateAdd.mutate();
    },
  });

  const mutateAdd = useMutation({
    mutationFn: fillDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return (
    <Container sx={{ p: 0 }}>
      <Info />
      <Box style={{ display: "flex", marginBottom: "24px", gap: "1rem" }}>
        <Button variant="contained" onClick={handleAddClick}>
          Add product
        </Button>
        <Tooltip title="Button added to help the course personnel to test the application.">
          <Button variant="contained" sx={{ backgroundColor: "gray" }} onClick={handleOpenModal}>
            Add test data
          </Button>
        </Tooltip>
      </Box>
      <Modal open={modal} onClose={handleCloseModal}>
        <Box sx={(theme) => ({ ...theme.components.Modal, width: matches ? "400px" : "100%" })}>
          <Box sx={(theme) => ({ ...theme.typography.subtitle2, mb: 3 })}>
            Are you sure you want to delete all your products from the database and refill it with
            test data?
          </Box>
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              mutateDelete.mutate();
              handleCloseModal();
            }}
          >
            Continue
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 1, backgroundColor: "gray" }}
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        sx={{ alignSelf: "center", maxWidth: matches ? "unset" : "100%" }}
        open={open}
        onClose={handleClose}
      >
        <NewProductForm handleClose={handleClose} />
      </Modal>
      <AllergenProductCards />
    </Container>
  );
}

export default LandingPage;
