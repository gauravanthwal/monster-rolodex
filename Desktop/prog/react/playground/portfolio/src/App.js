import "./App.css";
import React from "react";
import Nav from "./components/layout/Nav";
import About from './components/layout/About'
import Project from './components/projects/Project'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
        <Nav />
        <About/>
        <Project/>
        <Footer/>
    </>
  );
};

export default App;
