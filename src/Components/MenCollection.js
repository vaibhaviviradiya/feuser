import React from 'react'
import SubcatGrid from './Subcategories'

function MenCollection() {
  return (
    <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Men Fashion"/>
  )
}

export default MenCollection