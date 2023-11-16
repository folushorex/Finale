import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Support from "./Pages/Support";
import Content from "./Pages/Content";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import WhatsAppButton from './Components/WhatsappButton';
import ScrollToTopButton from './Components/ScrollToTopButton';
import './App.css';

 




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/content" element={<Content />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
       

          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer/>
        <WhatsAppButton />
      </Router>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
