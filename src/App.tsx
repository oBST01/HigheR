import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Index from "./Pages/Index/Index";
import Acessorios from "./Pages/Acessorios";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/acessorios" element={<Acessorios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
