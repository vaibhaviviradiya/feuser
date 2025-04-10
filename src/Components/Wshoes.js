import React from 'react'
import Textforhomes from './Textforhomes'
import SubcatGrid from './Subcategories'
import i1 from './Images/wshoes1.jpg'
import i2 from './Images/wshoes2.jpg'
import i3 from './Images/wshoes3.jpg'
import i4 from './Images/wshoes4.jpg'

import { Grid, Card, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

const imageData = [
    { src: i1, title: 'Miss Dior — Dior Chrono Sneaker' },
    { src: i2, title: ' Dior Chrono Sneaker' },
    { src: i3, title: 'Miss Dior — Dior Chrono Sneaker' },
    { src: i4, title: 'Dior Chrono Sneaker' },
];

function Wshoes() {
    return (
        <div>
            <Textforhomes title="Sneakers" text="All Dior's expertise encapsulated in unique and strikingly on-trend trainers: the now legendary Dior Fusion and new, ultra-fashionable Dior Happy slip-ons. Adorned with floral and star-spangled embroidery, these Dior trainers embody the perfect balance between urban living and the couture spirit of Dior." showButton={false} showimg={false} />
            <Box sx={{ px: { xs: 2, md: 10 }, py: 6, backgroundColor: '#fff' }}>
                <Grid container spacing={4}>
                    {imageData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
                                <CardActionArea>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            image={item.src}
                                            alt={item.title}
                                            sx={{
                                                height: { xs: 250, md: 400 },
                                                objectFit: 'cover',
                                                transition: 'transform 0.4s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 16,
                                                left: 16,
                                                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                                                px: 2,
                                                py: 1,
                                                // borderRadius: '4px',
                                            }}
                                        >
                                            <Typography variant="subtitle1" fontWeight="500" fontFamily="Century Gothic">
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Women Fashion" subcategory="Shoes" />
        </div>
    )
}

export default Wshoes