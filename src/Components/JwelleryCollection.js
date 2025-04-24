import React from 'react'
import SubcatGrid from './Subcategories'

function Jwellery() {
  return (
    <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct"category="Jwellery & TimePieces"/>
  )
}

export default Jwellery