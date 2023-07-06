import React, { useEffect } from "react";

//import ControlledCasousel from "./ControlledCarousel";
import CarouselJson from "../components/CarouselJson";
import { AUTHENTICATION_TYPES } from "../constants";
import { GET_ACCESS_TOKEN_END_POINT_PREFIX } from "../constants/api.constants";

const Home = () => {
  useEffect(() => {
    const fetchAccessTokenAndRedirect = async ({
      authentication_type,
      code,
      fromPage,
      jobNumber,
    }) => {
      try {
        const response = await fetch(
          `${GET_ACCESS_TOKEN_END_POINT_PREFIX}/login?type=${authentication_type.toLowerCase()}&code=${code}`
        );
        const JSONData = await response.json();
        console.log(
          "response fetched in async await",
          JSON.stringify(JSONData)
        );
        let email;
        let userName;
        if (authentication_type === AUTHENTICATION_TYPES.LINKEDIN) {
          email = JSONData.elements[0]["handle~"]["emailAddress"];
          userName =
            `${JSONData.localizedFirstName} ${JSONData.localizedLastName}`.trim();
        } else {
          email = JSONData.email;
          userName = JSONData.username;
        }

        if (JSONData.access_token) {
          localStorage.setItem("access_token", JSONData.access_token);
          localStorage.setItem("expires_in", JSONData.expires_in);
          localStorage.setItem("authentication_type", authentication_type);
          localStorage.setItem(
            "expires_at",
            JSONData.expires_in * 1000 + Date.now()
          );
          localStorage.setItem("email", email);
          localStorage.setItem("username", userName);
        }

        const domainUrl = window.location.origin;

        console.log("redirecting to submit job", fromPage);
        if (fromPage === "submitjob") {
          window.location.href =
            domainUrl + `/#/submit?jobNumber=${jobNumber}&fromPage=submitjob`;
        } else if (fromPage === "postjob") {
          window.location.href = domainUrl + `/#/postjob?fromPage=postjob`;
        } else {
          window.location.href = domainUrl + "/#" + queryString;
        }
      } catch (err) {}
    };

    // call api or anything
    let queryString = window.location.search;
    // console.log(queryString);
    const url = window.location.href;
    const RqueryString = url.split("?");
    const appendString = "?" + RqueryString[1];
    const urlParams = new URLSearchParams(appendString);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (window.location.href.includes("code")) {
      console.log("has code and fetching access token");
      const [authentication_type, fromPage, jobNumber] = state.split(",") || [
        "",
        "",
        "",
      ];
      fetchAccessTokenAndRedirect({
        authentication_type,
        code,
        fromPage,
        jobNumber,
      });
    }
  }, []);

  return (
    <body ng-app="docsTemplateUrlDirective">
      <div className="page">
        <div className="mainBody">
          <br />
          <div className="aboutBlock">
            <CarouselJson />
          </div>

          <div className="aboutBlock">
            <div className="abtContent">
              <div className="content padLarge" align="center">
                <span
                  className="homeTitle"
                  style={{ color: "rgb(23, 134, 161)" }}
                >
                  Digital Transformation and Core Technologies
                </span>
                <div className="cta">
                  <div>
                    <img src={require("../images/cta-12.png")} alt="" />
                    <br />
                    Change is not easy. Encourage teams by training with core
                    skills. Be the seed of <b>Lean Agile DevOps</b> culture in
                    your organization.{" "}
                  </div>
                </div>
                <div className="cta">
                  <div>
                    <img src={require("../images/cta-11.png")} alt="" />
                    <br />
                    Avoid configuration drift between development and production
                    environments using{" "}
                    <a href="https://www.terraform.io">
                      Infrastructure as code
                    </a>
                    . i.e., Better and fast cycles <b>Build Measure Learn</b>{" "}
                  </div>
                </div>
                <div className="cta">
                  <div>
                    <img src={require("../images/cta-13.png")} alt="" />
                    <br />
                    Application packed with new features in a{" "}
                    <a href="https://docker.io">Docker</a> container with its
                    environment. Test, ship and deploy an immutable docker
                    image. Scale up in seconds for better user experience!{" "}
                  </div>
                </div>
                <div className="cta">
                  <div>
                    <img src={require("../images/cta-14.png")} alt="" />
                    <br />
                    Develop loosely coupled architecture to release each feature
                    or set of features much faster. Deploy and orchestrate
                    microservices using{" "}
                    <a href="https://kubernetes.io">kubernetes</a>{" "}
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="productsBlock">
            {/* <div className="proContent">
            <div className="contentHome padLarge" align="center">
              <div className="contentLeft">
                <span className="homeTitle" style={{ color: `obj.#fff` }}>
                  Our Clients
                </span>
                <div className="customers">
                  <div className="custLogo">
                    <div className="cLogo">
                      <img src={require("../images/hpe-logo.png")} alt="" />
                    </div>
                  </div>
                  <div className="custLogo">
                    <div className="cLogo">
                      <img
                        src={require("../images/stem-logo.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="custLogo">
                    <div className="cLogo">
                      <img
                        src={require("../images/volvo-logo.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            {/* <div style={{ clear: "both", height: "50px" }}></div> */}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
