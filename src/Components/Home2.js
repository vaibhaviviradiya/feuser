import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Home2() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = React.useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleSubDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSubDrawerOpen(open);
  };

  const toggleSearchDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSearchDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Menu Icon Button */}
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Luxe Text in Center */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              textAlign: "center",
              color: "black",
              flexGrow: 1,
            }}
          >
            LUXE
          </Typography>

          {/* Search Button */}
          <IconButton onClick={toggleSearchDrawer(true)}>
            <SearchRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
          {/* Close Icon */}
          <IconButton onClick={toggleDrawer(false)} sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
            <CloseIcon />
          </IconButton>

          <List>
            {/* Open Right-Side Drawer when clicking on "Fashion" */}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleSubDrawer(true)}>
                <ListItemText primary="Fashion" />
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Accessories" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Right-side Drawer for Fashion Categories */}
      <Drawer anchor="right" open={subDrawerOpen} onClose={toggleSubDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation" onKeyDown={toggleSubDrawer(false)}>
          {/* Close Icon */}
          <IconButton onClick={toggleSubDrawer(false)} sx={{ m: 1 }}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 2, mb: 2 }}>
            Fashion Categories
          </Typography>

          <List>
            {["Men's Fashion", "Women's Fashion", "Kids' Fashion"].map((category) => (
              <ListItem disablePadding key={category}>
                <ListItemButton>
                  <ListItemText primary={category} />
                  <ArrowForwardIosIcon fontSize="small" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
