import * as React from "react"
import { Box } from "@mui/material"
import "./Info.css"

const info = () => {
  // TODO: check that there are more products than 10 added
  if (1 === 0) return 1
  else return 0
}

function Info() {
  return (
    <Box sx={{ margin: "2rem", width: "1000px" }}>
      {info() ? (
        <>
          <h1 className="infoTitle">These ingredients have been causing you issues lately</h1>
          <p className="infoText">Here you can view the possible allergens we have found.</p>
        </>
      ) : (
        <>
          <h1 className="infoTitle">You can start by adding the products you have used</h1>
          <p className="infoText">
            You should add atleast ten products so we can create an allergy profile based on your data.
          </p>
        </>
      )}
    </Box>
  )
}

export default Info
