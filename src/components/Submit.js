import * as React from "react";
import { Fragment } from "react";
import Alert from "@mui/material/Alert";
import "../../src/App.css";
import "./Header.css";
import "./Submit.css";
import JobListing from "./JobListing";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useState, useEffect } from "react";
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
//import queryString from "query-string";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { getAuthorizationToken } from "../helpers/loginHelper";
const Submit = ({ channelid }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [gender, setGender] = useState("no");
  const [LoadedJD, setLoadedJD] = useState([]);
  const [buttonState, setButtonState] = useState("");
  const [file, setFile] = useState();
  const url = window.location.href;
  const queryString = url.split("?");
  const appendString = "?" + queryString[1];
  const urlParams = new URLSearchParams(appendString);
  const code = urlParams.get("code");
  const jobNumber = urlParams.get("jobNumber");

  useEffect(() => {
    setIsLoading(true);
    fetch(`/invocations?function=show%20requisition&id=${jobNumber}`, {
      method: "POST",
      //mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "test" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedJD(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setLoadedJD(
          '{"channel_info": "ERROR","requisition_id": "ERR", "position_title":"ERR", "job description":"ERR","status":"ERR"}'
        );
      });
  }, []);
  function handlefileChange(event) {
    setFile(event.target.files[0]);
  }
  function toastFunction() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  const btnValue = () => {
    setButtonState(false);
  };
  const handleTextChange = (event) => {
    setButtonState(event.target.value);
  };
  const handleBeforeSubmit = () => {
    if (
      document.getElementById("fullname").value !== "" &&
      document.getElementById("lastname").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("phonenumber").value !== "" &&
      document.getElementById("upload-photo").files.length !== 0
    ) {
      HandleSubmit();
    }
  };
  const HandleSubmit = () => {
    const url = "/slack";
    let fd = new FormData();
    let myFile = document.getElementById("upload-photo").files[0];
    let fullname = document.getElementById("fullname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let initial_comment =
      "Full name : " +
      fullname +
      " " +
      lastname +
      " " +
      " Email : " +
      email +
      " Phone number : " +
      phonenumber +
      " Work Authorization : " +
      gender;
    fd.append("file", myFile);
    fd.append("initial_comment", initial_comment);
    fd.append("channels", LoadedJD["channelid"]);
    //fd.append('channels', "GHTUIVFGJGHH");
    console.log(LoadedJD["channelid"]);
    fetch(url, {
      method: "POST",
      headers: {
        authorizationToken: getAuthorizationToken(),
      },
      body: fd,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else return response.json();
      })
      .then((data) => {
        if (!data.ok) {
          throw new Error(data.status);
        }
        setShowForm(true);
        toastFunction();
        document.getElementById("fullname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("upload-photo").value = null;
        setGender("");
        // navigate.push('/jobs');
        // navigate('/jobs'); -> working
      })
      .catch((error) => {
        setShowForm(false);
        setShowErr(true);
        setButtonState(true);
      });
  };
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleRedirect = () => {
    console.log("hello in redirect");
    navigate("/jobs");
  };
  const formRef = React.useRef();
  return (
    <>
      <main>
        <div className="mainBody">
          <div class="bannerBlock1">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "500px",
                height: "150px",
              }}
            >
              <img src={require("../images/globe.png")} />
            </div>
            <div className="bannerContent">
              <div className="content">
                <span className="pageTitle">{LoadedJD["position_title"]}</span>
                <br />
                <span className="subTitle">
                  {LoadedJD["Short Description"]}
                </span>
              </div>
            </div>
          </div>
          <Fragment>
            <span className="block-example border border-dark">
              <form
                ref={formRef}
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Paper>
                  <Box px={3} py={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="fullname"
                          name="fullname"
                          label="First Name"
                          fullWidth
                          margin="dense"
                          onChange={handleTextChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}></Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="lastname"
                          name="lastname"
                          label="Last Name"
                          fullWidth
                          margin="dense"
                          onChange={handleTextChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          type="email"
                          label="Email Address"
                          fullWidth
                          margin="dense"
                          onChange={handleTextChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="phonenumber"
                          name="phonenumber"
                          label="Phone Number"
                          fullWidth
                          margin="dense"
                          onChange={handleTextChange}
                        />
                      </Grid>
                      <br />
                      <Grid item xs={12} sm={12}></Grid>
                      <Grid item xs={6} sm={6}>
                        <p>
                          {" "}
                          <h4>Upload Resume </h4>{" "}
                        </p>
                        <input
                          required
                          type="file"
                          class="form-control"
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                          onChange={() => {
                            handlefileChange();
                          }}
                          required
                        />
                      </Grid>
                      <Grid item xs={6} sm={6}></Grid>
                      <Grid item xs={6} sm={6}>
                        <form>
                          <p>
                            {" "}
                            <h4>Work Authorization : </h4>{" "}
                          </p>
                          <div>
                            <input
                              type="radio"
                              value="yes"
                              checked={gender === "yes"}
                              onChange={handleChange}
                            />{" "}
                            Yes,I am currently eligible to work (Work
                            permit/visa/citizenship) in the country to which I
                            am applying.
                          </div>
                          <div>
                            <input
                              type="radio"
                              value="no"
                              checked={gender === "no"}
                              onChange={handleChange}
                            />{" "}
                            No,I need a visa sponsorship (H1B / Other work
                            permit) in the country to which I am applying.
                          </div>
                        </form>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Checkbox defaultChecked size="small" /> Accept terms
                        and conditions
                      </Grid>
                    </Grid>{" "}
                    <br />
                    <Box mt={3}>
                      {/* <Link to="jobs">  */}
                      <Button
                        id="btnSubmit"
                        variant="contained"
                        color="primary"
                        disabled={!buttonState}
                        // onClick={handleSubmit}
                        onClick={() => {
                          formRef.current.reportValidity();
                          handleBeforeSubmit();
                          btnValue();
                        }}
                      >
                        Submit
                      </Button>
                      {/* </Link> */} <br />
                      <br />
                      {showForm && (
                        <Alert severity="success">
                          Resume Posted Successfully !{" "}
                        </Alert>
                      )}
                      {showErr && (
                        <Alert severity="error">Please try Again ! </Alert>
                      )}
                      <div id="toast">
                        <div class="checkicon">
                          {" "}
                          <i class="fas fa-check-square"></i>{" "}
                        </div>
                        SUCCESS: We have received your Application..!
                      </div>
                      {showForm && (
                        <div>
                          <div id="toast">
                            <div class="checkicon">
                              {" "}
                              <i class="fas fa-check-square"></i>{" "}
                            </div>
                            SUCCESS: We have received your Application..!
                          </div>
                          {/* {handleRedirect()} */}
                          {setTimeout(() => {
                            handleRedirect();
                          }, 3500)}
                        </div>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </form>{" "}
            </span>
          </Fragment>
        </div>
      </main>
    </>
  );
};
export default Submit;
