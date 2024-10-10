const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

const authenticationRouter = require("express").Router();

authenticationRouter.post("/api/auth/google", async (req, res) => {
  const { credential } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience:
      "408468159516-9pf3e64af4knq24jm532g234ac3gqk3j.apps.googleusercontent.com",
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  const email = payload["email"];
  const name = payload["name"];
  res.send({ userid, email, name });
});

module.exports = authenticationRouter;
