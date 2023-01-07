import React from 'react';
import Navbar from './components/Navbar';
import Socialmedia from './components/social';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import "./App.css"
import Aboutpage from './components/Aboutpage';
function App() {

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/projects" element={<Projects/>} ></Route>
    </Routes>
    
    <Socialmedia/>
    
    </div>
  );
}

export default App;
