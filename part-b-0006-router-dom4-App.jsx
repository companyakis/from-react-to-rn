import { Routes, Route } from "react-router"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import Products from "./pages/Products"

import Header from "./components/Header"

import './App.css'


function App() {


  return (
    <>

    <Header />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/products" element={<Products />} />
    </Routes>
      
    </>
  )
}

export default App
