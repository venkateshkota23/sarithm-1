import React from "react";
class Products extends React.Component {
  render() {
    return (
      <main>
        <div class="mainBody">
          <div class="bannerBlock4">
            <div
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                backgroundposition: "-0px -100px",
              }}
            >
              <img src={require("../images/Services.png")} />{" "}
            </div>
            <div class="bannerContent">
              <div class="content">
                <span class="pageTitle">Projects delivered to our clients</span>
                <br />
                <span class="subTitle">
                  We are passionate about building innovative <br />
                  and robust products
                </span>
              </div>
            </div>
          </div>

          <div class="content padSmall">
            <div class="proLogo">
              <div class="cLogo">
                <img src={require("../images/serverless.png")} width="100%" />
              </div>
              <div class="pDesc">
                <span class="subTitle1">
                  <b>Serverless Infrastructure: Applicant Tracking System</b>
                </span>
                <br></br>
                <p>
                  <b>https://sarithm.com</b> is a single page application, build using{" "}
                  <b>React JS</b> and hosted on AWS serverless Infrastrcture.
                  Leveraging AWS resources, such as <b> API Gateway</b>,{" "}
                  <b>Lambda</b>, <b>Conginto</b>, <b>RDS</b> and <b>s3bucket</b>
                  <ul>
                    <br></br>
                    <li>
                      While s3bucket host the static contents. Job portal (WIP)
                      is integrated with slack and authentication is handle by
                      Lambda and cognito
                    </li>
                    <li>
                      Each resume is processed by NLP based Lambda function,
                      findings are posted to slack. Internal Recuriting team
                      manually validate these findings and scheudle an internal
                      screening.
                    </li>
                    <li>
                      AWS Cognito, Lambda and API Gateway Authentication is
                      leveraged to secure <b>REST POST</b> endpoints.
                    </li>
                  </ul>
                </p>
                {/* <a
                  href="https://itunes.apple.com/us/app/minicash/id913387948?ls=1&mt=8"
                  target="_blank"
                >
                  <div class="productbutton">DOWNLOAD APP</div>
                </a>
                <a href="https://youtu.be/H1LwZWkDNZw" target="_blank">
                  <div class="productbutton">WATCH DEMO</div>
                </a> */}
              </div>
            </div>
            <br />
            <br />
            <br />

            <div class="proLogo">
              <div class="cLogo">
                <img
                  src={require("../images/AWS_Multi_Region_Network.png")}
                  width="100%"
                />
              </div>
              <div class="pDesc">
                <span class="subTitle1">
                  <b>
                    Multi-region AWS Network Infrastructure: Designed and
                    Developed under 400 hours
                  </b>
                </span>
                <br></br>
                <p>
                  We leveraged Terraform cloud to build AWS Network
                  Infrastructure, spread across
                  <b> us-east-1</b>, <b>us-west-2</b> and <b>eu-central-1</b>{" "}
                  regions. Three regions are connected via{" "}
                  <b>TransitGateway peerings</b>, and regulated traffic using{" "}
                  <b>TrasitGateway route-tables</b> dedicated to Accounts and
                  Regions.
                  <ul>
                    <br></br>
                    <li>
                      Created multiple GIT repositories to manage Infrastructure
                      code. Leveraged <b>git tags</b> to version control
                      terraform modules. Maintained dedicated GIT repo to manage
                      core resources such as TransitGateways, Peering
                      Attachments and TGW Route-Tables.
                    </li>
                    <li>
                      Configured multiple <b>terraform workspaces</b> to reuse
                      infrastructure code and build multiple workload
                      enviornments.
                    </li>
                    <li>
                      Build AWS kubernetes (EKS) clusters with configurable spot
                      and/or ondemand autoscaling groups
                    </li>
                    <li>
                      Build Harshicorp Vault for secret management, enabled{" "}
                      <b>kubernetes auth</b> for <b>pod </b> and{" "}
                      <b> namespace</b> level access controls
                    </li>
                    <li>
                      Build CI/CD pipeline framework for developer to build and
                      release new features faster.
                    </li>
                    <li>
                      Logging and monitoring for better Observability and quck
                      learn cycle.
                    </li>
                  </ul>
                </p>
                {/* <a
                  href="https://itunes.apple.com/us/app/minicash/id913387948?ls=1&mt=8"
                  target="_blank"
                >
                  <div class="productbutton">DOWNLOAD APP</div>
                </a>
                <a href="https://youtu.be/H1LwZWkDNZw" target="_blank">
                  <div class="productbutton">WATCH DEMO</div>
                </a> */}
              </div>
            </div>
            <br />
            <br />
            <br />

            <div class="proLogo">
              <div class="cLogo">
                <img
                  src={require("../images/product-minicash.png")}
                  width="100%"
                />
              </div>
              <div class="pDesc">
                <span class="subTitle1">
                  <b>
                    AWS Control Tower, SSO, EKS: Desinged and Developed under
                    200 hours
                  </b>
                </span>
                <br></br>
                <p>
                  Configure AWS Control Tower, external SSO with AzureAD, Build
                  and Configure EKS clusters, enable RBAC for SSO Users
                  <ul>
                    <br></br>

                    <li>
                      Configured Control Tower, Exernal SSO, AWS Orgnization
                      Units, Service Control Policies and Gaurd Rails
                    </li>
                    <li>Enabled EKS authentication for SSO users and groups</li>
                    <li>
                      Jenkins for CI, ArgoCD for CD, fluentd for logging etc.,
                    </li>
                  </ul>
                </p>
                {/* <a
                  href="https://itunes.apple.com/us/app/minicash/id913387948?ls=1&mt=8"
                  target="_blank"
                >
                  <div class="productbutton">DOWNLOAD APP</div>
                </a>
                <a href="https://youtu.be/kSLIGkzENtw" target="_blank">
                  <div class="productbutton">WATCH DEMO</div>
                </a> */}
              </div>
            </div>
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
export default Products;
