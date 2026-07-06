import Layout from "../components/layout/Layout";
import DashboardCard from "../components/common/DashboardCard";
import { Grid, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Layout>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome back 👋
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Your AI-powered study workspace.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DashboardCard title="📝 Recent Notes">
            You haven't created any notes yet.
          </DashboardCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <DashboardCard title="📚 Subjects">
            No subjects added yet.
          </DashboardCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <DashboardCard title="📖 Notebook">
            Create your first notebook.
          </DashboardCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <DashboardCard title="🤖 AI Assistant">
            Ready to summarize PDFs and notes.
          </DashboardCard>
        </Grid>
      </Grid>
    </Layout>
  );
}