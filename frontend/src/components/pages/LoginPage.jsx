import { Box, Paper, Typography } from "@mui/material"
import { SignInPage } from "@toolpad/core/SignInPage"


function LoginPage() {
  const providers = [{ id: "google", name: "Google" }]

  const signIn = (data) => {
    console.log(data)
  }

  return (
    <Box sx={{ padding: "5rem" }}>
      <Paper
        sx={{ display: "flex", flexDirection: "column", padding: "2rem", pb:"3rem", alignItems: "center" }}
      >
        <SignInPage signIn={signIn} providers={providers} />
      </Paper>
    </Box>
  )
}

export default LoginPage
