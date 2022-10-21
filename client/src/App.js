import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>  
    
  );
}

export default App;
