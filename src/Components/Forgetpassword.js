import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  LinearProgress,
  Link
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: 2,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1: Email entry, 2: OTP & new password
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setNotification({
          open: true,
          message: 'OTP sent successfully. Please check your email.',
          severity: 'success',
        });
        setStep(2); // Move to OTP verification step
      } else {
        setNotification({
          open: true,
          message: data.message || 'Failed to send OTP. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!otp || !newPassword || !confirmPassword) {
      setNotification({
        open: true,
        message: 'Please fill in all fields',
        severity: 'error',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setNotification({
        open: true,
        message: 'Passwords do not match',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/admin/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (data.success) {
        setNotification({
          open: true,
          message: 'Password reset successful. You can now login with your new password.',
          severity: 'success',
        });
        
        // Clear all fields
        setEmail('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
        setStep(1); // Optional: go back to step 1
      } else {
        setNotification({
          open: true,
          message: data.message || 'Failed to reset password. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <Paper elevation={6} sx={{ width: '100%', p: 4, borderRadius: 2 }}>
          {/* Company/App Name */}
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 1 }}
          >
            RESTORE
          </Typography>

          <Typography variant="h6" align="center" sx={{ mb: 4 }}>
            Forgot Password
          </Typography>

          {/* Loading indicator */}
          {isSubmitting && <LinearProgress sx={{ mb: 3 }} />}

          {step === 1 ? (
            <>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
                Enter your email address and we'll send you an OTP to reset your password.
              </Typography>

              <Box component="form" onSubmit={handleRequestOTP} sx={{ mt: 1 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: 'black' }}
                >
                  {isSubmitting ? 'Sending OTP...' : 'Send OTP'}
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
                Please enter the OTP sent to your email and your new password.
              </Typography>

              <Box component="form" onSubmit={handleResetPassword} sx={{ mt: 1 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="otp"
                  label="OTP"
                  name="otp"
                  autoFocus
                  value={otp}
                  onChange={handleOtpChange}
                  disabled={isSubmitting}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="newPassword"
                  label="New Password"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  disabled={isSubmitting}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm New Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: 'black' }}
                >
                  {isSubmitting ? 'Resetting...' : 'Reset Password'}
                </Button>
                
                <Box textAlign="center" mt={1}>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => setStep(1)}
                    disabled={isSubmitting}
                  >
                    Back to Email Entry
                  </Button>
                </Box>
              </Box>
            </>
          )}

          <Box textAlign="center" mt={2}>
            <Link href="/" variant="body2" underline="hover">
              Back to Login
            </Link>
          </Box>
        </Paper>

        {/* Notification */}
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleClose}
            severity={notification.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword;