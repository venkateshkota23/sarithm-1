import { AUTHENTICATION_TYPES } from "../constants";
import { LOGIN_END_POINT_PREFIX } from "../constants/api.constants";

export const loginWith = async ({
  authentication_type,
  jobNumber,
  fromPage,
  clientId,
}) => {
  const scope = "email+openid";
  const responseType = "code";
  const domainUrl = window.location.origin;
  const redirectUri = domainUrl;
  const stateWithExtraData = `${authentication_type},${fromPage},${jobNumber}`;

  const response = await fetch(
    `${LOGIN_END_POINT_PREFIX}/login?` +
      `scope=${scope}&` +
      `response_type=${responseType}&` +
      `client_id=${
        authentication_type === AUTHENTICATION_TYPES.COGNITO ? 0 : clientId
      }&` +
      `redirect_uri=${redirectUri}&` +
      `state=${stateWithExtraData}&type=${authentication_type.toLowerCase()}`,
    {
      redirect: "manual",
      mode: "cors",
    }
  );

  window.location.replace(response.url);
};

export const isTokenValid = () => {
  const access_token = localStorage.getItem("access_token");
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");

  if (
    !access_token ||
    !email ||
    !username ||
    email === "undefined" ||
    username === "undefined"
  ) {
    localStorage.clear();
    return false;
  }

  const BUFFER_TIME = 5000;
  const expires_at = localStorage.getItem("expires_at");
  if (!expires_at) {
    localStorage.clear();
    return false;
  }
  if (expires_at < Date.now() + BUFFER_TIME) {
    localStorage.clear();
    return false;
  }
  return true;
};

export const getAuthorizationToken = () => {
  return `Bearer ${localStorage.getItem("authentication_type") || ""} ${
    localStorage.getItem("access_token") || ""
  }`;
};
