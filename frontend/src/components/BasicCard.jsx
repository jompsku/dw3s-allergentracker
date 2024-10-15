import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function BasicCard({ title, contents, isProduct }) {
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
            <ListItem key={index}>
              {isProduct && (
                <ListItemIcon>
                  {c.isProblematic ? <ErrorIcon /> : <CheckIcon />}
                </ListItemIcon>
              )}
              <ListItemText primary={c.name} />
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  );
}
