import jwt_decode from 'jwt-decode';
import {Tools} from 'Utils';

function InvalidToken(access_token,refresh_token){
  let decoded = jwt_decode(access_token);
  let refreshToken = jwt_decode(refresh_token);
  let date=Tools.timeToUTC();
  let refreshTime = Tools.timeToTime(date,refreshToken.exp*1000);
  let time = Tools.timeToTime(date,decoded.exp*1000);
  let jwtLoginTime=Tools.timeToDate(decoded.exp);
  
  let timeDataM = time.match(/h(\S*)m/);
  let refreshTimeM = refreshTime.match(/h(\S*)m/);
  let timeDataH = time.match(/day(\S*)h/);
  let refreshTimeH = refreshTime.match(/day(\S*)h/);
  let timeDataD = time.match(/(\S*)day/);
  let refreshTimeD = refreshTime.match(/(\S*)day/);
  let day = 0;
  let days = 0;
  let hour = 0;
  let hours = 0;
  let minutes = 0;
  let minutess = 0;
  if(timeDataH){
    hour = timeDataH[1]*60;
  }
  if (timeDataD){
    day = timeDataD[1]*24*60;
  }
  if (timeDataM && timeDataM[1] >= 0){
    minutes = parseInt(timeDataM[1]) + parseInt(hour) + parseInt(day);
  }else {
    minutes = -1;
  }

  if(refreshTimeH){
    hours = refreshTimeH[1]*60;
  }
  if (refreshTimeD){
    days = refreshTimeD[1]*24*60;
  }
  if (refreshTimeM && refreshTimeM[1] >= 0){
    minutess = parseInt(refreshTimeM[1]) + parseInt(hours) + parseInt(days);
  }else {
    minutess = -1;
  }
  let obj = {
    minutes : minutes,
    minutess : minutess
  }
  return obj;

}
export default InvalidToken;
