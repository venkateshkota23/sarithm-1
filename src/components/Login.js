import React from "react";
import { useSearchParams } from "react-router-dom";
import signInLinkedin from "../images/signInLinkedin.png";
import signInGoogle from "../images/signInGoogle.png";
import { loginWith } from "../helpers/loginHelper";
import { AUTHENTICATION_TYPES } from "../constants";

const Login = () => {
  const [searchParams] = useSearchParams();

  const onLinkedinSigninClick = async () => {
    const clientId = "797j1p5ncnp33pr6vj9rcbm5jg";
    const jobNumber = searchParams.get("jobNumber");
    const fromPage = searchParams.get("fromPage");
    loginWith({
      authentication_type: AUTHENTICATION_TYPES.LINKEDIN,
      jobNumber,
      fromPage,
      clientId,
    });
  };

  const onGoogleSigninClick = async () => {
    const jobNumber = searchParams.get("jobNumber");
    const fromPage = searchParams.get("fromPage");
    loginWith({
      authentication_type: AUTHENTICATION_TYPES.COGNITO,
      jobNumber,
      fromPage,
    });
  };
  return (
    <div className="login-page">
      <img
        className="linkedin-image"
        src={signInLinkedin}
        alt="Sign In with Linkedin"
        onClick={onLinkedinSigninClick}
      />
      <img
        className="google-image"
        src={signInGoogle}
        alt="Sign In with Google"
        onClick={onGoogleSigninClick}
      />
    </div>
  );
};

export default Login;
