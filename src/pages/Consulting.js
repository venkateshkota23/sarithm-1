import React from "react";
class About extends React.Component {
  render() {
    return (
      <main>
        <div className="mainBody">
          <div className="bannerBlock1">
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
                <span class="pageTitle">IT CONSULTANCY</span>
                <br />
                <span class="subTitle">
                  We strive to provide highly engaged consultants who can offer{" "}
                  <br />
                  outstanding services to our clients...
                </span>
              </div>
            </div>
          </div>
          <div className="content padSmall">
            <p>
              We strive to provide highly engaged consultants who can offer
              outstanding services to our clients. As a former IT consultant, I
              understand the demands of the job and the common frustrations it
              can involve. It is our responsibility to eliminate the stigma
              surrounding IT Consultant work and create a positive environment
              where professionals are eager to come to work each day. If this is
              your goal as well, then join us.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}
export default About;
