import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';
import './tailwind.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="pb-24">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
