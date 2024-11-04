import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CheckIcon,
  Collapse,
  ErrorIcon,
  ExpandLess,
  ExpandMore,
  Fragment,
  IngredientDetails,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ProductDetails,
  useState,
} from "./index.js"

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
          {contents?.length > 0 ? contents?.map((c, index) => (
            <Fragment key={index}>
              <ListItemButton onClick={() => handleClick(index)}>
                {isProduct && (
                  <ListItemIcon>{c.isProblematic ? <ErrorIcon /> : <CheckIcon />}</ListItemIcon>
                )}
                <ListItemText primary={c.name} />
                {open === index ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === index} timeout="auto" unmountOnExit>
                {isProduct ? <ProductDetails product={c} /> : <IngredientDetails />}
              </Collapse>
            </Fragment>
          )): <p style={{fontSize:"0.9rem"}}>You have no identified allergens</p>}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  )
}
