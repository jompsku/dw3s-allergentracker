import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { retrieveProducts } from "../services/productService";

function Info() {
  const { data, error, isLoading } = useQuery("products", retrieveProducts);

  return (
    <Box>
      {data?.length >= 5 ? (
        <>
          <Typography variant="h2" className="infoTitle" sx={{ my: 2 }}>
            These ingredients have been causing you issues lately
          </Typography>
          <p className="infoText">
            Here you can view the possible allergens we have found.
          </p>
        </>
      ) : (
        <>
          <Typography variant="h2" className="infoTitle" sx={{ my: 2 }}>
            You can start by adding the products you have used
          </Typography>
          <p className="infoText">
            You should add atleast ten products so we can create an allergy
            profile based on your data.
          </p>
        </>
      )}
    </Box>
  );
}

export default Info;
