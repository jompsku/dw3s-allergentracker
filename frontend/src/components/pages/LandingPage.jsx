import AllergenProductCards from "../AllergenProductCards.jsx";
import Info from "../Info.jsx";
import { Box, Button, Container, Modal, Tooltip, useState } from "../index.js";
import NewProductForm from "../NewProductForm.jsx";
import { fillDB, deleteDB } from "../../services/productService";
import { useMutation, useQueryClient } from "react-query";

function LandingPage() {
  const [open, setOpen] = useState(false);
  const handleAddClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();

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
    <Container>
      <Info />
      <Box style={{ display: "flex", marginBottom: "24px", gap: "1rem" }}>
        <Button variant="contained" onClick={handleAddClick}>
          Add product
        </Button>
        <Tooltip title="Button added to help the course personnel to test the application: deletes current user's products and refills database with test data.">
          <Button
            variant="contained"
            sx={{ backgroundColor: "gray" }}
            onClick={() => {
              mutateDelete.mutate();
            }}
          >
            Add test data
          </Button>
        </Tooltip>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <NewProductForm handleClose={handleClose} />
      </Modal>
      <AllergenProductCards />
    </Container>
  );
}

export default LandingPage;
