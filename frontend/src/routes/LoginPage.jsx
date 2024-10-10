import { Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { login, user } = useAuth();

  const onSuccess = async (response) => {
    const credential = response.credential;
    const authenticationResponse = await axios.post(
      "http://localhost:8080/api/auth/google",
      {
        credential,
      }
    );
    const { name, email, userid } = authenticationResponse.data;
    login({ userid, email, name });
  };

  const onError = (error) => console.log(error);

  return (
    <Box>
      {!user ? (
        <GoogleLogin onSuccess={onSuccess} onError={onError} />
      ) : (
        <>Hello {user.name}</>
      )}
    </Box>
  );
};

export default LoginPage;
