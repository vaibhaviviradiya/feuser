import React from 'react'
import SubcatGrid from './Subcategories'
import i1 from '../Components/Images/kidss.jpg'
import MediaBanner from './MediaBanner'
import Textforhomes from './Textforhomes'
function Kreadytowear() {
  return (
    <div>
      <MediaBanner mediaSrc={i1}/>
      <Textforhomes title="Kids 2025 Ready to Wear Collection" showimg={false} showButton={false}/>
        <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Kids & Baby" subcategory="Ready to Wear"/>
    </div>
  )
}

export default Kreadytowear