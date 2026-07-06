import { Card, CardContent, Typography } from "@mui/material";

export default function DashboardCard({ title, children }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
        boxShadow: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {title}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
}