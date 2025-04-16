import * as React from "react";
import { Box, AppBar, Toolbar, IconButton, Badge, Typography, Drawer, List, ListItem, ListItemText, ListItemButton, TextField, InputAdornment, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Tooltip from '@mui/material/Tooltip';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Components/CartContext';
import { useContext } from "react";
import i1 from '../Components/Images/jewelry.webp'
import i4 from '../Components/Images/small_goods.avif'
import i3 from '../Components/Images/women-shoes2.webp'
import i2 from '../Components/Images/men-shoes.avif'

export default function Navbar() {
  const { clearCart } = useContext(CartContext)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  const { addToCart, getItemCount } = useContext(CartContext);
  const [searchData, setSearchData] = useState("")

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

  useEffect(() => {
    var fetchproductdata = async () => {
      axios.get('http://localhost:3000/admin/viewproduct')
        .then((res) => {
          setProducts(res.data.data);
          console.log("products availl == ", res.data.data);
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        })
    }
    fetchproductdata()
  }, [])
  console.log("hello products", products);

  const logout = () => {
    clearCart();
    sessionStorage.removeItem('userinfo')
    navigate('/')
  }

  const handleCategoryClick = (cname) => {
    const name = cname;
    if (cname === "Women's Fashion") {
      console.log("Hello = " + cname);
      navigate("/womens-fashion");
    }
    else if (cname === "Men Fashion") {
      console.log("Hey men = " + cname);
      navigate("/mens-fashion");
    }
    else if(cname === "Kids & Baby")
    {
      navigate('/kidsbaby')
    }
    else if (cname === "Home") {
      navigate("/home");
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const handleSearch = () => {
    const res = searchData.toLowerCase().trim();
    console.log("res search", res);

    var matchp = products.filter(item => item.product_name.toLowerCase().includes(res))
    console.log("match product = ",matchp);
    if (matchp) {
      navigate(`/product/${matchp[0]._id}`,{state : {product : matchp[0]}});
    } else {
      alert("No matching product found.");
    }
    setSearchDrawerOpen(false)
  }

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
  const itemData = [
    {
      img: i1,
      title: "product1"
    },
    {
      img: i2,
      title: "product2"
    },
    {
      img: i3,
      title: "product3"
    },
    {
      img: i4,
      title: "product4"
    }
  ]
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


          {/* cart */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2 }}>
            <Tooltip title="Cart"><IconButton onClick={goToCart} sx={{ position: 'relative' }}>
              <Badge badgeContent={getItemCount()} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton></Tooltip>
          </Box>

          <Tooltip title="Search"><IconButton onClick={toggleSearchDrawer(true)}> <SearchRoundedIcon /></IconButton></Tooltip>
          <Tooltip title="Logout"><IconButton onClick={logout}><LogoutTwoToneIcon /></IconButton></Tooltip>
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
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer", '&:hover': { color: "black" } }} onClick={handleSearch} />
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
            {["Lady Dior", "Boots", "Belt", "Saddle bag", "Sunglasses", "Dior Necklace"].map((item) => (
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
            {itemData.map((item, index) => (
              <img key={index} src={item.img} alt={item.title} style={{ width: 'auto', height: 100, borderRadius: 0 }} />
            ))}
          </Box>
        </Box>
      </Drawer>

    </Box>

  );
}
