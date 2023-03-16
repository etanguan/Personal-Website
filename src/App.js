import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Home from './components/pages/Home';
library.add(fas);



function App() {
  return (

    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>

        </Routes>
      </Router>

    </>
  );
}

export default App;
