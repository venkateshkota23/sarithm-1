import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../helpers/loginHelper";

const Header = () => {
  const [isshow, setShow] = useState(true);

  const navigate = useNavigate();

  // let idNumber = window.location.href.substring(
  //   window.location.href.lastIndexOf("/") + 1
  // );

  // const loginpage = async () => {
  //   navigate(`/login?state=0`);
  // };

  const login = async () => {
    navigate(`/login?state=0`);
  };

  // const login = async () => {
  //   const scope = "email+openid";
  //   const clientId = "797j1p5ncnp33pr6vj9rcbm5jg";
  //   const responseType = "code";
  //   const domainUrl = window.location.origin;
  //   const redirectUri = domainUrl + "&state=";
  //   const state = 0;

  //   const response = await fetch(
  //     `/login?` +
  //       `scope=${scope}&` +
  //       `response_type=${responseType}&` +
  //       `client_id=${clientId}&` +
  //       `redirect_uri=${redirectUri}` +
  //       `${state}`,
  //     {
  //       redirect: "manual",
  //       mode: "no-cors",
  //     }
  //   );

  //   window.location.replace(response.url);
  // };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light px-5 navbar-inverse fixed-top py-lg-0 "
        style={{ padding: "15px", height: "inherit" }}
      >
        <div className="container" style={{ display: "inline" }}>
          <Link
            to="/home"
            className="navbar-brand"
            style={{
              float: "left",
            }}
          >
            {/* <img src="../images/logo.png" alt="logo" /> */}
            <img src={require("../images/logo.png")} alt="logo" />
          </Link>

          <div classNameName="sidebar-nav">
            <div className="container">
              <button
                className="navbar-toggler justify-content-end"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-backdrop="false"
                data-bs-scroll="true"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                style={{
                  float: "right",
                }}
                onClick={(e) => setShow(false)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="bg-light offcanvas offcanvas-end shadow"
                style={{
                  display: !isshow ? "" : "none",
                  right: "0px",
                  width: "220px",
                  zindex: "200",
                }}
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-body">
                  <ul className="navbar-nav" id="hamburger">
                    <li>
                      <Link
                        to="/projects"
                        className="nav-link active"
                        onClick={(e) => setShow(true)}
                        style={{
                          textDecoration: "none",
                          color: "#666666",
                        }}
                      >
                        PROJECTS
                      </Link>
                    </li>
                    <li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "#787171", textDecoration: "none" }}
                        >
                          SERVICES
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link
                              to="/mobile"
                              className="dropdown-item"
                              onClick={(e) => setShow(true)}
                              style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              Mobile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/development"
                              className="dropdown-item"
                              onClick={(e) => setShow(true)}
                              style={{
                                color: "white",
                                fontSize: "14px",
                                textDecoration: "none",
                              }}
                            >
                              SOFTWARE <br /> DEVELOPMENT
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/consulting"
                              className="dropdown-item"
                              onClick={(e) => setShow(true)}
                              style={{
                                color: "white",
                                fontSize: "14px",
                                textDecoration: "none",
                              }}
                            >
                              IT Consulting
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/infra"
                              className="dropdown-item"
                              onClick={(e) => setShow(true)}
                              style={{
                                color: "white",
                                fontSize: "14px",
                                textDecoration: "none",
                              }}
                            >
                              INFRASTRUCTURE <br /> MAINTENANCE
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                            color: "#666666",
                            textDecoration: "none",
                          }}
                        >
                          JOBS
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link
                              to="/jobs"
                              className="dropdown-item"
                              style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              LIST
                            </Link>
                          </li>
                          <li>
                            {/* <Link
                    to="/postJob"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                     POST
                   
                  </Link> */}

                            <Link
                              to={
                                isTokenValid()
                                  ? "/postjob"
                                  : "/login?fromPage=postjob"
                              }
                              className="dropdown-item"
                              style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              <span>POST</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        to="/jobs"
                        className="nav-link active"
                        onClick={(e) => setShow(true)}
                        style={{
                          color: "#666666",
                          textDecoration: "none",
                        }}
                      >
                        JOBS
                      </Link>
                    </li>
                    <li></li> */}

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          color: "#666666",
                          textDecoration: "none",
                        }}
                      >
                        COMPANY
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            to="/about"
                            className="dropdown-item"
                            onClick={(e) => setShow(true)}
                            style={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: "14px",
                            }}
                          >
                            ABOUT US
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="dropdown-item"
                            onClick={(e) => setShow(true)}
                            style={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: "14px",
                            }}
                          >
                            CONTACT US
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* </nav> */}
          </div>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end mt-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link active"
                style={{
                  textDecoration: "none",
                  color: "#666666",
                }}
              >
                PROJECTS
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#787171", textDecoration: "none" }}
              >
                SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

              <li>
                  <Link
                    to="/consulting"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    IT CONSULTANCY
                  </Link>
                </li>

                <li>
                  <Link
                    to="/infra"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    CLOUD <br /> CONSULTANCY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    MOBILE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/development"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    SOFTWARE <br /> DEVELOPMENT
                  </Link>
                </li>

              </ul>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/jobs"
                className="nav-link active"
                style={{
                  color: "#666666",
                  textDecoration: "none",
                }}
              >
                JOBS
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#666666",
                  textDecoration: "none",
                }}
              >
                JOBS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/jobs"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    LIST
                  </Link>
                </li>
                <li>
                  {/* <Link
                    to="/postJob"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                     POST
                   
                  </Link> */}

                  <Link
                    to={isTokenValid() ? "/postjob" : "/login?fromPage=postjob"}
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    <span>POST</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#666666",
                  textDecoration: "none",
                }}
              >
                COMPANY
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/about"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="dropdown-item"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
