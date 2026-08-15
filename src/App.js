import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />

      </main>
      <Footer/>
    </div>
  );
}

export default App;