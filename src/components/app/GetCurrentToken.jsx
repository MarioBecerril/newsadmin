import jwt_decode from "jwt-decode";

export default function GetCurrentToken() {

  let userToken = "";
  let userTokenData = "";
  const getCurrentToken = localStorage.getItem('token');

  if (!getCurrentToken) {
    localStorage.clear();
    window.location.href = '/'
    return { userToken, userTokenData };
  } else {
    let currectToken = JSON.parse(getCurrentToken);
    const now = new Date();
    if (now.getTime() > currectToken.expiry) {
      localStorage.clear();
      window.location.href = '/'
      return { userToken, userTokenData };
    }
    userToken = currectToken.token;
    userTokenData = jwt_decode(userToken);
    return { userToken, userTokenData };
  }
}