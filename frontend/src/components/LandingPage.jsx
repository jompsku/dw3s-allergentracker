import * as React from "react"
import "./LandingPage.css"
import BasicCard from "./BasicCard.jsx"
import Info from "./Info.jsx"
import { Container } from "@mui/material"

function LandingPage() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Info />
      <div className="cards">
        <BasicCard title="Ingredients" />
        <BasicCard title="Products" />
      </div>
    </Container>
  )
}

export default LandingPage
