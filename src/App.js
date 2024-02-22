
import './App.css';
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import CarListing from "./pages/Carlisting";
import CarDetails from "./pages/CarDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Home";
import NotFound from "./pages/NotFound";
import React from "react";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
