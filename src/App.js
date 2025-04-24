import React from 'react'
// import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import WomenVideo from './Components/Images/luxehome.webm'
import Footer from './Components/Footer'
import WomenFashion from './Components/WomenFashion'
import WomenVideo1 from './Components/Images/diorwomen2.webm'
import MenVideo from './Components/Images/men.webm'
import WomenCollection from './Components/WomenCollection'
import Wreadywear from './Components/Wreadywear'
import Wshoes from './Components/Wshoes'
import Wbags from './Components/Wbags'
import Waccess from './Components/Waccess'
import Mreadywear from './Components/Mreadywear'
import Mshoes from './Components/Mshoes'
import Mgoods from './Components/Mgoods'
import ProductDetail from './Components/ProductDetail'
import { CartProvider } from './Components/CartContext';
import CartPage from './Components/CartPage'
import Userlogin from './Components/Userlogin'
import Purchase from './Components/Purchase'
import Register from './Components/Register'
import KidsCollection from './Components/KidsCollection'
import Textforhomes from './Components/Textforhomes'
import KidsVideo from './Components/Images/kids.mp4';
import Kreadytowear from './Components/Kreadytowear'
import Kshoes from './Components/Kshoes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as JoyThemeProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <JoyThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Userlogin/>}/>
              <Route path='/userregister' element={<Register/>} />
              <Route path='/home' element={
                <Homepage videoSrc={WomenVideo} title="SUMMER 2025-2026 COLLECTION" text="An incandescent odyssey between two symbolic eras, the Dior autumn-winter 2024-2025 ready-to-wear line, conceived by Maria Grazia Chiuri, reveals models that shine with the strength of a bold femininity."/>
                }>                            
              </Route>
              <Route path='/womens-fashion' key="women" element={<WomenFashion videoSrc={WomenVideo1}/>} />
              <Route path='/mens-fashion' key="men" element={<WomenFashion videoSrc={MenVideo}/>}/>  

              <Route path='/women/readytowear' element={<Wreadywear/>}/>
              <Route path='/women/shoes' element={<Wshoes/>}/>
              <Route path='/women/bags' element={<Wbags/>}/>      
              <Route path='/women/accessories' element={<Waccess/>}/>         
              <Route path='/women-fashion/allproducts' key="women" element={<WomenFashion videoSrc={WomenVideo1}/>}/> 

              <Route path='/men-fashion/allproducts' key="men" element={<WomenFashion videoSrc={MenVideo}/>}/>
              <Route path='/men/readytowear' element={<Mreadywear/>}/>
              <Route path='/men/shoes' element={<Mshoes/>}/>
              <Route path='/men/goods' element={<Mgoods/>}/>

              <Route path='/kidsbaby' element={<WomenFashion videoSrc={KidsVideo} />}/>
              <Route path='/kids-&-baby/allproducts' element={<WomenFashion videoSrc={KidsVideo}/>}/>
              <Route path='/kids/readytowear' element={<Kreadytowear/>}/>
              <Route path='/kids/readytowear/kids/shoes' element={<Kshoes/>}/>

              <Route path="/product/:id" element={<ProductDetail/>} />
              <Route path="/cart" element={<CartPage />} />
              <Route path='/checkout' element={<Purchase/>}/>
            </Routes>
            <Footer/>
          </Router>
        </CartProvider>
      </JoyThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
