import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { Box, Typography, Button, Grid, CardMedia, IconButton, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Components/CartContext';

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation(); //current page ni details aapse like url info. and je data pass karyo aeni
  const product = location.state?.product;
  
  // Use cart context
  const {addToCart, getItemCount,updateQuantity } = useContext(CartContext);
  
  // Local state for quantity
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  // jo direct url thi product page open kare ne location ma state na male to 
  if (!product) return <Typography>No product found</Typography>;
  
  // Slider settings for multiple product images
  const sliderSettings = {
    dots: true,
    infinite: product.picture?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: product.picture?.length > 1,
    autoplaySpeed: 1000,
  };
  console.log("Product to add:", product);
console.log("Product ID:", product._id);

  // function to add the current product to the cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // reset notification after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const goToCart = () => {
    navigate('/cart');
  };
  
  const increaseQuantity = () => {
    updateQuantity(product._id,quantity+1);
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id,quantity-1)
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={goToCart} sx={{ position: 'relative' }}>
          <Badge badgeContent={getItemCount()} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {product.picture && product.picture.length > 0 ? (
            <Slider {...sliderSettings}>
              {product.picture.map((pic, i) => (
                <Box key={i}>
                  <CardMedia
                    component="img"
                    image={`http://localhost:3000/images/${pic}`}
                    alt={`Product ${i}`}
                    sx={{ width: '100%', height: 500, objectFit: 'contain' }}
                  />
                </Box>
              ))}
            </Slider>
          ) : (
            <Box sx={{ height: 500, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography>No image available</Typography>
            </Box>
          )}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            {product.product_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.material} {product.color && `| ${product.color.join(", ")}`}
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            ₹{product.price?.toLocaleString() || 0}
          </Typography>
          
          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>Quantity:</Typography>
            <IconButton 
              onClick={decreaseQuantity} 
              disabled={quantity <= 1}
              size="small"
              sx={{ border: '1px solid #ddd' }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography sx={{ mx: 2, minWidth: '30px', textAlign: 'center' }}>
              {quantity}
            </Typography>
            <IconButton 
              onClick={increaseQuantity}
              size="small"
              sx={{ border: '1px solid #ddd' }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
          
          {/* Add to cart button */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              fullWidth 
              onClick={handleAddToCart}
              sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
            >
              Add To Cart
            </Button>
              {addedToCart && (
                <Typography  sx={{ mt: 1, textAlign: 'center',color:'grey' }}>
                  Product added to cart!
                </Typography>
              )}
          </Box>
          
          {/* View cart button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={goToCart}
            sx={{ mb: 4 }}
            startIcon={<ShoppingCartIcon />}
          >
            View Cart
          </Button>
          
          <Typography variant="h6" gutterBottom>Description</Typography>
          <Typography variant="body1" sx={{ fontSize: 13, fontFamily: 'Century Gothic', mb: 2 }}>
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetail;