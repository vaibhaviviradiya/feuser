import React from 'react'
import avideo from './Images/accevideo.mp4'
import { Box, Container } from '@mui/material';
import WomenFashion from './WomenFashion'
import SubcatGrid from './Subcategories'
import MediaBanner from './MediaBanner';
import Textforhomes from './Textforhomes';
function Waccess() {
    return (
        <div>

            <MediaBanner mediaSrc={avideo} isVideo={true} />
            <Textforhomes title="Luxe Accessories For Preety Women" text="All Dior's expertise encapsulated in unique and strikingly on-trend trainers: the now legendary Dior Fusion and new, ultra-fashionable Dior Happy slip-ons. Adorned with floral and star-spangled embroidery, these Dior trainers embody the perfect balance between urban living and the couture spirit of Dior." showButton={false} showimg={false} />
            <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Women Fashion" subcategory="Accessories" />
        </div>
    )
}

export default Waccess