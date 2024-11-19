import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { addProduct } from "../services/productService";
import { useMutation, useQueryClient } from "react-query";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #FF7F50",
  borderRadius: "4px",
  p: 4,
};

const NewProductForm = forwardRef(({ handleClose }, ref) => {
  const [productName, setProductName] = useState("");
  const [productIngredients, setProductIngredients] = useState("");
  const [productCausesProblems, setProductCausesProblems] = useState(false);
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleAdd = async () => {
    const newProduct = {
      productName,
      productIngredients: productIngredients
        .split(",")
        .map((i) => i.trim().toLowerCase()),
      productCausesProblems,
    };
    addMutation.mutate(newProduct);
    handleClose();
  };

  const handleScanIngredients = () => {
    const newIngredients = "Glycerol, ASA, panthenol, Polysorbate 20";
    setProductIngredients(newIngredients);
  };

  return (
    <Box sx={style} component="form" ref={ref} tabIndex={-1}>
      <Typography variant="h4" gutterBottom style={{ color: "#FF7F50" }}>
        Add product
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <TextField
        label="Ingredients"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={productIngredients}
        onChange={(e) => setProductIngredients(e.target.value)}
        required
      />
      <Button
        type="button"
        variant="outlined"
        onClick={handleScanIngredients}
        style={{ marginTop: "10px" }}
      >
        Or scan a label
      </Button>
      <div>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Causes problems</FormLabel>
          <RadioGroup
            row
            value={productCausesProblems}
            onChange={(e) => setProductCausesProblems(e.target.value)}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button type="submit" variant="contained" onClick={() => handleAdd()}>
        Add Product
      </Button>
    </Box>
  );
});

NewProductForm.displayName = "NewProductForm";

export default NewProductForm;
