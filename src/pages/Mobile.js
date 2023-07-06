import React from "react";
class Mobile extends React.Component {
  render() {
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
                backgroundimage: "url(images/Services.png)",
                backgroundposition: "-0px -100px",
              }}
            ></div>
            <div className="bannerContent">
              <div class="content">
                <span class="pageTitle">MOBILE TECHNOLOGY</span>
                <br />
                <span class="subTitle">
                  Our passion for software development truly goes hand in hand{" "}
                  <br />
                  with mobile technology...
                </span>
              </div>
            </div>
          </div>
          <div className="content padSmall">
            <p>
              Mobile Application development has quickly become an integral part
              of the IT environment, and we are helping to pave its way. Our
              passion for software development truly goes hand in hand with
              mobile technology. On the surface mobile application development
              may sound simple, since most applications are developed to perform
              one task; it is when resource restrictions are introduced that the
              development can take a complicated turn. This is where we come in.
              We are highly skilled at writing compact and concise code to
              resolve complex problems. We urge you to visit the AppleStore and
              download our First Finance Application, MiniCash. While it may be
              lite, it is packed with features.
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
export default Mobile;
