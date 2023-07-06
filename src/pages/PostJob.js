import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import Select from "react-select";
import Alert from "@mui/material/Alert";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { JobTitleAtom } from "../Recoil/atoms/JobTitleAtom";
import { getAuthorizationToken } from "../helpers/loginHelper";
import { updatePostJobDetails } from "../slices/postJobSlice";
import { AUTHENTICATION_TYPES } from "../constants";
import "./PostJob.css";

const PostJob = () => {
  const postJobDetails = useSelector((state) => state.postJobDetails);
  const {
    jobTitle,
    shortDesciption,
    jobDescription,
    primarySkill,
    AdditionalSkills,
    location,
    onsiteLocation,
    closeRequisition,
    slackChannelId,
    slackChannelInfo,
  } = postJobDetails;
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState();
  const [userInfoError, setUserInfoError] = useState(null);

  const formRef = React.useRef();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonState, setButtonState] = useState("");
  const url = window.location.href;
  const queryString = url.split("?");
  const appendString = "?" + queryString[1];
  const urlParams = new URLSearchParams(appendString);
  const code = urlParams.get("code");
  const [_, setTodoList] = useRecoilState(JobTitleAtom);

  const [acceptTermsChecked, setAcceptTermsChecked] = useState(true);

  let { jobId } = useParams();
  console.log("jobId in postJob", jobId);

  useEffect(() => {
    const baseUrl = window.location.origin;
    fetch(`/invocations?function=show%20requisition&id=${jobId}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "test" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data is", data);
        dispatch(
          updatePostJobDetails({
            jobTitle: data.position_title,
            shortDesciption: data.short_job_description,
            jobDescription: data["job description"],
            primarySkill: {
              value: data["primary_skills"][0][1],
              label: data["primary_skills"][0][0],
            },
            AdditionalSkills: data["additional_skills"].map((skill, index) => {
              return <>{(index ? ", " : "") + skill[0]}</>;
            }),
            location: data.location,
            onsiteLocation: data.onsite_location,
          })
        );
      })
      .catch((error) => {
        console.log("error in fetching job details", error);
      });
  }, []);

  const fetchSpecialties = async () => {
    fetch(`/invocations?function=list%20specialties`, {
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
        console.log(data);
        setProducts(data);
        return data;
      });
  };

  console.log("user Info is", userInfo);
  useEffect(() => {
    fetchSpecialties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodoItem = () => {
    setTodoList(() => [
      {
        id: "jobTitle",
        text: document.getElementById("fullname").value,
      },
    ]);
  };

  function generate_channelId() {
    return Math.random()
      .toString(36)
      .split("")
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
      .join("")
      .substr(2, 8);
  }

  function toastFunction() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  const handleTextChange = (event) => {
    setButtonState(event.target.value);
  };

  const handleBeforeSubmit = () => {
    if (
      jobTitle &&
      shortDesciption &&
      jobDescription &&
      primarySkill &&
      AdditionalSkills &&
      location &&
      (location === "onsite" ? onsiteLocation : true)
    ) {
      HandleSubmit();
    }
  };

  const HandleSubmit = () => {
    const url = "/slack";

    let fd = new FormData();
    let fullname = jobTitle;
    let lastname = shortDesciption;
    let jd = jobDescription;
    let pskil = primarySkill;
    let askill = AdditionalSkills;
    const createdBy = localStorage.getItem("email") || "";

    let initial_comment =
      "Full name : " +
      fullname +
      " " +
      lastname +
      " " +
      " Job Description : " +
      jd +
      " Primary Skill : " +
      pskil +
      " Additional skill : " +
      askill;

    console.log(initial_comment);
    let channelId_gen = generate_channelId().toUpperCase();
    let functionName = "";
    if (jobId && closeRequisition) {
      functionName = "close requisition";
    } else if (jobId) {
      functionName = "update requisition";
    } else {
      functionName = "create requisition";
    }

    let fileData = JSON.stringify({
      function: functionName,
      ...(jobId && { requisition_id: jobId }),
      data: {
        position_title: fullname,
        specialty_code: 13,
        short_job_description: lastname,
        job_description: jd,
        channel_info: jobId && slackChannelInfo ? slackChannelInfo : fullname,
        channelid: jobId && slackChannelId ? slackChannelId : channelId_gen,
        employer_id: 1,
        due_date: "2022-12-31",
        createdBy,
        location: location,
        onsite_location: onsiteLocation,

        slack_channel_info: slackChannelInfo,
      },
    });

    fd.append("content", fileData);
    fd.append("channels", "C031P7HQYE8");
    let fname = channelId_gen + ".json";
    fd.append("filename", fname);
    fd.append("filetype", "json");

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
        dispatch(
          updatePostJobDetails({
            jobTitle: "",
            shortDesciption: "",
            jobDescription: "",
            primarySkill: "",
            AdditionalSkills: "",
            location: "",
            onsiteLocation: "",
            slackChannelId: "",
            slackChannelInfo: "",
            closeRequisition: false,
          })
        );
        //navigate('/jobs');
      })
      .catch((error) => {
        setShowForm(false);
        setShowErr(true);
        setButtonState(true);
      });
  };

  const handleRedirect = () => {
    navigate("/jobs");
  };

  const handlePreview = () => {
    navigate(`/preview/${jobId}`);
  };

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
              <span class="pageTitle">{jobId ? "Edit Job" : "POST A JOB"}</span>
              <br />
              <span class="subTitle">
                Find your Ideal Career <br />
                Get your Dream Job.! now it's easy...
              </span>
            </div>
          </div>
        </div>

        <div className="padSmall">
          <Fragment>
            <span className="block-example border border-dark">
              <form ref={formRef} style={{ padding: "0px 20px" }}>
                <Paper>
                  <Box px={2} py={2}>
                    <div>
                      <TextField
                        required
                        id="fullname"
                        name="fullname"
                        label="Job Title"
                        fullWidth
                        margin="dense"
                        value={jobTitle}
                        onChange={(e) =>
                          dispatch(
                            updatePostJobDetails({
                              jobTitle: e.target.value,
                            })
                          )
                        }
                      />
                      <TextField
                        required
                        id="lastname"
                        name="lastname"
                        label="Short Description"
                        fullWidth
                        margin="dense"
                        value={shortDesciption}
                        onChange={(e) =>
                          dispatch(
                            updatePostJobDetails({
                              shortDesciption: e.target.value,
                            })
                          )
                        }
                      />
                      <div className="form-control-textbox">
                        <label class="control-label" for="comment">
                          Job Description:
                        </label>
                        <div>
                          <textarea
                            class="form-control"
                            rows="5"
                            id="comment"
                            value={jobDescription}
                            onChange={(e) =>
                              dispatch(
                                updatePostJobDetails({
                                  jobDescription: e.target.value,
                                })
                              )
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-control-textbox">
                      <label class="control-label col-sm-4" for="comment">
                        Primary Skills:
                      </label>
                      <div>
                        {/* <textarea class="form-control" rows="5" id="pskill"></textarea> */}
                        <Select
                          id="pskill"
                          options={(products || [])?.map((obj) => {
                            return { value: obj[0], label: obj[1] };
                          })}
                          value={primarySkill}
                          onChange={(selected) =>
                            dispatch(
                              updatePostJobDetails({
                                primarySkill: selected,
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="form-control-textbox">
                      <label class="control-label col-sm-4" for="comment">
                        Additional Skills:
                      </label>
                      <div>
                        <textarea
                          class="form-control"
                          rows="5"
                          id="askill"
                          value={AdditionalSkills}
                          onChange={(e) =>
                            dispatch(
                              updatePostJobDetails({
                                AdditionalSkills: e.target.value,
                              })
                            )
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <FormControl>
                        <label class="control-label col-sm-4" for="comment">
                          Location
                        </label>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          style={{ display: "flex", flexDirection: "row" }}
                          name="controlled-radio-buttons-group"
                          value={location}
                          onChange={(e) => {
                            const selectedLocation = e.target.value;
                            dispatch(
                              updatePostJobDetails({
                                location: e.target.value,
                              })
                            );
                            if (selectedLocation === "remote") {
                              dispatch(
                                updatePostJobDetails({
                                  onsiteLocation: "",
                                })
                              );
                            }
                          }}
                        >
                          <FormControlLabel
                            value="remote"
                            control={<Radio />}
                            label="Remote"
                          />
                          <FormControlLabel
                            value="onsite"
                            control={<Radio />}
                            label="Onsite"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div>
                      {location === "onsite" && (
                        <TextField
                          required
                          id="onsite"
                          name="onsitelocation"
                          label="Enter Location for Onsite"
                          fullWidth
                          margin="dense"
                          value={onsiteLocation}
                          onChange={(e) =>
                            dispatch(
                              updatePostJobDetails({
                                onsiteLocation: e.target.value,
                              })
                            )
                          }
                        />
                      )}
                    </div>
                    {jobId && (
                      <>
                        <Grid item xs={12} sm={12}>
                          <Checkbox
                            checked={closeRequisition}
                            size="small"
                            onChange={() => {
                              dispatch(
                                updatePostJobDetails({
                                  closeRequisition: !closeRequisition,
                                })
                              );
                            }}
                          />{" "}
                          Close Requisition
                        </Grid>
                        <TextField
                          required
                          id="slackChannelId"
                          name="slackChannelId"
                          label="Slack Channel ID"
                          fullWidth
                          margin="dense"
                          value={slackChannelId}
                          onChange={(e) =>
                            dispatch(
                              updatePostJobDetails({
                                slackChannelId: e.target.value,
                              })
                            )
                          }
                        />
                        <TextField
                          required
                          id="slackChannelInfo"
                          name="slackChannelInfo"
                          label="Slack Channel Info"
                          fullWidth
                          margin="dense"
                          value={slackChannelInfo}
                          onChange={(e) =>
                            dispatch(
                              updatePostJobDetails({
                                slackChannelInfo: e.target.value,
                              })
                            )
                          }
                        />
                      </>
                    )}
                    <Grid item xs={12} sm={12}>
                      <Checkbox
                        checked={acceptTermsChecked}
                        size="small"
                        onChange={() => {
                          setAcceptTermsChecked(!acceptTermsChecked);
                        }}
                      />{" "}
                      Accept terms and conditions
                    </Grid>

                    <br />

                    <Box mt={3}>
                      &nbsp;&nbsp;
                      <Button
                        id="btnSubmit"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handlePreview();
                        }}
                      >
                        Preview
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        id="btnSubmit"
                        variant="contained"
                        color="primary"
                        disabled={
                          !jobTitle ||
                          !jobDescription ||
                          !shortDesciption ||
                          !primarySkill ||
                          !AdditionalSkills ||
                          !acceptTermsChecked ||
                          !location ||
                          (location === "onsite" && !onsiteLocation) ||
                          (jobId && !slackChannelId) ||
                          (jobId && !slackChannelInfo)
                        }
                        onClick={() => {
                          handleBeforeSubmit();
                        }}
                      >
                        {jobId ? "Edit" : "Submit"}
                      </Button>
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
          <br />
          <br />
          <br />
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </main>
  );
};

export default PostJob;
