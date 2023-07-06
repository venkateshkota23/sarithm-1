import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="mobileFooter">
          Copyright © 2017 2018 All rights reserved, sarithm.com
        </div>
        <div className="footer">
          <div className="footerContent">
            <div className="footerBlock">
              <span className="footerTitle">COMPANY</span>
              <a>
                <NavLink to="/about" activeclassname="active">
                  ABOUT US
                </NavLink>
              </a>
              <br />
              <a>
                <NavLink to="/contact" activeclassname="active">
                  CONTACT US
                </NavLink>
              </a>
              <br />
              <a>
                <NavLink to="/jobs" activeclassname="active">
                  JOBS
                </NavLink>
                
              </a>
              <br />
            </div>
            <div className="footerBlock1">
              <span className="footerTitle">PROJECTS</span>
              <a>
                <NavLink to="/projects" activeclassname="active">
                  SERVERLESS
                </NavLink>
              </a>
              <br />
              <a>
                <NavLink to="/projects" activeclassname="active">
                  MULTI-REGION-NETWORKS
                </NavLink>
              </a>
              <br />
            </div>
            <div className="footerBlock1">
              <span className="footerTitle">SERVICES</span>
              <a>
                <NavLink to="/mobile" activeclassname="active">
                  MOBILE
                </NavLink>
              </a>
              <br />
              <a>
                <NavLink to="/development" activeclassname="active">
                  SOFTWARE DEVELOPMENT
                </NavLink>
              </a>{" "}
              <br />
              <a>
                <NavLink to="/consulting" activeclassname="active">
                  IT CONSULTING
                </NavLink>
              </a>
              <br />
              <a>
                <NavLink to="/infra" activeclassname="active">
                  INFRASTRUCTURE MAINTENANCE
                </NavLink>
              </a>
            </div>
            <div className="footerBlock1">
              <span className="footerTitle">FOLLOW US</span>
              <div>
                <a href="https://www.facebook.com/sarithm.co" target="_blank">
                  <img
                    src={require("../images/social01.png")}
                    align="left"
                    style={{ width: "30px" , marginLeft: "5px" }}
                  />
                </a>
                <a href="https://twitter.com/SarithmLimited" target="_blank">
                  <img
                    src={require("../images/social02.png")}
                    align="left"
                    style={{marginleft: "10px", width: "30px", marginLeft: "5px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/sarithm"
                  target="_blank"
                >
                  <img
                    src={require("../images/social03.png")}
                    align="left"
                    style={{ marginleft: "10px", width: "30px", marginLeft: "5px" }}
                  />
                </a>
                <a href="https://github.com/Sarithm" target="_blank">
                  <img
                    src={require("../images/social04.png")}
                    align="left"
                    style={{ marginleft: "10px", width: "30px", marginLeft: "5px" }}
                  />
                </a>
                <a href="mailto:info@sarithm.com" target="_blank">
                  <img
                    src={require("../images/emailIco.png")}
                    align="left"
                    style={{ marginleft: "10px" , marginLeft: "5px"}}
                  />
                </a>
                <br />
                <br />
              </div>
            </div>

            <div className="footerBlock1">
              <span className="footerTitle">OUR CLIENTS</span>
              <div>
                <a href="#" target="_blank">
                  <img
                    src={require("../images/hpe-logo.png")}
                    align="left"
                    style={{ width: "60px",  marginright: "5px"  }}
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={require("../images/stem-logo.png")}
                    align="left"
                    style={{ marginleft: "10px", width: "60px", marginright: "10px", marginLeft: "5px" }}
                  />
                </a>
                <a href="#" target="_blank" >
                  <img
                    src={require("../images/volvo-logo.png")}
                    align="left"
                    style={{ marginleft: "10px", width: "60px", marginLeft: "5px"  }}
                  />
                </a>
               
                <br />
                <br />
              </div>
            </div>





          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
