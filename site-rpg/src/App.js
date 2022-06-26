import React from 'react';
import './App.css';
import Apres from './Components/Apresentação/Apres';
import Card from './Components/Card/Card';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apres />} />
        <Route path='/participantes' element={<Card />} />
      </Routes>
    </>
  );
}

export default App;

