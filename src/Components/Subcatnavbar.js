import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

function ResponsiveAppBar({ category }) {

    const [data, setData] = useState([])
    const location = useLocation();
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        axios.get('http://localhost:3000/admin/dispsubcat')
            .then((res) => {

                const allsubcat = res.data.data
                console.log("all subcategory = ", allsubcat);
                const filteredsubcat = category ? allsubcat.filter(item => item.category_name === category) : allsubcat;
                // Create subcategory buttons with paths (like /category/women/subcategory/bags)
                // aa aavdtu nathi
                // const updatedSubcats = filteredsubcat.map(item => ({
                //     ...item,
                    // path: `/category/${item.category_name}/subcategory/${item.subcategory_name}`
                // }));
                //create All by default
                const urlFriendlyCategory = category.toLowerCase().replace(/\s+/g, '-');
                const allOption = {
                    _id: 'all',
                    subcategory_name: 'All',
                    path: `/${urlFriendlyCategory}/allproducts`,
                };

                // setData(filteredsubcat)
                setData([allOption, ...filteredsubcat]);
                console.log("filter subcategory = ", filteredsubcat);

            })
            .catch((err) => {
                console.log(err);

            })
    };

    return (
        <>
            <Grid containerd>
                <AppBar position="static" style={{ color: 'black', backgroundColor: 'white' }} >
                    <Container maxWidth="xl">
                        <Toolbar style={{ height: '10px', display: 'flex', justifyContent: 'space-around' }} >
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {data.map((item) => (
                                    <Link to={item.path} style={{ textDecoration: 'none' }}>
                                        <Button
                                            key={item._id}
                                            sx={{ m: 2, fontSize: '10px', color: 'black', display: 'block' }}
                                        >
                                            {item.subcategory_name}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
            </Grid>
        </>
    );
}
export default ResponsiveAppBar;
