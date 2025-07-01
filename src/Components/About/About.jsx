import React from 'react'
import "./About.css" ;
// import about from "../../Assets/avatar-2.svg";
import about from "../../Assets/avatar-5.png";
import Aboutbox from "./Aboutbox";
// import resume from "../../Assets/Resume.pdf";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title">About Me</h2>
            
            <div className="about_container grid">
                <img src={about} alt="" className="about_img" style={{width: "200px"}}/>

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            I'm a computer science student and a Full-Stack developer, lived in West Bengal, India. I'm hard working and passionate towards my work.
                        </p>
                        <a
                            href="https://docs.google.com/document/d/1hEqpC9QD2C2-zVgula669-KVMOQTlSSq3j2_PJLX9fY/edit?usp=sharing"
                            className="btn"
                            target='_blank'
                        >
                            Show Resume
                        </a>
                    </div>

                    <div className="about_skills grid">

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">UI/UX design</h3>
                                <span className="skills_number">75%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentages ui_ux"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Web Development</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentages development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Programming</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentages programming"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Aboutbox />
        </section>
    )
}

export default About