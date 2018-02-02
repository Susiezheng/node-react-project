"use strict"
import message from '../message';
import Fetch from 'isomorphic-fetch';
//The object will be converted into name = lulingniu & age = 40 format
function getParams(params) {
    let urlParams = '';
    let bodies = [];
    if (params) {
        for (let name in params) {
            if (typeof (params[name]) == 'undefined') {
                continue;
            } else if (typeof (params[name]) != 'object') {
                bodies.push(name + '=' + encodeURIComponent(params[name]));
            } else {
                bodies.push(name + '=' + encodeURIComponent(JSON.stringify(params[name])));
            }
        }
        urlParams = bodies.join('&');
    }
    return urlParams;
}

class BasicFetch {
    //fetch mode request
    request(url, type, headers, body, callback,five) {
        const self = this;
        let req = {
            method: type,
            headers: headers
        };
        if (type != 'get') {
            //文件上传格式
            if (five == "file") {
                const formData = new FormData();
                formData.append('version', body.version);
                formData.append('desc', body.desc);
                formData.append('pkgType', body.pkgType);
                body.fileList.forEach((file) => {
                    formData.append('file', file);
                });
                req.body = formData;
            } else {
                req.body = JSON.stringify(body);
            }
        } else {
            let urlParams = getParams(body);
            urlParams = urlParams ? '?' + urlParams : urlParams;
            url = url + urlParams;
        }
        Fetch(url, req).then(function (response) {
            callback && callback(response);
        }).catch(function (err) {
            message.error(`request errors：${err}`);
        });
    }
}

export default new BasicFetch();
