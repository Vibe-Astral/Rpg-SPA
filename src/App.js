import React from 'react';
import Apres from './Components/Apresentação/Apres';
import Card from './Components/Card/Card';
import { Routes, Route,  } from "react-router-dom";
import FichaM from './Components/FIcha/FichaM';
import Ficha1 from './Components/FIcha/Ficha1';
import Ficha2 from './Components/FIcha/Ficha2';
import Ficha3 from './Components/FIcha/Ficha3';
import Ficha4 from './Components/FIcha/Ficha4';
import Ficha5 from './Components/FIcha/Ficha5';
import Ficha6 from './Components/FIcha/Ficha6';
import Ficha7 from './Components/FIcha/Ficha7';
import Ficha8 from './Components/FIcha/Ficha8';
import Ficha9 from './Components/FIcha/Ficha9';
import Ficha10 from './Components/FIcha/Ficha10';
import Ficha11 from './Components/FIcha/Ficha11';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Rpg-SPA' element={<Apres />} />
        <Route path='/participantes' element={<Card />} />
        <Route path='/ficha-master'  element={<FichaM />} />
        <Route path='/ficha-1'  element={<Ficha1 />} />
        <Route path='/ficha-2'  element={<Ficha2 />} />
        <Route path='/ficha-3'  element={<Ficha3 />} />
        <Route path='/ficha-4'  element={<Ficha4 />} />
        <Route path='/ficha-5'  element={<Ficha5 />} />
        <Route path='/ficha-6'  element={<Ficha6 />} />
        <Route path='/ficha-7'  element={<Ficha7 />} />
        <Route path='/ficha-8'  element={<Ficha8 />} />
        <Route path='/ficha-9'  element={<Ficha9 />} />
        <Route path='/ficha-10'  element={<Ficha10 />} />
        <Route path='/ficha-11'  element={<Ficha11 />} />
      </Routes>
    </>
  );
}

export default App;

