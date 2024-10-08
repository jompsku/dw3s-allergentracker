import * as React from "react"
import "./LandingPage.css"
import BasicCard from "./BasicCard.jsx"
import Info from "./Info.jsx"
import { Container } from "@mui/material"

function LandingPage() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="cards">
        <Info />
        <BasicCard title="Your top allergens" />
        <BasicCard title="Your products" />
      </div>
    </Container>
  )
}

export default LandingPage
