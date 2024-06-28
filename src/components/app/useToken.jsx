import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const now = new Date();
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(tokenString){
      if (now.getTime() > userToken.expiry) {
        localStorage.clear();
        window.location.href='/'
        return null;
      }
    }    
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    const now = new Date();
    const item = {
      token: userToken.token,
      expiry: now.getTime() + (12*3600000),
    }
    localStorage.setItem('token', JSON.stringify(item));
    setToken(userToken.token);
    return userToken.token;
  };

  return {
    token,
    setToken: saveToken
  }
}