import React from 'react'
import Textforhomes from './Textforhomes'
import { Box, Container } from '@mui/material';
import i1 from './Images/rtw1.avif'
import SubcatGrid from './Subcategories';
import MediaBanner from './MediaBanner';
function Wreadywear() {
  return (
    <div>
      <Textforhomes title="Spring-Summer 2025 Collection" text="Live from Paris at 3.00 pm on April 5th" showButton={false} showimg={false}/>
      <MediaBanner mediaSrc={i1} isVideo={false} />
    <Textforhomes  title="" text="The Dior spring-summer 2025 haute couture collection thought up by Maria Grazia Chiuri is an opportunity to reawaken essential themes pertaining to sartorial memory – in particular the creativity of previous centuries..." showimg={false}/>
    <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Women Fashion" subcategory="Ready To Wear"/>
    </div>
  )
}

export default Wreadywear