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
import { useState } from "react";

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

const NewProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productIngredients, setProductIngredients] = useState("");
  const [productCausesProblems, setProductCausesProblems] = useState("no");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      productName,
      productIngredients,
      productCausesProblems,
    };
    console.log(newProduct);
  };

  const handleScanIngredients = () => {
    const newIngredients = "Water, Ethanol";
    setProductIngredients(newIngredients);
  };

  return (
    <Box sx={style} component="form">
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
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Add Product
      </Button>
    </Box>
  );
};

export default NewProductForm;