import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i2 from './Images/dior-toujours4.avif';
import {
  Box, TextField, Button, Typography, Link, Grid,
  InputAdornment, IconButton, Alert, Snackbar
} from "@mui/material";
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '', email: '', contact: '', username: '', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Name is required';
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid 10-digit number';
      isValid = false;
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
      isValid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    try {
      const response = await axios.post('http://localhost:3000/admin/adduser', {
        name: formData.fullname,
        email: formData.email,
        contact: formData.contact,
        username: formData.username,
        password: formData.password
      });
      
      if (response.data?.status === "Success") {
        setMessage('Registration successful! Redirecting to login...');
        setSeverity('success');
        setOpen(true);
        setFormData({ fullname: '', email: '', contact: '', username: '', password: '', confirmPassword: '' });
        setTimeout(() => navigate('/'), 2000);
      } else {
        setMessage(response.data?.Message || 'Registration failed');
        setSeverity('error');
        setOpen(true);
      }
    } catch (error) {
      setMessage(error.response?.data?.Message || 'Registration failed. Please try again.');
      setSeverity('error');
      setOpen(true);
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box sx={{
          flex: 1,
          bgcolor: "white",
          p: { xs: 2, sm: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4, letterSpacing: 4 }}>LUXE</Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>CREATE ACCOUNT</Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField variant="standard" placeholder="FULL NAME" name="fullname" full  Width
                value={formData.fullname} onChange={handleChange} 
                error={!!errors.fullname} helperText={errors.fullname} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField variant="standard" placeholder="EMAIL" name="email" fullWidth
                value={formData.email} onChange={handleChange}
                error={!!errors.email} helperText={errors.email} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField variant="standard" placeholder="CONTACT NUMBER" name="contact" fullWidth
                value={formData.contact} onChange={handleChange}
                error={!!errors.contact} helperText={errors.contact} />
            </Grid>
            
            <Grid item xs={12}>
              <TextField variant="standard" placeholder="USERNAME" name="username" fullWidth
                value={formData.username} onChange={handleChange}
                error={!!errors.username} helperText={errors.username} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField variant="standard" placeholder="PASSWORD" name="password"
                type={showPassword ? "text" : "password"} fullWidth
                value={formData.password} onChange={handleChange}
                error={!!errors.password} helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField variant="standard" placeholder="CONFIRM PASSWORD" name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"} fullWidth
                value={formData.confirmPassword} onChange={handleChange}
                error={!!errors.confirmPassword} helperText={errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleRegister}
                sx={{
                  mt: 2,
                  width: { xs: "100%", sm: "200px" },
                  borderColor: "black",
                  color: "black",
                  fontWeight: "bold",
                  ":hover": { bgcolor: "#f4f4f4", borderColor: "black" },
                }}>
                REGISTER
              </Button>
            </Grid>
            
            <Grid item xs={12}>
              <Link href="/" underline="hover" color="text.secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          bgcolor: "#f5f5f5",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          <img src={i2} alt="Luxury Fashion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Box>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Register;