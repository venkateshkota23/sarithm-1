import React from "react";
class Development extends React.Component {
  render() {
    return (
      <main>
        <div className="mainBody">
          <div className="bannerBlock4">
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
                <span class="pageTitle">SOFTWARE DEVELOPMENT</span>
                <br />
                <span class="subTitle">
                  We have strived to create algorithms that offer users
                  versatility while running easier, <br />
                  longer, and function seamlessly on any operating system....
                </span>
              </div>
            </div>
          </div>
          <div className="content padSmall">
            <p>
              At Sarithm we believe in the technology we create and strive to
              demonstrate to our customers with consistency that they can place
              their trust in its design, functionality, and integrity. Our
              applications are developed with one thing in mind, fulfilling
              client’s needs with minimal impact on system resources. We have
              strived to create algorithms that offer users versatility while
              running easier, longer, and function seamlessly on any operating
              system. For us this is a labor of love. Our passion for developing
              smart algorithms is clearly reflected in our applications and each
              one is easy on your system, yet highly effective.
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
export default Development;
