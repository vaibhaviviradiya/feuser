import Razorpay from 'razorpay';

// Initialize Razorpay with test credentials
const razorpay = new Razorpay({
  key_id: 'rzp_test_vRAfLOfVsemO4d', // Replace with your test key ID
  key_secret: 'dIOmO3jYuVesnwWh0GC5yRDP', // Replace with your test key secret
});

export const createOrder = async (amount) => {
  try {
    const response = await fetch('http://localhost:3000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // amount in paise
        currency: 'INR',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const verifyPayment = async (paymentId, orderId, signature) => {
  try {
    const response = await fetch('http://localhost:3000/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentId,
        orderId,
        signature,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to verify payment');
    }

    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
}; 