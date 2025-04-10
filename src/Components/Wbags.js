import React from 'react';
import SubcatGrid from './Subcategories';
import WomenFashion from './WomenFashion';
import Textforhomes from './Textforhomes'
import bagsvideo from './Images/bags_sonamkapoor.mp4';
import i1 from './Images/wbag1.avif';
import i2 from './Images/wbag2.avif';
import i3 from './Images/wbag3.webp';
import i4 from './Images/wbag4.jpg';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import MediaBanner from './MediaBanner';

const imgs = [
  { src: i1, title: 'Mini Bags' },
  { src: i2, title: 'Tote Bags' },
  { src: i3, title: 'Luxury Leather' },
  { src: i4, title: 'Designer Picks' },
];

function Wbags() {
  return (
    <div>
      <MediaBanner mediaSrc={bagsvideo} isVideo={true} />
      <Textforhomes title="Luxe Bags" text="All Dior's expertise encapsulated in unique and strikingly on-trend trainers: the now legendary Dior Fusion and new, ultra-fashionable Dior Happy slip-ons. Adorned with floral and star-spangled embroidery, these Dior trainers embody the perfect balance between urban living and the couture spirit of Dior." showButton={false} showimg={false} />

      <Box sx={{ padding: '32px 16px' }}>
        <Grid container spacing={3}>
          {imgs.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} display={'flex'}>
              <Card
                sx={{
                  position: 'relative',
                  boxShadow: 'none',
                  borderRadius: 0,
                  width: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.title}
                  sx={{
                    height: 300,
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontFamily: 'Century Gothic',
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <SubcatGrid
        apiurl="http://localhost:3000/admin/viewproduct" category="Women Fashion" subcategory="Bags"
      />

    </div>
  );
}

export default Wbags;
