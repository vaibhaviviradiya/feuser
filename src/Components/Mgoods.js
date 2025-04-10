import React from 'react'
import SubcatGrid from './Subcategories'
import Textforhomes from './Textforhomes'
import { Grid, Card, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import i1 from './Images/macc1.jpg'
import i2 from './Images/macc2.jpg'
import i3 from './Images/macc3.avif'
import i4 from './Images/small_goods.avif'
const imageData = [
  { src: i1 },
  { src: i2 }
];
function Mgoods() {
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
      <Textforhomes showimg={false} showButton={false} title="Gifts For Him" text="Give the most exceptional of gifts thanks to this selection of iconic Dior creations imagined by Kim Jones." />
      <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Men Fashion" subcategory="Small Leather Goods" />

    </div>
  )
}

export default Mgoods