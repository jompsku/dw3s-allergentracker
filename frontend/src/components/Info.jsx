import * as React from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { retrieveProducts } from "../services/productService";
import "./Info.css";

function Info() {
  const { data, error, isLoading } = useQuery("products", retrieveProducts);

  return (
    <Box>
      {data?.length >= 5 ? (
        <>
          <h1 className="infoTitle">
            These ingredients have been causing you issues lately
          </h1>
          <p className="infoText">
            Here you can view the possible allergens we have found.
          </p>
        </>
      ) : (
        <>
          <h1 className="infoTitle">
            You can start by adding the products you have used
          </h1>
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
