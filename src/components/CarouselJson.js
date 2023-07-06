import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import {data} from "../carouseldata1";

//working json file
//var datafile = require("../carouseldata.json");

// npm install --save-dev @babel/preset-react

function CarouselJson() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>


{data.map((data, key) => {
                // return <CarouselItem product={data} />;
                return  <Carousel.Item> 
                  {/* {data.name} */}

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
              <img src = {data.url1} /> {" "}
              
            </div>
          
            <div className="sliderContent">
              <div class="content">
            <span class="pageTitle">{data.title}</span>
                <br />
                <span class="subTitle">
                  {/* We are passionate about building innovative <br />
                  and robust products */}
                 
                  <div dangerouslySetInnerHTML={{__html:data["subtitle"]}}></div>
                </span>
              </div>
            </div>
          </div> 
            
            
              </Carousel.Item> 
            })}

       

      </Carousel>
    );
  }
  

  export default CarouselJson;