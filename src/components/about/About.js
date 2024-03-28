import React from "react";
import './about.css';
import AboutMe from '../../assets/avatar-2.svg';
import AboutBox from "./AboutBox";

const About = () =>{
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={AboutMe} alt="" className="about__img"/>
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am passionate about using technology to solve real-world problems. I am also interested in the intersection of technology and social justice. 
                        I believe that technology can be used to empower people and make the world a better place. I am a hard worker and I am always willing to learn new things. 
                        I am also a team player and I am always willing to help others. I am confident that I have the skills and the drive to succeed in my career. 
                        I am excited to start my career in Full Stack Engineering. I am looking forward to using my skills and my passion to make a difference in the world.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>
                        
                    <div className="about__skills grid">

                        {/* skill two  */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Project Management </h3>
                                <span className="skills_number">95%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage management"></span>
                            </div>
                        </div>

                        {/* skill one */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Web Development</h3>
                                <span className="skills_number ">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        

                        {/* skill three */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Data Visualization</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage visualization"></span>
                            </div>
                        </div>

                        {/* skill three */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Budgeting</h3>
                                <span className="skills_number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage budgeting"></span>
                            </div>
                        </div>

                        {/* skill three */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Graphic Desigin</h3>
                                <span className="skills_number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage design"></span>
                            </div>
                        </div>

                        {/* skill three */}
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Video Editing</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage video"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>

    );
}

export default About;