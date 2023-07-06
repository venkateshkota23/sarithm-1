import { Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
class ProjectList extends React.Component {
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
                <span class="pageTitle">PROJECTS</span>
                <br />
                {/* <span class="subTitle">
                  We believe that the infrastructure transparency leads to
                  higher <br />
                  efficiency in infrastructure management...
                </span> */}
              </div>
            </div>
          </div>
       <br />

          {/* <div
          style={{
               width: "1250px",
               height: "471px",
               borderRadius: "30px",
               display: 'flex',
               flexShrink: " 0",
               border: "1px solid #C3C3C3"

              }}> Project Names
          </div> */}

          <br />

          <div style={{
              borderRadius: "30px",
              border: "1px solid #C3C3C3",
              margin: "0% 5%",
              height: "auto"
              
             }}>
            {/* <h3>   Project 1</h3> */}
            <p style={{
              height:"24px",
              width:"146px",
              color: "#333",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "700",
              margin: "0% 5%"
              
             }}>   Project 1</p> <br />

            <div className="list-container"
            style={{
              display: 'flex',
              margin: "0% 5%"
             }}>
              <div className="list-item" >
                <h4>AWS</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>JAVA</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>MySql</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>React</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
            </div>
            
            <div style={{
              margin: "0% 5%"
             }}>
              <Link to={`/jobs/`}>
                <div class="card text-center">
                  <button type="button" class="btn btn-outline-primary">
                {" "}
                Learn More{" "}
              </button>
            </div>
          </Link></div><br />
          </div>
          <br/>


          <div style={{
              borderRadius: "30px",
              border: "1px solid #C3C3C3",
              margin: "0% 5%",
              height: "auto"
              
             }}>
            {/* <h3>   Project 1</h3> */}
            <p style={{
              height:"24px",
              width:"146px",
              color: "#333",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "700",
              margin: "0% 5%"
              
             }}>   Project 2</p> <br />

            <div className="list-container"
            style={{
              display: 'flex',
              margin: "0% 5%"
             }}>
              <div className="list-item" >
                <h4>AWS</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>JAVA</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>MySql</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
              <div>
                <h4>React</h4>
                <p>
                (to manage resources in cloud computing and cloud storage as well as security credentials)
                </p>
              </div>
            </div>
            
            <div style={{
              margin: "0% 5%"
             }}>
              <Link to={`/jobs/`}>
                <div class="card text-center">
                  <button type="button" class="btn btn-outline-primary">
                {" "}
                Learn More{" "}
              </button>
            </div>
          </Link></div><br />
          </div><br></br>
          

          <div className="content padSmall">
            <p>
              We believe that the infrastructure transparency leads to higher
              efficiency in infrastructure management. A solid understanding of
              our infrastructure in the beginning stages is a manageable task,
              though we often tend to lose this understanding as it begins to
              grow. This creates the need for a resource that allows us to keep
              track of all dynamic infrastructure changes. Our best practices
              will allow you to do just that. Your SysOps and DevOps can now
              keep track of all changes, addressing each one as it happens,
              which results in a secured, cost effective, and well managed
              infrastructure.
            </p>
            <div class="subTitle2">Terraform</div>
            <b>Write code, run plan and apply code to build infrastructure.</b>
            Terraform offer best in class Infrastructure as Code solution. We
            have <b>ready to use</b> modules for widely used resouces. It means
            much <b>faster, cost effective and efficient.</b>
            We love to solution small to medium size cloud optimization
            projects, excited to take tiny part in your cloud journey.{" "}
            <b>How do you know we are right fit?</b>
            [1] We are passionate about opportunities to work on Cloud. [2] We
            understand the importance to maintain balance between speed &
            safely. [3] We customize code to fit existing continuous delivery
            pipeline.
            <div class="subTitle2">Atlantis</div>
            terraform pull request automation! A cutomized solution ready to
            use!! terraform module to build Atlantis using ECS, SSM,
            assume_roles. It allows us to apply terraform modules to multiple
            accounts with required subtle variation using variables build on
            terraform workspaces. [1] Never apply terraform code without peer
            review. [2] Fully automated GitOps implementation
            <br />
            <br />
            <br></br>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}
export default ProjectList;
