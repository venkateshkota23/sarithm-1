import React from "react";
import Button from "@mui/material/Button";
import Form from "./Form";
import Submit from "./Submit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION_TYPES } from "../constants";
import { isTokenValid } from "../helpers/loginHelper";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedJD, setLoadedJD] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  let idNumber = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const login = () => {
    isTokenValid()
      ? navigate(`/submit?jobNumber=${idNumber}&fromPage=submitjob`)
      : navigate(`/login?jobNumber=${idNumber}&fromPage=submitjob`);
  };

  useEffect(() => {
    setIsLoading(true);
    const baseUrl = window.location.origin;
    fetch(
      `/invocations?function=show%20requisition&id=${window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      )}`,
      {
        method: "POST",
        mode: "no-cors",
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
        setIsLoading(false);
        setLoadedJD(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setLoadedJD(
          '{"channel_info": "ERROR","requisition_id": "ERR", "position_title":"ERR", "job description":"ERR","status":"ERR"}'
        );
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p> Retrieving Job Description....</p>
        <p> Loading {"Jobs"}</p>
      </section>
    );
  }

  const showForms = () => {
    setShowForm(!showForm);
  };

  const pskills = LoadedJD["primary_skills"].map((skill, index) => {
    return <>{(index ? ", " : "") + skill[0]}</>;
  });

  const details = LoadedJD["additional_skills"].map((skill, index) => {
    return <>{(index ? ", " : "") + skill[0]}</>;
  });
  return (
    <main>
      <div class="mainBody">
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
              <span className="subTitle">{LoadedJD["Short Description"]}</span>
            </div>
          </div>
        </div>

        <div className="content padSmall">
          <div className="subTitle1">Job Description</div>
          {/* <div
            dangerouslySetInnerHTML={{ __html: LoadedJD["job description"] }}
          ></div> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${LoadedJD["job description"].replaceAll(
                "\n",
                "<br/>"
              )}`,
            }}
          ></div>
          <br />

          <div className="subTitle1">Primary Skills</div>
          {pskills.length > 0 ? <p> {pskills} </p> : <p> No Data Available</p>}
          <br />

          <div className="subTitle1">Additional Skills</div>

          {details.length > 0 ? (
            <p> {details} </p>
          ) : (
            <p> No Additional Skills Required </p>
          )}
          <br />

          {/* npm install @mui/material @emotion/react @emotion/styled */}

          <Button
            variant="contained"
            onClick={function () {
              login();
            }}
          >
            Apply
          </Button>

          {showForm && (
            <form>
              <br /> <br />
              <Form channelid={LoadedJD["channelid"]} />
            </form>
          )}
        </div>
        <br />
      </div>
      <div style={{ clear: "both" }}></div>
    </main>
  );
};

export default Search;
