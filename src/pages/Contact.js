import React from "react";
class Contactus extends React.Component {
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
                <span className="pageTitle">CONTACT US</span>
                <br />
                <span className="subTitle">
                  Invest with us, we got projects waiting for you. <br />
                  Contact us for details....
                </span>
              </div>
            </div>
          </div>

          <div className="content padSmall">
            <div className="subTitle1">Address</div>
            <p> 390 Interlocken Crescent, Suite 350, Broomfield, CO 80021</p>
            <div className="subTitle1">E Mail</div>
            <p>info@sarithm.com</p>
            <div className="subTitle1">Contact Number</div>
            <p>+1-219-801-SARI(7274)</p>
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
export default Contactus;
