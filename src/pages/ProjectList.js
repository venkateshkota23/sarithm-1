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

const projects = [
  {
    projectName: "Project 1",
    projectDescription:
      "As an early adopter of containers and kubernetes on AWS, the company's site reliability engineering (SRE) team was still using first-generation tooling that required high-effort customization.",
    skills: [
      {
        name: "AWS",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: "MySQL",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: "REACT",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: "JAVA",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
    ],
    images: [
      {
        img: "https://placeholder.pics/svg/300x400/16FF68-2548FF/FF608C/Project",
        title: "Project image title",
      },
      {
        img: "https://placeholder.pics/svg/300x400/16FF68-2548FF/FF608C/Project",
        title: "Project image title",
      },
      {
        img: "https://placeholder.pics/svg/300x400/16FF68-2548FF/FF608C/Project",
        title: "Project image title",
      },
      {
        img: "https://placeholder.pics/svg/400x400/DEDEDE/555555/Project",
        title: "Project image title",
      },
    ],
  },
  {
    projectName: "Project 2",
    projectDescription:
      "As an early adopter of containers and kubernetes on AWS, the company's site reliability engineering (SRE) team was still using first-generation tooling that required high-effort customization.",
    skills: [
      {
        name: "AZURE",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: "SQL",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: "Angular",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
      {
        name: ".Net",
        description:
          "(to manage resources in cloud computing and cloud storage as well as security credentials)",
      },
    ],
    images: [
      {
        img: "https://placeholder.pics/svg/300x400/16FF68-2548FF/FF608C/Project",
        title: "Project image title",
      },
      {
        img: "https://placeholder.pics/svg/400x400/DEDEDE/555555/Project",
        title: "Project image title",
      },
    ],
  },
];

const SkillItem = ({skill}) => {
  return (<Box>
    <Typography variant="h6">{skill.name}</Typography>
    <Typography variant="body2">
      {skill.description}
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