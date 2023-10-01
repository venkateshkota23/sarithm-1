import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {projects} from "../ProjectListData";
//import {styles} from "../ProjectListStyles";

const SkillItem = ({skill}) => {
  return (<Box>
    <Typography variant="h6"><div style={skill.skillNameStyle}>{skill.name}</div></Typography>
    <Typography variant="body2">
    <div style={skill.skillDescriptionStyle}>{skill.description}</div>
    </Typography>
  </Box>);
}

const ProjectItemImages = ({images}) => {
  return (
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
          }}
          rowHeight={300}
        >
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>  
  )
}

const ProjectItemCard = ({project}) => {
  const [projectDetails, setprojectDetails] = useState([]);

  return (
    
    <Card
    variant="outlined"
    sx={{ mb: "2rem", borderRadius: "30px" }}
  >
    <CardHeader
      title={project.projectName}
      subheader={project.projectDescription}
    ></CardHeader>
    <CardContent>
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
        {project.skills.map((skill) => (
          <SkillItem skill={skill}></SkillItem>
        ))}
      </Box>
      <Box>
        <ProjectItemImages images={project.images}></ProjectItemImages>
      </Box>
    </CardContent>
    <Link to="/ProjectListDetail"  key = {project.projectName } state={{ title: project.projectName,
                 description: project.projectDescription,
                 fullDescription: project.projectFullDescription,
                 technologies: project.skills,
                 technologiesHeadingStyle: project.technologiesHeadingStyle,
                 features: project.images
                }}>
    <Button
      fullWidth={true}
      sx={{
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      View full story
    </Button> </Link>
    {/* {setprojectDetails(project.projectDescription)} */}
  </Card>
  )
}

class ProjectList extends React.Component {
  render() {
    return (
      <main>
        <div className="mainBody">
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
            <div className="bannerContent">
              <div class="content">
                <span class="pageTitle">PROJECTS</span>
                <br />
              </div>
            </div>
          </div>
          <br />
          <Box sx={{ mx: "10%", my: "2rempx" }}>
            {projects.map((project) => (
              <ProjectItemCard project={project}></ProjectItemCard>
            ))}
          </Box>
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}
export default ProjectList;