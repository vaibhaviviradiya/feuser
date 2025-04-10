import React from 'react'
import i1 from './Images/men1.avif'
import i2 from './Images/men2.webp'
import { Grid, Card,Button,Container, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import Textforhomes from './Textforhomes';
import SubcatGrid from './Subcategories';

const imageData = [
    { src: i1 },
    { src: i2 }
];
function Mreadywear() {
    return (
        <div>
            <Box sx={{ px: { xs: 2, md: 10 }, py: 3, backgroundColor: '#fff' }}>
                <Grid container spacing={4}>
                    {imageData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
                                <CardActionArea>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            image={item.src}
                                            alt="Men Ready to Wear"
                                            sx={{
                                                height: 'auto',
                                                objectFit: 'cover',
                                                transition: 'transform 0.4s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                        />
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
          
            <Textforhomes showimg={false} title="Summer 2025 Collection" text="The House unveils the Lifestyle Capsule from the Dior Autumn 2025 collection: a wardrobe inspired by the world of golf, combining understated luxury and preppy elegance for an irresistibly Dior style, both in the city and on the green."/>
            <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Men Fashion" subcategory="Ready To Wear"/>
        </div>
    )
}

export default Mreadywear