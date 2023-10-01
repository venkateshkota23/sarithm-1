import React from "react";
import { useLocation } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../src/App.css"; 
//import {Detailstyles} from "../ProjectListDetailStyles";


const SkillItem = ({skill}) => {
    return (<Box>
      <Typography variant="h6"><div style={skill.skillNameStyle}>{skill.name}</div></Typography>
      <Typography variant="body2">
      <div style={skill.skillDescriptionStyle}>{skill.description}</div>
      </Typography>
    </Box>);
  }


const FeatureItem = ({feature}) => {
    return (
        <div>
            <br /> <br />
            <Typography variant="h6"><div style={feature.featureHeading.textStyle}>{feature.featureHeading.textData}</div></Typography> <br /><br />
            {feature.img === null ? (
                <p>
                    <Typography variant="h6"><div style={feature.featureHeading.textStyle}>{feature.featureHeading.textData}</div></Typography>
                    <Typography variant="body2"><div style={feature.featureDescription.textStyle}> {feature.featureDescription.textData}</div>
                    </Typography>
                </p>
            ) : (
                <Box sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row"
                    },
                  }} >
            <div style={{
                    flex: 1,
                    display:"flex",
                    justifyContent: "center",
                  }} >
                    <img
                        src={feature.img}
                        srcSet={feature.img}
                        alt={feature.title}
                        loading="lazy"
                      />
                  </div>
                  <div style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                   
                  }} >
                    {/* <p>{feature.featureDescription}</p> */}
                    {/* <Typography variant="h6">{feature.featureHeading}</Typography> */}
              <Typography variant="body2">
              <div style={feature.featureDescription.textStyle}> {feature.featureDescription.textData}</div>
              </Typography>
                  </div>   
            </Box> 
            )   
        }
        </div>
    );
  }


const FeatureItemalt = ({feature}) => {
    return (
        <div>
            <br /> <br /> 
            <Typography variant="h6"><div style={feature.featureHeading.textStyle}>{feature.featureHeading.textData}</div></Typography> <br />
            {feature.img === null ? (
                <p>
                    <Typography variant="h6"><div style={feature.featureHeading.textStyle}>{feature.featureHeading.textData}</div></Typography>
                    <Typography variant="body2">
                    <div style={feature.featureDescription.textStyle}> {feature.featureDescription.textData}</div>
                    </Typography>
                </p>
            ) : (
                    <Box id="alt" sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
          }} >

        <div style={{
            flex: 1,
            display:"flex",
            justifyContent: "center",
          }} >
            {/* <Typography variant="h6">{feature.featureHeading}</Typography> */}
            <Typography variant="body2">
            <div style={feature.featureDescription.textStyle}> {feature.featureDescription.textData}</div>
            </Typography>    
          </div>  
        <div style={{
            flex: 1,
            // maxWidth : "100%",
            display:"flex",
            justifyContent: "center",
          }} >
            <img
                src={feature.img}
                srcSet={feature.img}
                alt={feature.title}
                loading="lazy"
              />
          </div>   

    </Box>
            )   
        }
        </div>
    );
  }



const ProjectListDetail = () => {
    const location = useLocation();

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
            <span class="pageTitle">{location.state.title}</span>
            <br />
            <span class="subTitle">
              {/* We are passionate about building innovative <br />
              and robust products */}
            </span>
          </div>
        </div>
      </div>
      <div style={{
        margin: "0 10%" 
      }}>
      <br /> <br />

      {/* <h4>{location.state.title}</h4> <br /> */}

      <p><div style={location.state.fullDescription.textStyle}>{location.state.fullDescription.textData}</div></p>

      <br />

        

        {location.state.features.map((feature,index) => {
            return index % 2 === 0 ?
            <FeatureItem feature={feature}></FeatureItem> :
            <FeatureItemalt feature={feature}></FeatureItemalt>;
         })}

    
      <br></br><br></br>

      <h4><div style={location.state.technologiesHeadingStyle}>Technologies</div></h4>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row"
          },
          alignItems: "flex-start",
          justifyContent: 'space-between',
          gap: '1rem',
          mb: "2rem",
        }}
      >
      {location.state.technologies.map((skill) => (
        <Card
        variant="outlined"
        sx={{ mb: "2rem", borderRadius: "30px" }}
      >
          <Box sx={{ mx: "10%", my: "2rempx" }}> <SkillItem skill={skill}></SkillItem></Box> </Card>
        ))} </Box>

      <div className="content padSmall">
     
        <div class="pDesc">
          

           

            {/* <img src = {location.state.image} /> {" "} */}

            

            {/* {details.length > 0 ? (
            <p> {details} </p>
          ) : (
            <p> Contact Us for More Details </p>
          )} */}
          <br />


        </div>
          <br />
        </div>
        <br />
        </div>
    </div>
    <div style={{ clear: "both" }}></div>
  </main>
  );
};

export default ProjectListDetail;