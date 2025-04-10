import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import {
    Box, Typography, Button, Grid, CardMedia,
    Divider
} from '@mui/material';

function ProductDetail() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) return <Typography>No product found</Typography>;

    const sliderSettings = {
        dots: true,
        infinite:  product.picture.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:  product.picture.length > 1,
        autoplaySpeed: 1000
    };

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={4}>
                {/* LEFT: Image Slider */}
                <Grid item xs={12} md={6}>
                  
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
                </Grid>

                {/* RIGHT: Product Info */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold">{product.product_name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {product.material} | {product.color?.join(", ")}
                    </Typography>
                    <Typography variant="h5" sx={{ my: 2 }}>₹{product.price.toLocaleString()}</Typography>

                    {/* <Button variant="outlined" fullWidth sx={{ my: 1 ,border:'1px solid black',color:"black"}}>
                        
                    </Button> */}
                    {/* <Divider>.</Divider> */}
                    
                    <Button variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}>
                        Add To Bag
                    </Button>

                    <Typography variant="h6" sx={{mt:5}} gutterBottom>Description</Typography>
                    <Typography variant="body1"  sx={{fontSize: 13,fontFamily: 'Century Gothic',mb: 2, }}>{product.description}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetail;
