import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Notes", path: "/notes" },
  { name: "Notebook", path: "/notebook" },
  { name: "Subjects", path: "/subjects" },
  { name: "Whiteboard", path: "/whiteboard" },
  { name: "AI", path: "/ai" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
        },
      }}
    >
      <h2 style={{ textAlign: "center", padding: "20px 0" }}>
        Scribee
      </h2>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.name}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}