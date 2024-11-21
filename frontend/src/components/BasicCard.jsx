import {
  Card,
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
  const sortedContents = contents?.sort((a, b) => a.name?.localeCompare(b.name))

  const handleClick = (index) => {
    if (open === index) setOpen(null)
    else setOpen(index)
  }

  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: "100%",
        maxHeight: "600px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "primary.main",
          color: "white",
        }}
        title={title}
      />
      <CardContent
        sx={{
          height: "500px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "0.5em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
          },
        }}
      >
        <List sx={{width: "480px"}} dense={true}>
          {sortedContents?.length > 0 ? (
            sortedContents?.map((c, index) => (
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
    </Card>
  )
}
