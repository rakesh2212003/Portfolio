import React from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from "./Components/Contact/Contact";


function App() {
    return (
        <>
            <Sidebar />
            <main className="main">
                <Home />
                <About />
                <Skill />
                <Services />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
        </>
    );
}

export default App;
