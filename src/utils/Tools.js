/***
**工具类
*/
import moment from 'moment';

//国际化组件
import en_US from '../../language/en_US.json';
import zh_CN from '../../language/zh_CN.json';
const language = {
  'en':en_US,
  'zh':zh_CN
};
//当前语言风格
const curLocale = localStorage.getItem('LANGUAGE_STYLE');
//对字符串国际化
const i18n = language[curLocale];

class Tools {

    /**
     *返回时间
     */
   timeToDate(time){
      if(!time){return;}
      return moment(time).format('YYYY-MM-DD HH:mm:ss');
    }
    /**
     * [toDate 返回日期]
     */
    toDate(date){
      if(!date){return;}
      return moment(date).format('YYYY-MM-DD');
    }
    timeToUTC(){
      const date = new Date();
      const y =  date.getUTCFullYear();
      const m = date.getUTCMonth() ;
      const d = date.getUTCDate();
      const h= date.getUTCHours();
      const M = date.getUTCMinutes();
      const s = date.getUTCSeconds();
      return Date.UTC(y,m,d,h,M,s);
    }
     //获取两个时间的时间差异
     timeToTime(dateOne, dateTwo) {
        let totalTime;
        let total;
        if (dateTwo && dateOne) {
            total = dateTwo - dateOne;
        }

        //	day
        let days = Math.floor(total / (24 * 3600 * 1000))
        //	hour
        //	计算天之后剩下的毫秒数
        let leave1 = total % (24 * 3600 * 1000)
        let hours = Math.floor(leave1 / (3600 * 1000))
        //  min
        //	计算小时数后剩余的毫秒数
        let leave2 = leave1 % (3600 * 1000)
        let minutes = Math.floor(leave2 / (60 * 1000))
        //	second
        //	计算分钟数后剩余的毫秒数
        let leave3 = leave2 % (60 * 1000)
        let seconds = Math.round(leave3 / 1000)
        //	去掉第一个0
        if (days == 0 && hours != 0) {
            totalTime = 'day' + hours + "h" + minutes + "m" + seconds + "s";
        } else if (days == 0 && hours == 0 && minutes != 0) {
            totalTime = 'h' + minutes + "m" + seconds + "s";
        } else if (days == 0 && hours == 0 && minutes == 0) {
            totalTime = seconds + "s";
        } else {
            totalTime = days + 'day' + hours + "h" + minutes + "m" + seconds + "s";
        }
        return totalTime;
    }

    /***
    *深度克隆
    */
    deepClone(obj){
        let result;
        //获取数据类型
        const type = this.isType(obj);
        if(type === "Object"){
            result={};
        }else if(type === "Array"){
            result=[];
        }else{
            return obj;
        }

        for(let key in obj){
            let copy = obj[key];
            if(this.isType(copy) === "Object"){
                result[key] = this.deepClone(copy);//递归调用
            }else if(this.isType(copy) === "Array"){
                result[key] = this.deepClone(copy);
            }else{
                result[key] = obj[key];
            }
        }
        return result;
    }
    //长度校验
    verification(value){
      if (value && value.length > 20) {
        return i18n.lengthTwenty;
      }else{
         return true;
      }
    }
    //长度校验
    thousandVerification(value){
      if (value && value.length > 1000) {
        return i18n.lengthThousand;
      }else{
         return true;
      }
    }
    //长度校验
    hundredVerification(value){
      if (value && value.length > 100) {
        return i18n.lengthHundred;
      }else{
         return true;
      }
    }
    //长度校验
    twoHundredVerification(value){
      if (value && value.length > 200) {
        return i18n.lengthTwoHundred;
      }else{
         return true;
      }
    }

    /**
     *返回数据类型
     */
    isType(o){
        return Object.prototype.toString.call(o).slice(8,-1);
    }
     //判断对象是否相等
     determineObject( x, y ){
       if ( x === y ) {return true;}
       if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) {return false;}
       if ( x.constructor !== y.constructor ) {return false;}
       for ( var p in x ) {
         if ( x.hasOwnProperty( p ) ) {
            if ( ! y.hasOwnProperty( p ) ) { return false; }
            if ( x[ p ] === y[ p ] ) { continue; }
            if ( typeof( x[ p ] ) !== "object" ) { return false; }
            if ( ! Object.equals( x[ p ], y[ p ] ) ) { return false; }
          }
       }
       for ( p in y ) {
          if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) { return false; }
       }
       return true;
     }
}
export default new Tools();
