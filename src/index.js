import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/LoginPage.jsx";
import Home from "./components/Home.jsx";
import PhotoPage from "./components/PhotoPage.jsx";
import MemoriesPage from "./components/MemoriesPage.jsx";
import VideoPage from "./components/VideoPage.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
