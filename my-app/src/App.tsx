import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nevbar from './Components/Nevbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Course from './Components/Course/Course';
import Search from './Components/Search';
import HomePageThree from './Components/Home/HomePageThree';
import NotWorek from './Components/NotWorek';

function App() {
  return (
   <Router>
    <Nevbar />
    <Routes>
  <Route  path="/" element={<Home /> }  />
  <Route path="/card/:id" element={<HomePageThree />} />
  <Route path="/about" element={<About /> } />
  <Route path="/course" element={<Course /> } />
  <Route path="/search" element={<Search /> } />
  <Route path="*" element={<NotWorek />} />
    </Routes>
   </Router>
  );
}

export default App;
