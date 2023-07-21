import React from "react";
import { useLocation } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";


const SkillItem = ({skill}) => {
    return (<Box>
      <Typography variant="h6">{skill.name}</Typography>
      <Typography variant="body2">
        {skill.description}
      </Typography>
    </Box>);
  }


const ProjectListDetail = () => {
    const location = useLocation();
    // console.log(location.state.title);
    // console.log(location.state.description);
    // console.log(location.state.image);
    // console.log(location.state.highlites);


    // const details = location.state.highlites.map((skill, index) => {
    //     return <ul>
    //         <li key={index}>{skill}</li>
    //     </ul>
    // });


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

      <br /> <br />

      <h4>{location.state.title}</h4> <br />

      <p>{location.state.fullDescription}</p>

      <br />

      <p>   Project description comes here...!!! <br></br><br></br></p>

      <h4>Technologies</h4>

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
           <span class="subTitle1">
                      {/* <b>{location.state.title}</b> */}
             </span>

           <br></br>
            {/* <p><b>{location.state.description}</b></p> */}
            <br></br>
            <br />

            {/* <img src = {location.state.image} /> {" "} */}

            <br></br>
            <br />

            <span class="subTitle1">
                      {/* <b>Project Highlights</b> */}
             </span>
             <br />

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
    <div style={{ clear: "both" }}></div>
  </main>
  );
};

export default ProjectListDetail;
