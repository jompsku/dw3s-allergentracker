import { Box, Paper } from "@mui/material";
import { SignInPage } from "@toolpad/core/SignInPage";

function LoginPage() {
  const providers = [{ id: "google", name: "Google" }];

  const handleLogin = () => {
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
    window.location.href = `${baseUrl}/auth/google`;
  };

  return (
    <Box sx={{ padding: "5rem" }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          pb: "3rem",
          alignItems: "center",
        }}
      >
        <SignInPage signIn={handleLogin} providers={providers} />
      </Paper>
    </Box>
  );
}

export default LoginPage;
