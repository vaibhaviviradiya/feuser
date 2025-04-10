import React from 'react'
import SubcatGrid from './Subcategories'
import { ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import i1 from './Images/mshoes1.avif'
import i2 from './Images/mshoes2.avif'
import i3 from './Images/mshoes3.avif'
import i4 from './Images/mshoes4.avif'
import i5 from './Images/mshoes5.avif'
import i6 from './Images/mshoes6.avif'
import i7 from './Images/mshoes7.avif'
import Textforhomes from './Textforhomes';

const itemData = [
    {
        img: i1,
        title: 'Shoes',
    },
    {
        img: i2,
        title: 'Shoes',
    },
    {
        img: i3,
        title: 'Shoes',
    },
    {
        img: i4,
        title: 'Shoes',
    },
    {
        img: i4,
        title: 'Shoes',
    },
    {
        img: i5,
        title: 'Shoes',
    },
    {
        img: i6,
        title: 'Shoes',
    },
    {
        img: i7,
        title: 'Shoes',
    }
];
function Mshoes() {
    return (
        <div>
            <Textforhomes title="A truly Dior Savoir-Faire" text="The B35 NXXT sneakers embody a new, retro-futuristic vision of Dior style, demonstrating extraordinary technicality." showimg={false}/>
            <ImageList
                sx={{
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                }}
                cols={4}
                gap={16}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>

                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '400px' }}
                        />

                    </ImageListItem>
                ))}
            </ImageList>
            <SubcatGrid apiurl="http://localhost:3000/admin/viewproduct" category="Men Fashion" subcategory="Shoes" />
        </div>
    )
}

export default Mshoes