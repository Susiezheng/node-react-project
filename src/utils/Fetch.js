"use strict";
import { message, Fetch } from 'edspUI';
import jwt_decode from 'jwt-decode';
import { hashHistory } from 'react-router';
import en_US from '../../language/en_US.json';
import zh_CN from '../../language/zh_CN.json';
const language = {
    'en': en_US,
    'zh': zh_CN
};
//当前语言风格
const curLocale = localStorage.getItem('LANGUAGE_STYLE');
//对字符串国际化
const i18n = language[curLocale];

class EdspFetch {
    //get mode request
    get(url, headers, params, callback) {
        this.request(url, 'get', headers, params, callback);
    }
    //post mode request
    post(url, headers, params, callback, header) {
        this.request(url, 'post', headers, params, callback);
    }
    //delete mode request
    delete(url, headers, params, callback, header) {
        this.request(url, 'delete', headers, params, callback);
    }
    //put mode request
    put(url, headers, params, callback, header) {
        this.request(url, 'put', headers, params, callback);
    }
    //fetch mode request
    request(url, type, headers, body, callback) {
        Fetch.request(url, type, headers, body, function (response) {
            if (response.status !== 200) {
                let errorMessage = '';
                if (response.status == 401) {
                    localStorage.clear();
                    localStorage.removeItem('LOGIN_HASH');
                    let hash = hashHistory.getCurrentLocation().pathname;
                    let hashs = hash.slice(1, hash.length);
                    localStorage.setItem('LOGIN_HASH', hashs);
                    hashHistory.push('/login');
                    return;
                } else if (response.status == 422) {
                    localStorage.clear();
                    hashHistory.push('/login');
                    return;
                } else if (response.status == 500) {
                    localStorage.clear();
                    hashHistory.push('/login');
                    return;
                } else if (response.status == 403) {
                    localStorage.clear();
                    hashHistory.push('/login');
                    return;
                } else {
                    errorMessage = `error：${response.status}`;
                }
                message.error(errorMessage);
                return;
            }
            response.json().then(function (data) {
                data ? callback && callback(data) : '';
            });
        });
    }
}

export default new EdspFetch();
