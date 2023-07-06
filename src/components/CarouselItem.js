import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import {render} from 'react-dom';
// import carouselData from "../../src/carouseldata.json";
//import carouselData from "../../src/carouseldata.json";
function CarouselItem() {
    const [index, setIndex] = useState(0);
  
   
    return (
      
        <Carousel.Item>
        <div class="bannerBlock">
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
    );
  }
  
  //render(<ControlledCarousel />);
  export default CarouselItem;