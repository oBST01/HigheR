import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Index from "./Pages/Index/Index";
import Acessorios from "./Pages/Acessorios";
import Mobilidade from "./Pages/Mobilidade";
import Video from "./Pages/Video";
import NFTs from "./Pages/NFTs";
import Sobre from "./Pages/Sobre";
import Lojas from "./Pages/Lojas";
import Contato from "./Pages/Contato";
import Duvidas from "./Pages/Duvidas";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/mobilidade" element={<Mobilidade />} />
        <Route path="/video" element={<Video />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/lojas" element={<Lojas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/duvidas" element={<Duvidas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
