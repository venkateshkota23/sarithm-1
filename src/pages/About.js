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
                height: "155px",
                backgroundimage: "url(images/globe.png)",
                backgroundposition: "-0px -40px",
              }}
            ></div>
            <div className="bannerContent">
              <div className="content">
                <span className="pageTitle">ABOUT US</span>
                <br />
                <span className="subTitle">
                <b>sariT͟Həm!</b> where innovators meet the talent ... {" "}
                  <br />
                  Trust, Time, Talent and Innovation are essential to business.  Let's treat them with respect.
                </span>
              </div>
            </div>
          </div>
          <div className="content padSmall">
            <p>
              We are Technical recruiters! We take pride in building bridges between Innovators and Developers.
              Our Global Technical recruiting team works round the clock, while you and your team focus on developing solutions. {" "}
            </p>
            Trust, Time, Talent and Innovation are essential to business.  Let's treat them with respect.
            <p>
              {" "}
            </p>
            <p>
              We believe trust and open communication is the key to success in any
              business relationship. A deep understanding of the project, well
              defined requirements, and a solid tracking system lead to not only
              a successful result but also time saved. From the beginning we
              will ask the needed questions, and begin work immediately to
              increase efficiencies and to provide a quick turn around. 
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
