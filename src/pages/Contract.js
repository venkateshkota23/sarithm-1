import React from "react";
import { NavLink } from "react-router-dom";

class Contract extends React.Component {
  render() {
    return (
      <div>
        <div class="mainBody">
          <div class="bannerBlock1">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "550px",
                height: "150px",
              }}
            >
              <img src={require("../images/globe.png")} />{" "}
            </div>
            <div className="bannerContent">
              <div className="content">
                <span className="pageTitle"> One resource free for a month </span>
                <br />
                <span className="subTitle">
                Planning to finish project before end of the year, but no budget hire talent! May be we can help!! <br />
                Hire before the end of the year and get one resource free for month.
                </span>
              </div>
            </div>
          </div>

          <div className="content padSmall">
            <div className="subTitle1">How ? Agree to few simple conditions </div>
            <li>You must close the requisition before the end of the year </li>
            <li>            Sarithm must be direct vendor to place contractors or full-time employee at your organization</li>
            <li>            Your organization must be end-client, not consulting firm</li>
            <li>            You must sign one year contract agreement</li>
            <li>            We reserve  right to reject this offer, no questions asked</li>
            <div className="subTitle1">Post Job</div>
            <li> <NavLink to="/postjob" activeclassname="active">POST A JOB</NavLink> to engage our recruiter in real time and start receiving resumes</li>
            <li>Schedule screening call & Hire. </li>
            <li>Have resource work on your project free up to 168 hours</li>
            <div className="subTitle1">Questions</div>
            <p>+1-219-801-SARI(7274) <b>|</b> info@sarithm.com </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    );
  }
}
export default Contract;
