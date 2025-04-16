import React from 'react'
import SubcatGrid from './Subcategories'

function KidsCollection() {
  return (
    <div>
        <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct"category="Kids & Baby"/>
    </div>
  )
}

export default KidsCollection