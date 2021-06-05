import React from "react";

const Nav = () => {

  return (
    <div className="nav-start">
        <div className='container'>
          <div className="all-center hero">
            <h1 className="hero-text">Hi I'am Gaurav Anthwal</h1>
          </div>
          <div className="nav-container">
            <div className="top-bar">
              <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="links">
                <a href="#about"><p className="text-bold link">contact</p></a>
              </div>
            </div>
            <div className="grid-2 main-nav all-center">
              <div className="spech-box all-center">
                <div className="backg">
                  <div className="backg-text">
                    <h2>What We Do</h2>
                    <p>We learn how to learn.</p>
                  </div>
                </div>
              </div>
              <div className="img-box all-center">
                <div className="img-cont">
                  <img
                    className="img"
                    src="https://gaurav-anthwal.netlify.app/images/gaurav.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Nav;
