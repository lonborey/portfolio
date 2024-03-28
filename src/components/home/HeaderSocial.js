import React from "react";
import './home.css'

const HeaderSocial = () => {
    return ( 
        <div className="home__socials">
            <a href="https://facebook.com/lonborey/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-square-facebook"></i>
            </a>

            <a href="https://www.instagram.com/lonborey/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/lonborey/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://www.youtube.com/lonboreyit" className="home__social-link" target="_blank">
                <i class="fa-brands fa-square-youtube"></i>
            </a>

            <a href="https://twitter.com/lon_borey/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-square-x-twitter"></i>
            </a>

            <a href="https://github.com/lonborey" className="home__social-link" target="_blank">
            <i class="fa-brands fa-square-github"></i>
            </a>            
        </div>
     );
}
 
export default HeaderSocial;