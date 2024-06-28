
import { useNavigate } from 'react-router-dom';
import GetCurrentToken from './GetCurrentToken';

export default function ValidView(ViewAccess) {
    const navigate = useNavigate();
    let allowWrite = (false);
    let allowView = (false);
    
        let nameView = false;
    
        const {userToken, userTokenData} = GetCurrentToken();
        if(!userToken){
          navigate("/");
          return {allowWrite, allowView, userToken};
        }
    
        const userPermits = userTokenData.permissions;
        const filtered = userPermits.filter(validItem => validItem.includes(ViewAccess)); 
     
        if(filtered.length > 0){
          nameView = filtered[0].split('_');
          allowView=(true);
        } else {
          navigate("/");
        }
    
        if(nameView[1] === 'RW'){
          allowWrite = (true);
        } 

      return {allowWrite, allowView, userToken, userTokenData};
}

