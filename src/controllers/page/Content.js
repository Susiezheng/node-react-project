import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Button, Menu, Dropdown, Icon, Input, message, Select, Row, Col } from 'antd';
import './style';
import './style/Page.css';
import ListSearch from './ListSearch';
import { IndexService } from 'Service';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      down_search_css: 'qI5MyRGq',
      showSearch: true
    };
  }
  componentWillMount() {}
  handleShowSearch = () => {
    const { showSearch } = this.state;
    this.setState({ showSearch: !showSearch });
  };
  handleOnLogin = () => {
    let data = {
      email: '123@qq.com',
      password: '123123'
    };
    IndexService.postLogin(data, res => {
      console.log(res, 'www');
    });
  };
  handleOnSign = () => {
    let data = {
      email: '345zsq@qq.com',
      num: 3,
      password: '123123',
      confirmPassword: '123123'
    };
    IndexService.postSignUp(data, res => {
      console.log(res, '123');
    });
  };
  handleOnUpdatePwd = () => {
    let data = {
      id: '5a7951a8402bcd2ac0aab35d',
      password: '121122',
      confirmPassword: '121122'
    };
    IndexService.updatePwd(data, res => {
      console.log(res, '123');
    });
  };
  handleOnDelete = () => {
    let data = {
      id: '5a7945c309b5ee278c19804e'
    };
    IndexService.deletePwd(data, res => {
      console.log(res, '123');
    });
  };
  handleOnSearch = () => {
    let data = {
      email: '1'
    };
    IndexService.onSearch(data, res => {
      console.log(res, '123');
    });
  };
  render() {
    const { showSearch } = this.state;
    const card = {
      showSearch
    };
    return (
      <main className="nraeUgP6">
        <div>
          <div>
            <header className="_3f5mhRZQ _3p9U7ZVc">
              <div className="_3tIXR9sb">
                <div className="-cdee6oO">
                  <div className="_2ZFJEoSv">
                    <h1 className="_3UJSbY6Y">
                      <span>
                        <span className="_3bSLnb1b">428 </span>
                        WordPress themes and plugins{' '}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </header>
            <div data-test-selector="page-items-wordpress">
              <div className="_1NpNQefo">
                <div className="_3Di3mhyW">
                  <button className="wC2U3Vk_ _2sa-Rw_S _2PEvT-2e hS5e6774" onClick={this.handleShowSearch}>
                    <div className="_1kJ4ahJA">
                      <svg className="_397hreFv _1ck_EJb-" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" role="img" aria-label="hide filters">
                        <path d="M23.5 11.5h-10v-10c0-.6-.4-1-1-1s-1 .4-1 1v10h-10c-.6 0-1 .4-1 1s.4 1 1 1h10v10c0 .6.4 1 1 1s1-.4 1-1v-10h10c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="_1MkfB3BW">{showSearch ? 'hide filters' : 'show filters'}</span>
                    </div>
                  </button>
                </div>
                <div className="gz1DY7Jw" role="navigation" aria-label="Sort results">
                  <div className="_1wJGXxzE">
                    <a className="_3dt6pmM6 _3XzR5Wpw" onClick={this.handleOnSign}>
                      <span className="_1BNdmLFe">注册</span>
                    </a>
                    <a className="_3dt6pmM6" onClick={this.handleOnLogin}>
                      <span className="_1BNdmLFe">登录</span>
                    </a>
                    <a className="_3dt6pmM6 _3XzR5Wpw" onClick={this.handleOnDelete}>
                      <span className="_1BNdmLFe">删除用户</span>
                    </a>
                    <a className="_3dt6pmM6" onClick={this.handleOnUpdatePwd}>
                      <span className="_1BNdmLFe">修改密码</span>
                    </a>
                    <a className="_3dt6pmM6" onClick={this.handleOnSearch}>
                      <span className="_1BNdmLFe">多条件查询</span>
                    </a>
                    <a className="_3dt6pmM6" onClick={this.handleOnSearch}>
                      <span className="_1BNdmLFe">多条件查询</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="_1pmEle8-">
                                <div className="_3_OsM9hZ"><button className="wC2U3Vk_ _2H99HOQI _2PEvT-2e"><div className="_1kJ4ahJA">
                                    <svg className="_397hreFv _1ck_EJb-" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" role="img" aria-label="show filters">
                                        <path d="M23.5 11.5h-10v-10c0-.6-.4-1-1-1s-1 .4-1 1v10h-10c-.6 0-1 .4-1 1s.4 1 1 1h10v10c0 .6.4 1 1 1s1-.4 1-1v-10h10c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
                                    </svg>
                                    <span className="_1MkfB3BW">show filters</span>
                                </div></button></div>
                                <div className="_1d87Spmh">
                                    <div className="_3t05Z5ys _2R-gzWp6">
                                        <select className="_1rk3yDcO">
                                            <option value="popular">Popular</option>
                                            <option value="latest">New</option>
                                        </select>
                                        <svg className="_397hreFv _3xIqNLNB" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15" role="img" aria-label="Arrow down">
                                            <path d="M12 15c-.3 0-.6-.1-.8-.4l-11-13C-.2 1.2-.1.5.3.2c.4-.4 1.1-.3 1.4.1L12 12.5 22.2.4c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-11 13c-.1.2-.4.3-.7.3z"></path>
                                        </svg></div>
                                    <div className="_1wJGXxzE _2zw5f4kS"><a className="_3dt6pmM6 _3XzR5Wpw" href="/wordpress/sort-by-popular">
                                        <span className="_1BNdmLFe">Popular</span></a><a className="_3dt6pmM6" href="/wordpress/sort-by-latest"><span className="_1BNdmLFe">New</span></a></div>
                                </div>
                            </div> */}
              <ListSearch {...card} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Content;
