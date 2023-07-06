import React from "react";

import {project} from "../project";
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <main>
    <div class="mainBody">
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
        <div class="bannerContent">
          <div class="content">
            <span class="pageTitle">Projects delivered to our clients</span>
            <br />
            <span class="subTitle">
              We are passionate about building innovative <br />
              and robust products
            </span>
          </div>
        </div>
      </div>

      <div>
      {project.map((data, key) => {

                return <div class="content padSmall">
                <div class="proLogo">
                  <div class="cLogo">
                
                    <img src = {data.image} /> {" "}
                  </div>
                  <div class="pDesc">
                    <span class="subTitle1">
                      <b>{data.title}</b>
                    </span>
                    <br></br>
                    <p>
                      <b>{data.description}</b>
                    </p>

                 {/* <Link to={`/ProjectDetail}`}> */}
                 <Link to="/ProjectDetail"  key = {data.id } state={{ title: data.title,
                 description: data.description,
                 image : data.image,
                 highlites: data.highlites
                }}>
                 <div class="productbutton">Learn More</div>
                 </Link>

                  </div>
                </div>
                <br />
                <br />
                <br />
        
             </div> 
         })}
      </div>
    </div>
    <div style={{ clear: "both" }}></div>
  </main>
  );
};

export default Projects;
