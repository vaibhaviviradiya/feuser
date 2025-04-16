import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import i1 from './Images/lady-dior-and-rosalia4.avif'
import i2 from './Images/dior-toujours4.avif'
import { Box, TextField, Button, Typography, Snackbar, Alert, Link, } from "@mui/material";
import axios from 'axios';
function Userlogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');
    const handleloginclick = async () => {
        axios.post('http://localhost:3000/admin/userlogin', { username, password })
            .then((res) => {
                console.log("response = ", res.data);
                if (res.data && res.data.status) {
                    setMessage(res.data.message || 'Login successful!');
                    setSeverity('success');
                    setOpen(true);
                    sessionStorage.setItem('userinfo', JSON.stringify(res.data))
                    setTimeout(() => {
                        navigate('/home');
                    }, 1500);
                } else {
                    setMessage(res.data.message || 'Login failed');
                    setSeverity('error');
                    setOpen(true);
                }
            })
            .catch((error) => {
                setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
                setSeverity('error');
                setOpen(true);
                console.error('Error fetching product data:', error);
            })
    }


    return (
        <div>
            <Box sx={{ display: "flex", height: "100vh" }}>
                {/* Left Panel */}
                <Box
                    sx={{
                        flex: 1,
                        bgcolor: "white",
                        p: 8,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: "bold", mb: 6, letterSpacing: 4 }}>
                        LUXE
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                        LOG IN
                    </Typography>
                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <TextField
                            variant="standard"
                            placeholder="USERNAME"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="standard"
                            placeholder="PASSWORD"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link href="/userregister" underline="hover" color="text.secondary">
                            Have you not register yet?
                        </Link>
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 2,
                                width: "150px",
                                borderColor: "black",
                                color: "black",
                                fontWeight: "bold",
                                ":hover": {
                                    bgcolor: "#f4f4f4",
                                    borderColor: "black",
                                },
                            }}
                            onClick={handleloginclick}
                        >
                            LOG IN
                        </Button>
                        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                            <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
                                {message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Box>

                {/* Right Panel */}
                <Box
                    sx={{
                        flex: 1,
                        bgcolor: "#f5f5f5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={i1}
                        alt="Zara Model"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Userlogin