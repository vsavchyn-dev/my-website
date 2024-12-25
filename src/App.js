import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Studies from './components/Studies';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = 'blue';
  const blackColor = 'yellow';

  return (
    <>
      <Nav color={color} />
      <Header whiteModeColor={color} blackModeColor={blackColor} />
      <About whiteModeColor={color} blackModeColor={blackColor} />
      <Studies whiteModeColor={color} blackModeColor={blackColor} />
      <Experience whiteModeColor={color} blackModeColor={blackColor} />
      <Projects whiteModeColor={color} blackModeColor={blackColor} />
      <Contact whiteModeColor={color} blackModeColor={blackColor} />
      <Footer />
    </>
  );
}

export default App;
