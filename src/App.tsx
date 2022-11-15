import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Index from "./Pages/Index/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
