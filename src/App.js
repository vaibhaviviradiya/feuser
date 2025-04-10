import React from 'react'
// import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <Homepage videoSrc={WomenVideo} title="AUTUMN WINTER 2024-2025 COLLECTION" text="An incandescent odyssey between two symbolic eras, the Dior autumn-winter 2024-2025 ready-to-wear line, conceived by Maria Grazia Chiuri, reveals models that shine with the strength of a bold femininity."/>
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

          <Route path="/product/:id" element={<ProductDetail/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
