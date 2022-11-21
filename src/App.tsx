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
        <Route index path="/HigheR/" element={<Index />} />
        <Route path="/HigheR/acessorios" element={<Acessorios />} />
        <Route path="/HigheR/mobilidade" element={<Mobilidade />} />
        <Route path="/HigheR/video" element={<Video />} />
        <Route path="/HigheR/nfts" element={<NFTs />} />
        <Route path="/HigheR/sobre" element={<Sobre />} />
        <Route path="/HigheR/lojas" element={<Lojas />} />
        <Route path="/HigheR/contato" element={<Contato />} />
        <Route path="/HigheR/duvidas" element={<Duvidas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
