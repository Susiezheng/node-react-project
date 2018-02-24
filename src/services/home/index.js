import { Fetch, MyFetch } from 'Utils';
import API from './API';

class userService {
  //本地登录
  getSearch(options, callback) {
    const header = {};
    MyFetch.get(API.getSearch, header, options, callback);
  }
  //本地登出
  postSearch(options, callback) {
    const header = {};
    MyFetch.post(API.getSearch, header, options, callback);
  }

  //登录
  postLogin(options, callback) {
    const header = {};
    MyFetch.post(API.postLogin, header, options, callback);
  }
  //注册
  postSignUp(options, callback) {
    const header = {};
    MyFetch.post(API.postSignUp, header, options, callback);
  }
  //修改密码
  updatePwd(options, callback) {
    const header = {};
    MyFetch.put(`${API.updatePwd}`, header, options, callback);
  }
  //删除用户
  deletePwd(options, callback) {
    const header = {};
    MyFetch.delete(`${API.deletePwd}`, header, options, callback);
  }
  //多条件查询
  onSearch(options, callback) {
    const header = {};
    MyFetch.post(`${API.onSearch}`, header, options, callback);
  }
}

export default new userService();
