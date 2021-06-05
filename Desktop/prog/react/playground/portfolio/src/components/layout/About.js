import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import resume from "./resume.pdf";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container grid-2">
        <div className="about ">
          <h1 className="my-2">More About Me</h1>
          <p>
            Hi my name is Gaurav Anthwal , I've done diploma in computer
            science and engineering. I enjoy building websites.
          </p>
          <br />
          <p>
            I consider myself as a self taught programmer, enthusiastic for
            learning new stuffs.
          </p>

          <div className="border"></div>

          <h1 className="my-2">TOP EXPERTISE</h1>
          <p>
            Web developer with primary focus on nodejs and javaScript{" "}
            <a href={resume} target="blank">
              Download Resume <FaDownload />
            </a>
          </p>
          <div className="skills ">
            <ul>
              <li>Nodejs</li>
              <li>Epress</li>
              <li>MongoDB</li>
              <li>Reactjs</li>
            </ul>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="social-links all-center">
          <img
            src="https://image.freepik.com/free-vector/robot-human_53876-90440.jpg"
            alt="social"
            className="img-social all-center"
          />
          <h1 className="my-1 text-center">Find me on social media</h1>
          <div className="social-profile">
            <a href="https://github.com/gauravanthwal" target="blank">
              <FaGithub/>
            </a>

            <a
              href="https://www.linkedin.com/in/gaurav-anthwal-740747186"
              target="blank"
            >
              <FaLinkedinIn/>
            </a>

            <a href="https://www.facebook.com/gagaurav.anthwal" target="blank">
              <FaFacebook/>
            </a>
          </div>
        </div>
      </div>
      <div className="border"></div>
    </section>
  );
};

export default About;
