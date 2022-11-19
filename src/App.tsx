import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Index from "./Pages/Index/Index";
import Acessorios from "./Pages/Acessorios";
import Mobilidade from "./Pages/Mobilidade";
import Video from "./Pages/Video";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/mobilidade" element={<Mobilidade />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
