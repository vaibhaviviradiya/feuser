import React from 'react'
import SubcatGrid from './Subcategories'

function Kshoes() {
  return (
    <div>
        <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Kids & Baby" subcategory="Shoes" />
    </div>
  )
}

export default Kshoes