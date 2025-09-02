import {  BrowserRouter, Routes, Route  } from 'react-router-dom'
import './index.css'
import Navbar from './navbar'
import Homepage from './homepage'
import Footer from './footer'
import HtmlSection from "./Component/HTML-Section/HtmlPages"
import CssSection from "./Component/CSS-Section/CssPages"
import JavaScriptSection from './Component/JavaScript-Section/JavaScriptPages' 

 
function App ()  { 
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
      <Route path="/Component/HTML-Section/HtmlPages" element={<HtmlSection />}/>
      <Route path='/Component/CSS-Section/CssPages' element={<CssSection/>}/>
      <Route path='/Component/JavaScript-Section/JavaScriptPages' element={<JavaScriptSection/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App

