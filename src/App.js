import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import Slideshow from "./components/slideshow";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <NavbarComp/>
      <Slideshow />
      <AboutUs />
      <Footer />
      
      
    </div>
  );
}


export default App;
