import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

const Payment = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:3000/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // amount in paise
          currency: 'INR',
        }),
      });

      const data = await response.json();

      const options = {
        key: 'rzp_test_vRAfLOfVsemO4d',
        amount: data.amount,
        currency: data.currency,
        name: 'LUXE',
        description: 'Payment for your order',
        order_id: data.id,
        handler: async function (response) {
          try {
            // Verify payment
            const verifyResponse = await fetch('http://localhost:3000/api/payment/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature
              }),
            });

            const verifyData = await verifyResponse.json();
            if (verifyData.isValid) {
              setSuccess(true);
              console.log('Payment successful:', response);
            } else {
              setError('Payment verification failed');
            }
          } catch (err) {
            setError('Failed to verify payment');
            console.error('Verification error:', err);
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError('Failed to initiate payment. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Total Amount: ₹{amount}
      </Typography>
      
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      
      {success && (
        <Typography color="success.main" sx={{ mb: 2 }}>
          Payment successful!
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        disabled={loading}
        fullWidth
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </Button>
    </Box>
  );
};

export default Payment; 