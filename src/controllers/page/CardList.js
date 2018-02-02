import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Button, Menu, Dropdown, Icon, Input, message, Select, Row, Col } from 'antd';
import './style';
import './style/Page.css';
import one from '../../images/1.jpeg';
import two from '../../images/2.jpeg';
import three from '../../images/3.jpeg';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down_search_css: 'qI5MyRGq',
        };
    }
    componentWillMount() {
    }
    render() {
        return (
            <div className="_2IFf973j">
                <div>
                    <div className="_2j6LHmb3">
                        <ul className="_30Rd51J3">
                            <li className="_2UYFQL0B _308V_S2b">
                                <div className="_2FtfVsVh" data-test-selector="item-card">
                                    <a title="Busis — Business &amp; Corporate WordPress Theme" className="_24B94IV3" href=''></a>
                                    <div className="_3hs3-yZL _33fxexcC">
                                        <div className="Mwvoxp0R" style={{ paddingTop: '66.6667%' }}></div>
                                        <div>
                                            <img className="_1nju8U1q _2In5n9wy img_card" src={one} />
                                        </div>
                                    </div>
                                    <div className="_2dn0nZc9">
                                        <div className="_26cCxdUU">
                                            <div className="_3XsqW5yR"><span>Busis — Business &amp; Corporate WordPress Theme</span></div>
                                            <div className="QzfoJIKa">By <a href="/user/torbara">torbara </a></div></div>
                                        <button className="_2ZiaF_L9 _38HuCGJV">
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="_2UYFQL0B _308V_S2b">
                                <div className="_2FtfVsVh" data-test-selector="item-card">
                                    <a title="Busis — Business &amp; Corporate WordPress Theme" className="_24B94IV3" href=''></a>
                                    <div className="_3hs3-yZL _33fxexcC">
                                        <div className="Mwvoxp0R" style={{ paddingTop: '66.6667%' }}></div>
                                        <div>
                                            <img className="_1nju8U1q _2In5n9wy img_card" src={three} />
                                        </div>
                                    </div>
                                    <div className="_2dn0nZc9">
                                        <div className="_26cCxdUU">
                                            <div className="_3XsqW5yR"><span>Busis — Business &amp; Corporate WordPress Theme</span></div>
                                            <div className="QzfoJIKa">By <a href="/user/torbara">torbara </a></div></div>
                                        <button className="_2ZiaF_L9 _38HuCGJV">
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="_2UYFQL0B _308V_S2b">
                                <div className="_2FtfVsVh" data-test-selector="item-card">
                                    <a title="Busis — Business &amp; Corporate WordPress Theme" className="_24B94IV3" href=''></a>
                                    <div className="_3hs3-yZL _33fxexcC">
                                        <div className="Mwvoxp0R" style={{ paddingTop: '66.6667%' }}></div>
                                        <div>
                                            <img className="_1nju8U1q _2In5n9wy img_card" src={two} />
                                        </div>
                                    </div>
                                    <div className="_2dn0nZc9">
                                        <div className="_26cCxdUU">
                                            <div className="_3XsqW5yR"><span>Busis — Business &amp; Corporate WordPress Theme</span></div>
                                            <div className="QzfoJIKa">By <a href="/user/torbara">torbara </a></div></div>
                                        <button className="_2ZiaF_L9 _38HuCGJV">
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardList;
