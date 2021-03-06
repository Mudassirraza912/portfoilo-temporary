import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table" style={{marginTop: "10%"}}> 
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Mudassir Raza</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "MERN Stack Developer",
                      "React Native Developer",
                      "Node Js Developer",
                      "SEO Expert"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>

              <div class="row justify-content-around sm-4">
                  <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
                  <p className="pt-3">
                      <a
                        target="blank"
                        className="btn btn-primary px-4"
                        href="https://drive.google.com/file/d/1jRW9ptlJ05aUT5skazoLq7qOTlomU_5i/view?usp=sharing"
                        role="button"
                      >
                      View Resume
                    </a>
                  </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
