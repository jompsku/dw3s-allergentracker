import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  AccountCircleSharpIcon,
} from "./index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const pages = [
  { name: "User preferences", url: "/user-preferences", needsLogin: true },
  { name: `How it works`, url: "/how-it-works", needsLogin: false },
];

function Header() {
  const { user, logout } = useAuth();
  const settings = [{ name: "Logout", onClick: logout }];

  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button sx={{ textTransform: "unset" }} onClick={() => navigate("/")}>
            <Typography variant="h1" noWrap>
              Allergen Tracker
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter((page) => (page.needsLogin && user) || !page.needsLogin)
              .map((page) => (
                <Button
                  key={page.name}
                  onClick={() => navigate(page.url)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Box onClick={handleOpenUserMenu}>
                {user.name} {"(" + user.email + ")"}
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <AccountCircleSharpIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={setting.onClick}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
