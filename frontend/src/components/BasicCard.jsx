import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function BasicCard({ title, contents }) {
  console.log(contents);
  return (
    <Card variant="outlined" sx={{ minWidth: "500px" }}>
      <CardHeader
        sx={{ backgroundColor: "#FF7F50", maxHeight: "1rem", color: "white" }}
        title={title}
      />
      <CardContent>
        <List dense={true}>
          {contents?.map((c) => (
            <ListItem key={c.id}>
              <ListItemText primary={c.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
