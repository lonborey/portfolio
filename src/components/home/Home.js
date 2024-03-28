import React from "react";
import './home.css';
import Me from './../../assets/avatar-1.svg'
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () =>{
    return (
        <section className="home container" id="home">
            <img src={Me} alt="" className="home__img"/>
            <h1 className="home__name">Borey Lon</h1>
            <span className="home__education intro">I'm a Full Stack Developer</span>

            <HeaderSocial />

            <a href="#contact" className="btn"> Contact Me </a>
            <ScrollDown />

            {/* <Shapes/> */}
        </section>
    )
}

export default Home;