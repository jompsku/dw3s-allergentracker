import { Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const onSuccess = (response) => setToken(response.credential);
  const onError = (error) => console.log(error);

  const [token, setToken] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      setProfile({ name: user.name, email: user.email });
    }
  }, [token]);
  return (
    <Box>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
      {JSON.stringify(profile)}
    </Box>
  );
};

export default LoginPage;
