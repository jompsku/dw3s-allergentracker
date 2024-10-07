import * as React from "react"
import { useState } from "react"
import "./Footer.css"
import { Link, Snackbar } from "@mui/material"


function Footer() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText(window.location.toString())
  }

  return (
    <div className="footer">
      <Link onClick={handleClick} color="#ffffff" component="button">
        <p>allergentracker@email.com</p>
      </Link>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </div>
  )
}

export default Footer
