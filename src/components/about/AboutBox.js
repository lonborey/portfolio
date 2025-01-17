import React from "react";

const AboutBox = () => {
    return ( 
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">2323</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"> </i>
                <div>
                    <h3 className="about__title">12435</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"> </i>
                <div>
                    <h3 className="about__title">4312</h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-diamond"> </i>
                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">Nominees winner</span>
                </div>
            </div>
        </div>
     );
}
 
export default AboutBox;