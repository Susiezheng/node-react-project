
"use strict";
import React, { Component } from 'react';
import './style';
//组件国际化
import en_US from '../language/en_US.json';
import zh_CN from '../language/zh_CN.json';
const language = {
  'en': en_US,
  'zh': zh_CN
};
//当前语言风格
const curLocale = localStorage.getItem('LANGUAGE_STYLE');
const i18n = language[curLocale];

function CharMode(num) {
    num.charCodeAt(); //返回Unicode 编码
    if (num >= 48 && num <= 57) { //数字
        return 1;
    } else if (num >= 65 && num <= 90) { //大写
        return 2;
    } else if (num >= 97 && num <= 122) { //小写
        return 4;
    } else { //特殊字符
        return 8;
    }
}

function keyStatus(v) {
    var num = 0;
    var reg = /\d/; //如果有数字
    if (v.length >= 6) { //如果密码小于6
        if (reg.test(v)) {
            num++;
        }
        reg = /[a-zA-Z]/; //如果有字母
        if (reg.test(v)) {
            num++;
        }
        reg = /[^0-9a-zA-Z]/; //如果有特殊字符
        if (reg.test(v)) {
            num++;
        }
    }
    return num;
}

class PwdStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value,
        });
    }

    render() {
        const { value } = this.state;
        let weak = '';
        let text = '';
        let ins = '';
        let power = '';
        if (value) {
            let key = keyStatus(value);
            switch (key) {
                case 1:
                    weak = 'pwd-weak';
                    text = i18n.weak;
                    break;
                case 2:
                    ins = 'pwd-in';
                    weak = 'pwd-weak';
                    text = i18n.in;
                    break;
                case 3:
                    ins = 'pwd-in';
                    weak = 'pwd-weak';
                    power = 'pwd-power';
                    text = i18n.power;
                    break;
                default:
                    break;
            }
        } else {
            weak = '';
            ins = '';
            power = '';
        }
        return (
            <span className='pwd-title'>{i18n.pwdStatus}
                <span className="pwd-content">
                    <span className={weak + ' pwd-size weak pwd-default'}></span>
                    <span className={ins + ' pwd-size ins pwd-default'}></span>
                    <span className={power + ' pwd-size power pwd-default'}></span>
                </span>
                {text}
            </span>
        );
    }

}
export default PwdStatus;