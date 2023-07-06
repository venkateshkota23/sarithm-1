import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const JobList = ({ product }) => {
  console.log("product is", product);
  const navigate = useNavigate();
  const onEditButtonClick = () => {
    const jobId = product[0];
    console.log("job id is", jobId);
    navigate(`/edit/${jobId}`);
  };
  const loggedInUser = localStorage.getItem("email") || "";
  const isLoggedInUserSarithmUser = loggedInUser.endsWith("@sarithm.com");

  return (
    <Grid item lg={6} xs={12}>
      <div
        class="card"
        style={{
          paddingLeft: "2px",
          paddingRight: "2px",
          marginLeft: "20px",
          marginRight: "14px",
          // fontSize: "10px",
          // width: "103%",
          width: "103%",
        }}
      >
        <div class="card-header">
          <h4> {product[2]} </h4>
          {isLoggedInUserSarithmUser && (
            <Button
              variant="outlined"
              endIcon={<EditIcon />}
              onClick={onEditButtonClick}
            >
              Edit
            </Button>
          )}
        </div>

        <div class="card-body">
          <h5 class="card-title">Job Description</h5>
          <p
            class="card-text"
            style={{ font: "menu", fontSize: "10px", width: "100%" }}
          >
            {" "}
            {product[3]}{" "}
          </p>
          <Link to={`/jobs/${product[0]}`}>
            <div class="card text-center">
              <button type="button" class="btn btn-outline-primary">
                {" "}
                Learn More{" "}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </Grid>
  );
};
export default JobList;
