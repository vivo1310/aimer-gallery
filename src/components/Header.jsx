import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";
import { APP_NAME, rooms } from "/src/data/data";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            {APP_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider
                orientation="vertical"
                variant="middle"
                light
                sx={{ backgroundColor: "common.white" }}
                flexItem
              />
              {rooms.map((page) => (
                <>
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    href={page.path}
                    sx={{
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="caption"
                      textAlign="center"
                      sx={{ textDecoration: "none" }}
                    >
                      {page.name}
                    </Typography>
                  </Button>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    light
                    sx={{ backgroundColor: "common.white" }}
                    flexItem
                  />
                </>
              ))}
            </Box>
          </Box>

          {/* MOBILE VIEW */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="list of rooms"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize="large" sx={{ color: "common.white" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {rooms.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    variant="button"
                    color="text.primary"
                    sx={{ textDecoration: "none" }}
                    component="a"
                    href={page.path}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            {APP_NAME}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
