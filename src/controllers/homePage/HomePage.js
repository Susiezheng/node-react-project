"use strict"
import React, { Component } from 'react';
import { Language } from 'Utils';
import { hashHistory } from 'react-router';
import './style';
import demand from '../../images/cmdbCenter.png';
import defect from '../../images/workCenter.png';
import test from '../../images/adminCenter.png';
import report from '../../images/userCenter.png';
import manage from '../../images/logCenter.png';
//import _ from 'lodash';
//资源国际化
const i18n = Language.getLanguage('index');

export default class HomePage extends Component {
  render() {
    const modules = [
      { img: demand, imgAlt: i18n.demand, name: i18n.demand, desc: `${i18n.demand}${i18n.center}`, url: '/' },
      { img: test, imgAlt: i18n.test, name: i18n.test, desc: `${i18n.test}${i18n.center}`, url: '/' },
      { img: defect, imgAlt: i18n.defect, name: i18n.defect, desc: `${i18n.defect}${i18n.center}`, url: '/' },
      { img: manage, imgAlt: i18n.manage, name: i18n.manage, desc: `${i18n.manage}${i18n.center}`, url: '/' },
      { img: report, imgAlt: i18n.user, name: i18n.user, desc: `${i18n.user}${i18n.center}`, url: '/' }
    ];
    const list = modules.map((item, index) => {
      return (
        <li className="product_item" key={index} onClick={this.gotoLink.bind(this, item.url)}>
          <img src={item.img} alt={item.imgAlt} />
          <p className="pro-text">
            {item.name}
            <br />
            <span className="pro-de">{item.desc}</span>
          </p>
        </li>
      )
    });
   
    return (
      <div className="service">
        <ul className="product-box">
          {list}
        </ul>
      </div>
    );
  }

  gotoLink = url => {
    //跳转
    hashHistory.push(url);
    location.reload();
  }
}
