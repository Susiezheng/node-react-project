import {
  en_US, zh_CN,
  en_US_User, zh_CN_User,
} from '../../language';
//语言包
const language = {
  'en_index': en_US,
  'zh_index': zh_CN,
  'en_user': en_US_User,
  'zh_user': zh_CN_User,
};
//是否是ie浏览器
function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  } else {
    return false;
  }
}
//获取当前浏览器的本地语言
function getLocal() {
  let language = '';
  if (isIE()) {
    language = navigator.userLanguage;
  } else {
    language = navigator.language;
  }
  return language;
}
//获取语言类型
let curLocale = localStorage.getItem('LANGUAGE_STYLE');
if (!curLocale) {
  //默认浏览器语言
  localStorage.setItem('LANGUAGE_STYLE', getLocal().slice(0, 2));
  curLocale = getLocal().slice(0, 2);
}

class Language {

  /**
   * 当前语言类型
   * @return {[type]} [description]
   */
  getCurLocale() {
    return curLocale;
  }
  /**
   * [getLanguage description]
   * @param  {[type]} modules [模块名]
   * @return {[type]}         [description]
   */
  getLanguage(modules) {
    return language[`${curLocale}_${modules}`];
  }
}

export default new Language();
