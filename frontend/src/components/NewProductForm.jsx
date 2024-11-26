import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { addProduct } from "../services/productService";
import { useMutation, useQueryClient } from "react-query";
import IngredientOCRWithCrop from "./IngredientOCRWithCrop";

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

  return (
    <Box sx={(theme) => theme.components.Modal} ref={ref} tabIndex={-1}>
      <form onSubmit={handleAdd}>
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
        <IngredientOCRWithCrop
          {...{ productIngredients, setProductIngredients }}
        />
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
        <Button type="submit" variant="contained">
          Add Product
        </Button>
        <Button
          type="reset"
          variant="contained"
          sx={{ ml: 1, backgroundColor: "gray" }}
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
});

NewProductForm.displayName = "NewProductForm";

export default NewProductForm;
