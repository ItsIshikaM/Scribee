import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "220px",
        width: "calc(100% - 220px)",
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          Scribee
        </Typography>
      </Toolbar>
    </AppBar>
  );
}