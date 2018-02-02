"use strict";
import { message } from 'edspUI';
import Fetch from './Fetch';
import jwt_decode from 'jwt-decode';
import { Tools } from 'Utils';
import InvalidToken from './InvalidToken';
import { hashHistory, browserHistory } from 'react-router';

const url = '/test';
const API = {
    refreshToken: `${url}/tokenRefresh`
}
const tentid = localStorage.getItem('TENTID');//租户

function fetchs(mode, url, headers, params, callback) {
    if (mode == 'get') {
        Fetch.get(url, headers, params, callback);
    } else if (mode == 'post') {
        Fetch.post(url, headers, params, callback);
    } else if (mode == 'delete') {
        Fetch.delete(url, headers, params, callback);
    } else if (mode == 'put') {
        Fetch.put(url, headers, params, callback);
    }
}

//刷新token
function refreshTokens(mode, url, headers, params, callback) {
    //报文头
    const h = {
        "Content-type": "application/json",
    };
    const data = {
        input: {
            ftoken: localStorage.getItem('refresh_token'),
            tentid: tentid
        },
        sys: {
            prcscd: 'tokenRefresh'
        }
    }
    Fetch.post(API.refreshToken, h, data, (res) => {
        if (res.sys.status == 'S') {
            const access_token = res.output.utoken;
            const refresh_token = res.output.ftoken;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            fetchs(mode, url, headers, params, callback);
        } else {
            message.error(res.sys.erortx);
        }
    });
}

function initToken(mode, url, headers, params, callback, key) {
    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');
    if (access_token && refresh_token) {
        if (params && params.input) {
            params.input.utoken = access_token;
            params.input.tentid = tentid;
        }
        let min = InvalidToken(access_token, refresh_token);
        if (min.minutes < 20 && min.minutess >= 0) {
            refreshTokens(mode, url, headers, params, callback);
        } else if (min.minutess < 0) {
            localStorage.clear();
            hashHistory.push('/login');
        } else {
            fetchs(mode, url, headers, params, callback);
        }
    } else if (key == 'login') {
        fetchs(mode, url, headers, params, callback);
    } else {
        localStorage.clear();
        hashHistory.push('/login');
    }
}

class Token {
    //get mode request
    get(url, headers, params, callback) {
        initToken("get", url, headers, params, callback);
    }
    //post mode request
    post(url, headers, params, callback, key) {
        initToken("post", url, headers, params, callback, key);
    }
    //delete mode request
    delete(url, headers, params, callback) {
        initToken("delete", url, headers, params, callback);
    }
    //put mode request
    put(url, headers, params, callback) {
        initToken("put", url, headers, params, callback);
    }
    initTokens() {
        initToken();
    }

    request(url, type, headers, body, callback) {
        const header = {
            "Content-type": "application/json",
            "If-Modified-Since": 0
        };
        Object.assign(header, headers);
        Fetch.post(url, headers, params, callback);
    }
}

export default new Token();
