import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { CardHeader, ListItemIcon } from "@mui/material"
import List from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText"
import CheckIcon from "@mui/icons-material/Check"
import ErrorIcon from "@mui/icons-material/Error"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Fragment, useState } from "react"
import { ListItemButton } from "@mui/material"
import Collapse from "@mui/material/Collapse"
import ProductDetails from "./ProductDetails"


export default function BasicCard({ title, contents, isProduct }) {
  const [open, setOpen] = useState(null)

  const handleClick = (index) => {
    if (open === index) setOpen(null)
    else setOpen(index)
  }

  return (
    <Card variant="outlined" sx={{ minHeight: "100%" }}>
      <CardHeader
        sx={{
          backgroundColor: "primary.main",
          color: "white",
        }}
        title={title}
      />
      <CardContent>
        <List dense={true}>
          {contents?.map((c, index) => (
            <Fragment key={index}>
              <ListItemButton onClick={() => handleClick(index)}>
                {isProduct && (
                  <ListItemIcon>{c.isProblematic ? <ErrorIcon /> : <CheckIcon />}</ListItemIcon>
                )}
                <ListItemText primary={c.name} />
                {open === index ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === index} timeout="auto" unmountOnExit>
                <ProductDetails/>
              </Collapse>
            </Fragment>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  )
}
