import * as React from "react"
import "./LandingPage.css"
import BasicCard from "./Card.jsx"
import Info from "./Info.jsx"
import { Box } from "@mui/material"

function LandingPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
      <Info />
      <div className="cards">
        <BasicCard title="Ingredients" />
        <BasicCard title="Products" />
      </div>
    </Box>
  )
}

export default LandingPage
