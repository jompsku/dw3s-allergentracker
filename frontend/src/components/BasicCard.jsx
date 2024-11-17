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
          {contents?.length > 0 ? (
            contents?.map((c, index) => (
              <Fragment key={index}>
                <ListItemButton onClick={() => handleClick(c._id)}>
                  {isProduct && (
                    <ListItemIcon>{c.isProblematic ? <ErrorIcon /> : <CheckIcon />}</ListItemIcon>
                  )}
                  <ListItemText primary={c.name} />
                  {open === c._id ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open === c._id} timeout="auto" unmountOnExit>
                  {isProduct ? (
                    <ProductDetails product={c} />
                  ) : (
                    <IngredientDetails ingredient={c} />
                  )}
                </Collapse>
              </Fragment>
            ))
          ) : (
            <p style={{ fontSize: "0.9rem" }}>You have no identified allergens</p>
          )}
        </List>
      </CardContent>
      <CardActions>
        {contents?.length > 10 ? <Button size="small">View more</Button> : null}
      </CardActions>
    </Card>
  )
}
