import React from 'react'
import SubcatGrid from './Subcategories'
import Textforhomes from './Textforhomes'
function Luxejwellery() {
    return (
    <>
        <Textforhomes showimg={false} title="Summer 2025 Collection" text="The La D de Dior collection embodies the spirit of Dior jewelry, bold creativity, combinations of materials and colours and all the know-how of Swiss watchmaking."/>
        <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Jwellery & TimePieces" subcategory="Jwellery" />
    </>
    )
}

export default Luxejwellery