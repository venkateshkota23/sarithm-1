import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import {render} from 'react-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
        <div class="bannerBlock4">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundposition: "-0px -100px",
              }}
            >
              <img src={require("../images/Services.png")} />{" "}
            </div>
            <div className="sliderContent">
              <div class="content">
                <span class="pageTitle">PROJECTS</span>
                <br />
                <span class="subTitle">
                  We are passionate about building innovative <br />
                  and robust products
                </span>
              </div>
            </div>
          </div> 
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          
        </Carousel.Item>


        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/innerBg1.jpg")}
            alt="First slide"
            style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "950px",
                backgroundposition: "-0px -100px",
              }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item> */}


<Carousel.Item>
<div className="bannerBlock">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundimage: "url(images/Services.png)",
                backgroundposition: "-0px -100px",
              }}
            ></div>
            <div className="sliderContent">
              <div class="content">
                <span class="pageTitle">MOBILE TECHNOLOGY</span>
                <br />
                <span class="subTitle">
                  Our passion for software development truly goes hand in hand{" "}
                  <br />
                  with mobile technology...
                </span>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          
        </Carousel.Item>


        <Carousel.Item>
        <div className="bannerBlock4">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundimage: "url(images/Services.png)",
                backgroundposition: "-0px -100px",
              }}
            ></div>
            <div className="sliderContent">
              <div class="content">
                <span class="pageTitle">SOFTWARE DEVELOPMENT</span>
                <br />
                <span class="subTitle">
                  We have strived to create algorithms that offer users
                  versatility while running easier, <br />
                  longer, and function seamlessly on any operating system....
                </span>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          
        </Carousel.Item>



        <Carousel.Item>
        <div className="bannerBlock1">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundimage: "url(images/Services.png)",
                backgroundposition: "-0px -100px",
              }}
            ></div>
            <div className="sliderContent">
              <div class="content">
                <span class="pageTitle">IT CONSULTANCY</span>
                <br />
                <span class="subTitle">
                  We strive to provide highly engaged consultants who can offer{" "}
                  <br />
                  outstanding services to our clients...
                </span>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          
        </Carousel.Item>


        <Carousel.Item>
        <div className="bannerBlock">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundimage: "url(images/Services.png)",
                backgroundposition: "-0px -100px",
              }}
            ></div>
            <div className="sliderContent">
              <div class="content">
                <span class="pageTitle">INFRASTRUCTURE MAINTENANCE</span>
                <br />
                <span class="subTitle">
                  We believe that the infrastructure transparency leads to
                  higher <br />
                  efficiency in infrastructure management...
                </span>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          
        </Carousel.Item>


        {/* 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}


      </Carousel>
    );
  }
  
  //render(<ControlledCarousel />);
  export default ControlledCarousel;