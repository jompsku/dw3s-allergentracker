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
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [{ name: `How it works`, url: "/how-it-works", needsLogin: false }];

function Header() {
  const { user, logout } = useAuth();
  const settings = [{ name: "Logout", onClick: logout }];
  let location = useLocation();
  const matches = useMediaQuery("(min-width:670px)");

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
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

          <Box sx={{ flexGrow: 1, display: { xs: matches ? "flex" : "none" } }}>
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
          {!matches && (
            <>
              <MenuIcon
                sx={{ alignSelf: "center", m: 1, cursor: "pointer" }}
                onClick={handleOpenMenu}
              ></MenuIcon>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-topbar"
                anchorEl={anchorElMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElMenu)}
                onClose={handleCloseMenu}
              >
                {pages
                  .filter((page) => (page.needsLogin && user) || !page.needsLogin)
                  .map((page) => (
                    <MenuItem key={page.name} onClick={() => navigate(page.url)}>
                      <Typography sx={{ textAlign: "center" }}>{page.name}</Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </>
          )}
          {user && (
            <Box>
              <Box sx={{ display: "flex", direction: "column" }}>
                {matches && (
                  <Typography sx={{ alignSelf: "center", m: 1 }}>
                    {user.name} {"(" + user.email + ")"}
                  </Typography>
                )}
                <Tooltip title="Profile" onClick={handleOpenUserMenu}>
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
                    <Typography sx={{ textAlign: "center" }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          {!user && location.pathname !== "/login" && (
            <Button
              onClick={() => navigate("/login")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
