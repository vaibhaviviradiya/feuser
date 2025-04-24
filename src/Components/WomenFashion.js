import React from 'react'
import Homepage from './Homepage'
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import WomenCollection from './WomenCollection';
import MenCollection from './MenCollection';
import {useLocation} from 'react-router-dom'
import KidsCollection from './KidsCollection';
import Jwellery from './JwelleryCollection';

function WomenFashion({videoSrc}) {
  const location = useLocation();
  return (
    <div>
       <Box
        component="ul"
        sx={{ display: 'flex', flexWrap: 'wrap', p: 0, borderRadius: 0 }}
      >
        <Card component="li" sx={{ minWidth: 100, minHeight: 450, flexGrow: 1 }}>
          <CardCover>
            <video
            key={videoSrc}
              autoPlay
              loop
              muted
              poster={videoSrc} // Optional: Use the videoSrc as the poster as well
            >
              <source
                src={videoSrc} // Use the videoSrc prop here
                type="video/mp4"
              />
            </video>
          </CardCover>
        </Card>
      </Box>
      {/* <WomenCollection/> */}
      {/* <MenCollection/> */}
      
      {location.pathname == '/women-fashion/allproducts' && <WomenCollection/>} 
      {location.pathname == '/womens-fashion' && <WomenCollection/>}
      {location.pathname == '/men-fashion/allproducts' && <MenCollection/>}
      {location.pathname == '/mens-fashion' && <MenCollection/>}
      {location.pathname == '/kidsbaby' && <KidsCollection/>}
      {location.pathname == '/kids-&-baby/allproducts' && <KidsCollection/>}
      {location.pathname == '/jwellery-&-timepieces/allproducts' && <Jwellery/>}
      {location.pathname == '/jwellery-&-timepieces' && <Jwellery/>}

    </div>
  )
}

export default WomenFashion