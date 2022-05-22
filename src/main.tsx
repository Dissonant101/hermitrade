import React from "react";
import ReactDOM from "react-dom/client";
import { Home, About, Market, Navbar, PostDeal, Footer } from "./components";
import "./index.css";
import HermitradeContextProvider from "./context/HermitradeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <HermitradeContextProvider>
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/market" element={<Market />} />
          <Route path="/post" element={<PostDeal />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </HermitradeContextProvider>
);
