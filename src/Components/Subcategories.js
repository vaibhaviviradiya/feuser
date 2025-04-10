import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveAppBar from './Subcatnavbar';
import { useNavigate } from "react-router-dom";

function SubcatGrid({ imgs, pname, price, desc, apiurl, category , subcategory }) {
    const [products, setProducts] = useState([]);
        const navigate = useNavigate();
    
  
    useEffect(() => {
        var fetchproductdata = async () => {
            axios.get(apiurl)
                .then((res) => {
                    // setProducts(res.data.data);
                    console.log("Products == ", res.data.data);
                    const allproducts = res.data.data;
                    var filtered;
                    if(subcategory)
                    {
                        filtered = category ? allproducts.filter(item => item.category_name === category && item.subcategory_name === subcategory) : allproducts;
                    }
                    else{
                        filtered = category ? allproducts.filter(item => item.category_name === category):allproducts;
                            
                    }
                    setProducts(filtered);
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                })
        }
        fetchproductdata()
    }, [apiurl, category , subcategory])

    const handleProductClick = async(pid)=>{
        try{
            const res = await axios.get(`http://localhost:3000/admin/viewoneproduct/${pid}`)
            console.log("product id == ",res.data.data);
            const productData = res.data.data
            navigate(`/product/${pid}`, { state: { product: productData } });
        }catch(error)
        {
            console.error("Failed to fetch product details:", error);
        }
    }
    return (
        <>
        <ResponsiveAppBar category={category}/>
        <Grid container spacing={4} padding={4}>
            {products.map((item, index) => (
                < Grid item xs={12} sm={6} md={3} >
                    <Card sx={{ boxShadow: 'none', textAlign: 'center' }}  onClick={() => handleProductClick(item._id)} >
                        {/* {console.log("Item Picture:", item.picture)} */}
                        <CardMedia
                            component="img"
                            image={`http://localhost:3000/images/${item.picture[0]}`}
                        alt={item.product_name}
                        sx={{ height: 300, objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant="body1" fontWeight="medium">
                                {item.product_name}
                            </Typography>
                         
                            <Typography variant="body1" fontWeight="bold">
                                {item.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid >
        </>
    );
}

export default SubcatGrid;