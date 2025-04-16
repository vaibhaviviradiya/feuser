import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Typography,  Button,Container,  Grid,Card,CardMedia,IconButton,  Divider,Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartContext } from '../Components/CartContext';

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useContext(CartContext);

  // Function to go back to shopping
  const continueShopping = () => {
    navigate('/home');
  };

  // Function to go to checkout
  const goToCheckout = () => {
    // You can implement checkout logic here
    navigate('/checkout');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Your Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" gutterBottom>Your cart is empty</Typography>
          <Button
            variant="contained"
            onClick={continueShopping}
            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, mb: { xs: 4, md: 0 } }}>
              {cart.map((item) => (
                <Box key={item.id} sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    {/* Product Image */}
                    <Grid item xs={3} sm={2}>
                      {item.picture && item.picture.length > 0 ? (
                        <CardMedia
                          component="img"
                          image={`http://localhost:3000/images/${item.picture[0]}`}
                          alt={item.product_name}
                          sx={{ width: '100%', height: 80, objectFit: 'contain' }}
                        />
                      ) : (
                        <Box sx={{ bgcolor: '#f5f5f5', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="body2">No image</Typography>
                        </Box>
                      )}
                    </Grid>

                    {/* Product Info */}
                    <Grid item xs={9} sm={4}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                        {item.product_name}
                      </Typography>
                      {item.color && (
                        <Typography variant="body2" color="text.secondary">
                          Color: {item.color.join(", ")}
                        </Typography>
                      )}
                    </Grid>

                    {/* Price */}
                    <Grid item xs={4} sm={2}>
                      <Typography variant="body1">
                        ₹{item.price?.toLocaleString() || 0}
                      </Typography>
                    </Grid>

                    {/* Quantity Controls */}
                    {/* Quantity Controls */}
                    <Grid item xs={4} sm={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                          onClick={() => {
                            console.log("Decreasing quantity for item:", item.id);
                            updateQuantity(item.id, item.quantity - 1);
                          }}
                          size="small"
                          sx={{ border: '1px solid #ddd' }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ mx: 1, minWidth: '24px', textAlign: 'center' }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            console.log("Increasing quantity for item:", item.id);
                            updateQuantity(item.id, item.quantity + 1);
                          }}
                          size="small"
                          sx={{ border: '1px solid #ddd' }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Grid>

                    {/* Total and Delete */}
                    <Grid item xs={4} sm={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </Typography>
                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 2 }} />
                </Box>
              ))}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  variant="outlined"
                  color='black'
                  onClick={continueShopping}
                  startIcon={<ShoppingBagIcon />}
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Items ({cart.reduce((count, item) => count + item.quantity, 0)}):</Typography>
                <Typography variant="body1">₹{getTotal().toLocaleString()}</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Shipping:</Typography>
                <Typography variant="body1">Free</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Tax:</Typography>
                <Typography variant="body1">--</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>₹{getTotal().toLocaleString()}</Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={goToCheckout}
                sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
              >
                Proceed to Buy
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default CartPage;