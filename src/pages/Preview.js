import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

function Preview() {
  const postJobDetails = useSelector((state) => state.postJobDetails);
  const {
    jobTitle,
    shortDesciption,
    jobDescription,
    primarySkill,
    AdditionalSkills,
    location,
    onsiteLocation,
  } = postJobDetails;

  const navigate = useNavigate();
  let { jobId } = useParams();

  return (
    <>
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
              <span className="pageTitle">{jobTitle}</span>
              <br />
              <span className="subTitle">{shortDesciption}</span>
            </div>
          </div>
        </div>

        <div className="content padSmall">
          <div className="subTitle1">Job Description</div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${jobDescription.replaceAll("\n", "<br/>")}`,
            }}
          ></div>
          <br />
          <div className="subTitle1">Primary Skills</div>
          {/* {pskills.length > 0 ? <p> {pskills} </p> : <p> No Data Available</p>} */}
          {primarySkill.label}
          <br />

          <div className="subTitle1">Additional Skills</div>

          {AdditionalSkills}
          <br />
          <div className="subTitle1">Location</div>

          {location}

          <br />
          {location === "onsite" && (
            <span>
              <div className="subTitle1">Onsite location</div>
              {onsiteLocation}
            </span>
          )}

          <br />
          <br />

          <Button
            variant="contained"
            onClick={() => {
              navigate(jobId ? `/edit/${jobId}` : `/postjob`);
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default Preview;
