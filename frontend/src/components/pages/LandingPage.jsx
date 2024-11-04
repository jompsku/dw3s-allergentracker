import AllergenProductCards from "../AllergenProductCards.jsx"
import Info from "../Info.jsx"
import { Box, Button, Container, Modal, useState } from "../index.js"
import NewProductForm from "../NewProductForm.jsx"

function LandingPage() {
  const [open, setOpen] = useState(false)
  const handleAddClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
      <AllergenProductCards/>
    </Container>
  )
}

export default LandingPage
