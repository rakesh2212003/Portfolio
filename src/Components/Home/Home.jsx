import React from 'react'
import "./Home.css";
import me from "../../Assets/avatar-4.png";
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={me} alt="me" className="home_img" />
                <h1 className="home_name">Rakesh Rana</h1>
                <span className="home_education">I'm a Software Developer</span>
                <br />
                {/* <span className="home_education">&</span> */}
                {/* <br /> */}
                {/* <span className="home_education">Compititive Programmer</span> */}
                <Headersocials />
                <a href="#contact" className="btn">Hire Me</a>
                <Scrolldown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home