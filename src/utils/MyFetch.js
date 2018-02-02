"use strict";
import { message, Fetch } from 'edspUI';

import { Tools } from 'Utils';
import { debug } from 'util';

const defaultHeader = {
    "Content-type": "application/json",
    "If-Modified-Since": 0
};

class MyFetch {
    //get mode request
    get(url, header, params, callback) {
        Object.assign(header, defaultHeader);
        this.request(url, 'get', header, params, callback);
    }
    //post mode request
    post(url, header, params, callback) {
        Object.assign(header, defaultHeader);
        this.request(url, 'post', header, params, callback);
    }
    //delete mode request
    delete(url, header, params, callback) {
        Object.assign(header, defaultHeader);
        this.request(url, 'delete', header, params, callback);
    }
    //put mode request
    put(url, header, params, callback) {
        Object.assign(header, defaultHeader);
        this.request(url, 'put', header, params, callback);
    }
    //fetch mode request
    request(url, type, headers, body, callback) {
        Fetch.request(url, type, headers, body, res => {
            if (res.status == 200) {
                res.json().then((data) => {
                    callback && callback(data);
                });
            } else {
                message.error(`error：${response.status}`);
            }

        });
    }
}

export default new MyFetch();
