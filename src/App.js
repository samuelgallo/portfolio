import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/partials/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
