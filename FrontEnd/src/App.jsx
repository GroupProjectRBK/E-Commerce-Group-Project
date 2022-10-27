import React from 'react'
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Create from "./components/Create"
import Technology from './components/Technology'
import Fourniture from './components/Fourniture'
import Cars from './components/Cars'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <center>
    <Navbar/>
    </center>
    <div className = "pages">    
    <Routes >
<Route path ="/" element = {<Home/>} />
<Route  path = "Create" element = {<Create/>}/>
<Route   path='technology' element={<Technology/>}/>
<Route   path='cars' element={<Cars/>}/>
<Route   path='fourniture' element={<Fourniture/>}/>
    </Routes>
    </div>     
    </BrowserRouter>
   </div>
  )
}

export default App