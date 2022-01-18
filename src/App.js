import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import components
import Home from './Components/Home';
import Contact from './Components/Contact';
import Work from './Components/Work';

import NavBar from './Components/NavBar/NavBar';
// import Cover from './Components/Cover/Cover';
// import Themes from './Components/Theme/Themes'
import { Themes } from './Components';

//import styled Components
import { ThemeProvider } from 'styled-components';

const App = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Router>
          <NavBar theme={theme} setTheme={setTheme}></NavBar>
          <div className="d-flex justify-content-center">
            <Routes>
              <Route path="/" exact element={<Home theme={theme} />}></Route>
              <Route path="/work" element={<Work theme={theme} />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
