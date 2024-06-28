export default function ConfigAxios() {

const APIFIXSO = import.meta.env.VITE_FIXSO_API_URL;

let userToken = () => {
    let getCurrentToken = localStorage.getItem('token');
    if(!getCurrentToken){
      localStorage.clear();
      return "";
    }
    let currectToken = JSON.parse(getCurrentToken);
    let now = new Date();
    if (now.getTime() > currectToken.expiry) {
      localStorage.clear();
      return "";
    }
    return currectToken.token;
};

let options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken()
    }
};

return {APIFIXSO, options};
}