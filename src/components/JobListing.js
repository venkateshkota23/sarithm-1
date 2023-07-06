import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import {
  Box,
  Card,
  Grid,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import SearchBar from "material-ui-search-bar";
import queryString from "query-string";

const JobListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const performAPICall = async () => {
    setLoading(true);
    fetch(
      `/invocations?function=show%20requisitions`,

      {
        method: "POST",
        //mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: "test" }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setProducts(data);
        setfilteredProducts(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    performAPICall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              backgroundimage: "url(../images/Services.png)",
              backgroundposition: "-0px -100px",
            }}
          ></div>
          <div className="bannerContent">
            <div class="content">
              <span class="pageTitle">JOBS</span>
              {/* <div className="Jobs-body">
                  <h5 className="Content">{jobsData}</h5>
                </div> */}
              <br />
              <span class="subTitle">
                Find your Ideal Career <br />
                Get your Dream Job.! now it's easy...
              </span>
            </div>
          </div>
        </div>
        <div className="content padSmall">
          {loading ? (
            <Box className="loading">
              <CircularProgress />
              <h5>Loading Jobs...</h5>
            </Box>
          ) : (
            <Grid container marginY="1rem" paddingX=".6rem" spacing={8}>
              <Box
                className="videos"
                justifyContent="center"
                pt={2}
                sx={{
                  paddingX: "30px",
                  paddingLeft: ".8rem",
                  paddingRight: ".4rem",
                  marginLeft: "1.5rem",
                  marginRight: "1rem",
                  boxSizing: "border-box",
                  // float: "left",
                  // width: "100%",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {/* <Grid  item xs={6} > */}
                  {products.length ? (
                    products.map((product) => <JobList product={product} />)
                  ) : (
                    <Box className="loading">
                      <h4 style={{ color: "#636363" }}> No Jobs found </h4>
                    </Box>
                  )}
                  {/* </Grid> */}
                </Grid>
              </Box>
            </Grid>
          )}

          <br />
          <br />
          <br />
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </main>
  );
};

export default JobListing;
