import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Button, Menu, Dropdown, Icon, Input, message, Select, Row, Col } from 'antd';
import './style';
import './style/Page.css';

class Footer extends Component {
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
            <footer className="_1lFQzVu2 _36JsqVnZ">
                <div className="eA-irOW7">
                    <div className="_3ZZLtp1b">
                        <div className="_2XLWuQOI">
                            <h3 className="_10a_LyY2">Envato Elements</h3>
                            <ul className="_2z0YU8f8">
                                <li><a className="_6uSXkluO" href="/free">Freebies</a></li>
                                <li><a className="_6uSXkluO" href="/license-terms">License</a></li>
                                <li><a className="_6uSXkluO" href="https://help.elements.envato.com/">Help</a></li>
                                <li><a className="_6uSXkluO" href="/user-terms">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div className="_2XLWuQOI">
                            <h3 className="_2b09fVk_">Meet Envato</h3>
                            <ul className="_32qKJhhe">
                                <li><a className="jkbD0m2w" href="https://envato.com/">About Envato</a></li>
                                <li><a className="jkbD0m2w" href="https://envato.com/#products">Explore our ecosystem</a></li>
                                <li><a className="jkbD0m2w" href="https://envato.com/careers/">Careers</a></li>
                            </ul>
                        </div>
                        <div className="_1F7zVJLx">
                            <div className="Z0PhSztO">
                                <span className="_37XRXLrv">Keep me up to date with content, updates, and offers from Envato</span>
                                <div className="_3sMj5KJz">
                                    <form className="_1mY86Q-R">
                                        <div className="z8cZ0BsR _2ppdM8lB" data-test-selector="free-items-email">
                                            <div className="_2ppdM8lB _3INBcbJ2">
                                                <input type="text" value="" name="email" placeholder="Email address" tabindex="0" className="_2EBxr-Hn" />
                                            </div>
                                        </div>
                                        <button className="signin-submit _1HEfRzPx _1gH9yuPJ" type="submit">
                                            <div className="BlP8mF3e"><span>
                                                <span className="_2jQU0lIp">Notify Me</span>
                                                <svg className="_397hreFv _1N6LKbXm" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 24" role="img" aria-label="Arrow right">
                                                    <path d="M1 24c-.3 0-.6-.1-.8-.4-.4-.4-.3-1.1.1-1.4L12.5 12 .4 1.8C0 1.4-.1.8.3.4c.4-.4 1-.5 1.4-.1l13 11c.2.2.4.5.4.8 0 .3-.1.6-.4.8l-13 11c-.2 0-.5.1-.7.1z">
                                                    </path></svg>
                                                <svg className="_397hreFv _9nK1MgGj" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Notify Me">
                                                    <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path>
                                                </svg>
                                            </span>
                                            </div>
                                        </button>
                                    </form>
                                </div></div>
                        </div></div>
                    <div className="cGznycW5">
                        <div className="_3Z9GZBJ4">
                            <ul className="_2eKwJ6qz">
                                <li className="_1FTOuAjY"><a className="Fe3b1ZaG" href="https://market.envato.com/">Envato Market</a></li>
                                <li className="_1FTOuAjY"><a className="Fe3b1ZaG" href="https://studio.envato.com/">Envato Studio</a></li>
                                <li className="_1FTOuAjY"><a className="Fe3b1ZaG" href="https://tutsplus.com/">Envato Tuts+</a></li>
                                <li className="_1FTOuAjY"><a className="Fe3b1ZaG" href="https://sites.envato.com/">Envato Sites</a></li>
                            </ul>
                            <div className="_2xPnbjvK">© 2017 Envato Elements Pty Ltd. Trademarks and brands are the property of their respective owners.</div></div><div className="_3or2tITc">
                            <ul className="_1BzYx64T">
                                <li className="_1R0C0ItG"><a className="_2CbQJanU" href="https://au.pinterest.com/envatoelements/">
                                    <svg className="_397hreFv _3hA-VPOH" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Pinterest"></svg>
                                </a>
                                </li>
                                <li className="_1R0C0ItG">
                                    <a className="_2CbQJanU" href="https://twitter.com/EnvatoElements">
                                        <svg className="_397hreFv _3hA-VPOH" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Twitter"></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
