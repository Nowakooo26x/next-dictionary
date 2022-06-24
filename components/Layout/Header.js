import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

function Header() {
  const [anchorEl, setAnchorEl] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              onClick={handleClick}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/random">Random Words</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/favourite">Favourite Words</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/study">Study Words</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/lesson">Lesson Words</Link>
              </MenuItem>
            </Menu>
            <Typography variant="h5">
              <Link href="/">StudyWords</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
