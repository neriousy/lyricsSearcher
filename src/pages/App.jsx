import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Navbar from '../components/Navbar/Navbar';
import Lyrics from './Lyrics';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/lyrics/:id" element={<Lyrics />} />  
      </Routes>
    </>
  );
};

export default App;
