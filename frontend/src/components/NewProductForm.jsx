import "./LandingPage.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
    <div>
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
    </div>
  );
};

export default NewProductForm;
