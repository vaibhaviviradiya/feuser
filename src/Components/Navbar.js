import * as React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemButton, TextField, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var fetchcategorydata = async () => {
      axios.get('http://localhost:3000/admin/dispcategory')
        .then((res) => {
          setCategory(res.data.data);
          console.log("Category == ", res.data.data);
        })
        .catch((error) => {
          console.error('Error fetching category data:', error);
        })

    }
    fetchcategorydata()
  }, [])

  const handleCategoryClick = (cname) => {
    const name = cname;
    if (cname === "Women's Fashion") {
      console.log("Hello = " + cname);
      navigate("/womens-fashion");
    }
    else if(cname === "Men Fashion"){
      console.log("Hey men = "+cname);
      navigate("/mens-fashion");
    }

  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  const toggleSearchDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSearchDrawerOpen(open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ backgroundColor: "white", top: 0, zIndex: 1100 }}>
        <Toolbar>
          {/* Menu Icon Button */}
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Open drawer when clicked
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
          <IconButton onClick={toggleSearchDrawer(true)}> <SearchRoundedIcon /></IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Sidebar Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          {/* Close Icon Button inside Drawer */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}
          >
            <CloseIcon />
          </IconButton>
          {/* here it display all category from fetchcategorydata */}
          {category.map((cat) => (
            <List>
              <ListItem key={cat._id}
                disablePadding
              >
                <ListItemButton onClick={() => handleCategoryClick(cat.category_name)}>
                  <ListItemText primary={cat.category_name} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}


        </Box>
      </Drawer>

      <Drawer
        anchor="top"
        open={searchDrawerOpen}
        onClose={toggleSearchDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { height: "100%", width: "100%" } }}
      >
        <Box sx={{ p: 3 }}>
          {/* Close Button */}
          <IconButton onClick={toggleSearchDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="What are you looking for?"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIosIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
              sx: { fontSize: "1.2rem", pb: 1 },
            }}
          />

          {/* Suggestions */}
          <Typography variant="subtitle1" sx={{ color: "gray", mt: 3 }}>
            Suggestions
          </Typography>
          <List>
            {["Lady Dior", "Wallet", "Shoes", "Saddle bag", "Sunglasses", "Bags"].map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          {/* "You may also like" Section */}
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            You may also like
          </Typography>
          <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
            {[
              "https://via.placeholder.com/100",
              "https://via.placeholder.com/100",
              "https://via.placeholder.com/100",
              "https://via.placeholder.com/100",
            ].map((img, index) => (
              <img key={index} src={img} alt="Product" style={{ width: 100, height: 100, borderRadius: 5 }} />
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
