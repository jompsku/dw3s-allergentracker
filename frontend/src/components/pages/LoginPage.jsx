import { Box, Paper, useMediaQuery } from "@mui/material";
import { SignInPage } from "@toolpad/core/SignInPage";

function LoginPage() {
  const providers = [{ id: "google", name: "Google" }];
  const matches = useMediaQuery("(min-width:670px)");

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Paper
        sx={{
          display: "flex",
          paddingY: "2rem",
  
        }}
      >
        <SignInPage signIn={handleLogin} providers={providers} />
      </Paper>
    </Box>
  );
}

export default LoginPage;
