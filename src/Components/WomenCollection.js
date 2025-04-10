
import React from 'react'
import SubcatGrid from './Subcategories'

function WomenCollection() {
  return (
    <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Women Fashion"/>
  )
}

export default WomenCollection