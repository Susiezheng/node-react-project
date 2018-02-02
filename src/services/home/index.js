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
}

export default new userService();
