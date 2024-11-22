import AllergenProductCards from "../AllergenProductCards.jsx"
import Info from "../Info.jsx"
import { Box, Button, Container, Modal, Tooltip, useState } from "../index.js"
import NewProductForm from "../NewProductForm.jsx"
import { fillDB } from "../../services/productService"
import { useMutation, useQueryClient } from "react-query"

function LandingPage() {
  const [open, setOpen] = useState(false)
  const handleAddClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const queryClient = useQueryClient()

  const testDataMutation = useMutation({
    mutationFn: fillDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })

  return (
    <Container>
      <Info />
      <Box style={{ display: "flex", marginBottom: "24px", gap: "1rem" }}>
        <Button variant="contained" onClick={handleAddClick}>
          Add product
        </Button>
        <Tooltip title="Button added to help the course personnel to test the application">
          <Button
            variant="contained"
            sx={{ backgroundColor: "gray" }}
            onClick={() => testDataMutation.mutate()}
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
  )
}

export default LandingPage
