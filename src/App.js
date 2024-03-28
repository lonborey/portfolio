import React from "react";
import "./App.css";

//components imported
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
