import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Components/CartContext';
import { Container, Paper, Typography, Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

function Purchase() {
  const { cart, getTotal } = useContext(CartContext);
  const [userData, setUserData] = useState(null);
  const [orderDate, setOrderDate] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();

  const [orderSaved, setOrderSaved] = useState(false)
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem('userinfo');
    console.log(user);

    if (user) {
      var data = JSON.parse(user);
      setUserData(data);
      //   console.log("USER DATA  = ",userData.Data);

    } else {
      navigate('/');
    }

    // Generate order date
    const today = new Date();
    setOrderDate(today.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }));

    // Generate random order number
    setOrderNumber('ORD-' + Math.floor(100000 + Math.random() * 900000));

  }, [navigate]);

  useEffect(() => {
    const saveOrder = async () => {
      if (userData && cart.length > 0 && !orderSaved) {
        try {
          await SaveOrdertoDatabase();
        } catch (err) {
          console.error("Failed to save order:", err);
        }
      }
    };

    saveOrder();
  }, [userData, cart, orderSaved]);

  const SaveOrdertoDatabase = async () => {
    try {
      console.log("Starting to save order...");
      console.log("User data:", userData);
      console.log("Cart:", cart);
      var orderData = {
        orderid: orderNumber,
        orderdate: orderDate,
        username: userData.Data.name || userData.Data.username,
        email: userData.Data.email,
        contact: userData.Data.contact,
        orderitems: cart.map(item => ({
          productid: item.id,
          productname: item.product_name,
          price: item.price,
          quantity: item.quantity,
          color: item.color ? item.color.join(", ") : "",
          picture: item.picture ? item.picture[0] : ""
        })),
        subtotal: getTotal(),
        status: "Processing"
      };

      console.log(orderData);
      
      const response = await axios.post('http://localhost:3000/admin/addorder', orderData);

      console.log('Order saved successfully:', response.data);
      setOrderSaved(true);

    }
    catch (error) {
      console.error('Error saving order. Details:', {
        message: error.message,
        response: error.response ? {
          status: error.response.status,
          data: error.response.data
        } : 'No response',
        request: error.request ? 'Request was made but no response received' : 'No request was made'
      });
      console.error('Error saving order:', error);
      setSaveError(error.message);
    }
  }


  const handlePrint = () => {
    window.print();
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  if (!userData) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h6">Loading purchase information...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {saveError && (
        <Paper elevation={3} sx={{ p: 2, mb: 2, bgcolor: '#ffebee' }}>
          <Typography color="error">
            There was an error saving your order: {saveError}
          </Typography>
        </Paper>
      )}

      {orderSaved && (
        <Paper elevation={3} sx={{ p: 2, mb: 2, bgcolor: '#e8f5e9' }}>
          <Typography color="success.main">
            Your order has been successfully saved!
          </Typography>
        </Paper>
      )}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          border: '1px solid #ddd',
          '@media print': {
            boxShadow: 'none',
            border: 'none'
          }
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', letterSpacing: 4 }}>
            LUXE
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>PURCHASE RECEIPT</Typography>
            <Typography variant="body2">Order #: {orderNumber}</Typography>
            <Typography variant="body2">Date: {orderDate}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* User Information */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>CUSTOMER INFORMATION</Typography>
            <Typography variant="body1">Name : {userData.Data.name || userData.Data.username}</Typography>
            <Typography variant="body1">Email : {userData.Data.email || userData.Data.email}</Typography>
            <Typography variant="body1">Contact : {userData.Data.contact || userData.Data.contact}</Typography>

            {userData.email && <Typography variant="body1">Email: {userData.email}</Typography>}
            {userData.phone && <Typography variant="body1">Phone: {userData.phone}</Typography>}
            {userData.address && <Typography variant="body1">Address: {userData.address}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>SHIPPING INFORMATION</Typography>
            <Typography variant="body1">Shipping Method: Standard Delivery</Typography>
            <Typography variant="body1">Estimated Delivery: Within 5-7 working days</Typography>
            <Typography variant="body1">Status: Processing</Typography>
          </Grid>
        </Grid>

        {/* Order Items */}
        <Typography variant="h6" sx={{ mb: 2 }}>ORDER DETAILS</Typography>
        <TableContainer component={Paper} elevation={0} sx={{ mb: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.picture && item.picture.length > 0 ? (
                      <CardMedia
                        component="img"
                        image={`http://localhost:3000/images/${item.picture[0]}`}
                        alt={item.product_name}
                        sx={{ width: 60, height: 60, objectFit: 'contain' }}
                      />
                    ) : (
                      <Box sx={{ bgcolor: '#f5f5f5', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2">No image</Typography>
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.product_name}</Typography>
                    {item.color && (
                      <Typography variant="body2" color="text.secondary">
                        Color: {item.color.join(", ")}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">₹{item.price?.toLocaleString() || 0}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">₹{(item.price * item.quantity).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Order Summary */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mb: 4 }}>
          <Box sx={{ width: { xs: '100%', sm: '50%' }, mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1">₹{getTotal().toLocaleString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">Shipping:</Typography>
              <Typography variant="body1">Free</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">Tax (GST):</Typography>
              <Typography variant="body1">Included</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total:</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>₹{getTotal().toLocaleString()}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Thank You Message */}
        <Divider sx={{ my: 3 }} />
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Thank you for shopping with LUXE!</Typography>
          <Typography variant="body2">
            For questions or support, please contact customer service at support@luxe.com
          </Typography>
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }} className="no-print" style={{ '@media print': { display: 'none' } }}>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={handleGoHome}
          sx={{ bgcolor: 'black', '&:hover': { bgcolor: '#333' } }}
        >
          Continue Shopping
        </Button>
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{ borderColor: 'black', color: 'black', '&:hover': { bgcolor: '#f4f4f4' } }}
        >
          Print Receipt
        </Button>
      </Box>
    </Container>
  );
}

export default Purchase;