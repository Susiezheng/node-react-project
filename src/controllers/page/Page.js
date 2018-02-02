import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Button, Menu, Dropdown, Icon, Input, message, Select, Row, Col } from 'antd';
import './style';
import './style/Page.css';
import Content from './Content';
import Footer from './Footer';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down_search_css: 'qI5MyRGq',
        };
    }
    componentWillMount() {

    }
    handleDownMenu = () => {
        const { down_search_css } = this.state;
        if (down_search_css == 'qI5MyRGq') {
            this.setState({ down_search_css: 'qI5MyRGq _269K0W5g' })
        } else {
            this.setState({ down_search_css: 'qI5MyRGq' })
        }
    }
    hanleMouseOut = (e) => {
        this.setState({ down_search_css: 'qI5MyRGq' })
    }
    hanleMouseOver = (e) => {
        this.setState({ down_search_css: 'qI5MyRGq _269K0W5g' })
    }
    render() {
        const { down_search_css } = this.state;
        return (
            <div className="SrMMBuFa">
                <nav className="_1amOEvoi">
                    <div className="_2syZ5Lmo">
                        <div className="_1Z4hVNAN">
                            <a className="_2E7fl9eW" href="/">
                            </a></div>
                        <div className="_1oc6ULAo">
                            <div className="_3B9Qjkt9">
                                <a className="_1MEjBSpd" href="/all-items">Browse</a></div>
                            <div className="_2TVS9dk3">
                                <div className="vo2zpUY4">
                                    <span className="_2XqWsW6g">Browse items</span>
                                    <div className="_3ok-YihH">
                                        <ul className="_3Y8Ogjru">
                                            <li className="_1BaMfKX4">
                                                <a className="_2AtoUIfS" href="/all-items">All items </a></li>
                                            <li className="_1BaMfKX4">
                                                <a className="_2AtoUIfS" href="/wordpress">WordPress<span className="_23rfEdWb _2z0VnGyS _1eH36uVn _21xgEZ1h">
                                                    <span className="_23XlgirZ _3t9Lw-rT">New</span></span> </a>
                                                <div className="_3qAIG2Ww _3AulicOj">
                                                    <span className="SdvCfKae">WordPress</span>
                                                    <ul className="_3vfrqt3J">
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/wordpress/themes">Themes</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/wordpress/plugins">Plugins</a></li>
                                                    </ul><a className="_3fEK4i_z" href="/wordpress">View all WordPress</a>
                                                </div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/photos">Photos </a></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/graphics">Graphics </a>
                                                <div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">Graphics</span>
                                                    <ul className="_3vfrqt3J">
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/backgrounds">Backgrounds</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/textures">Textures</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/vectors">Vectors</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/patterns">Patterns</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/icons">Icons</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/objects">Objects</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphics/illustrations">Illustrations</a></li>
                                                    </ul><a className="_3fEK4i_z" href="/graphics">View all Graphics</a></div></li><li className="_1BaMfKX4">
                                                <a className="_2AtoUIfS" href="/add-ons">Add-ons </a><div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">Add-ons</span>
                                                    <ul className="_3vfrqt3J">
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/add-ons/actions-and-presets">Actions and Presets</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/add-ons/brushes">Brushes</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/add-ons/layer-styles">Layer Styles</a></li></ul>
                                                    <a className="_3fEK4i_z" href="/add-ons">View all Add-ons</a></div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/fonts">Fonts </a>
                                                <div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">Fonts</span>
                                                    <ul className="_3vfrqt3J"><li className="_1RSlJJO-"><a className="cKdSPeBX" href="/fonts/serif">Serif</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/fonts/sans-serif">Sans-Serif</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/fonts/script-and-handwritten">Script and Handwritten</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/fonts/decorative">Decorative</a></li></ul>
                                                    <a className="_3fEK4i_z" href="/fonts">View all Fonts</a></div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/graphic-templates">Graphic Templates </a>
                                                <div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">Graphic Templates</span>
                                                    <ul className="_3vfrqt3J"><li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/print-templates">Print Templates</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/product-mockups">Product Mockups</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/websites">Websites</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/ux-and-ui-kits">UX and UI Kits</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/infographics">Infographics</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/logos">Logos</a></li>
                                                        <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/graphic-templates/scene-generators">Scene Generators</a></li></ul>
                                                    <a className="_3fEK4i_z" href="/graphic-templates">View all Graphic Templates</a></div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/presentation-templates">Presentation Templates </a></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/web-templates">Web Templates </a>
                                                <div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">Web Templates</span><ul className="_3vfrqt3J">
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/web-templates/admin-templates">Admin Templates</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/web-templates/email-templates">Email Templates</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/web-templates/site-templates">Site Templates</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/web-templates/landing-page-templates">Landing Page Templates</a></li></ul>
                                                    <a className="_3fEK4i_z" href="/web-templates">View all Web Templates</a></div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/cms-templates">CMS Templates </a>
                                                <div className="_3qAIG2Ww _3AulicOj"><span className="SdvCfKae">CMS Templates</span><ul className="_3vfrqt3J">
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/drupal">Drupal</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/instapage">Instapage</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/joomla">Joomla</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/magento">Magento</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/muse">Muse</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/opencart">OpenCart</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/prestashop">PrestaShop</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/shopify">Shopify</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/unbounce">Unbounce</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/ghost">Ghost</a></li>
                                                    <li className="_1RSlJJO-"><a className="cKdSPeBX" href="/cms-templates/tumblr">Tumblr</a></li></ul>
                                                    <a className="_3fEK4i_z" href="/cms-templates">View all CMS Templates</a></div></li>
                                            <li className="_1BaMfKX4"><a className="_2AtoUIfS" href="/3d">3D </a></li></ul></div>
                                    <div className="_3WmLTZk9"><span className="_2MP6gs9K">Members Only</span>
                                        <div className="_2aiYEL1D"><span className="_25fE0mAl">Enjoy these benefits</span>
                                            <ul className="_3g4SZ0dI"><li className="bW-ATxbK"><a className="pAKZFzVp" href="/tutsplus">
                                                <p className="_1BPIXFuT"><span className="k8-g8k6a">Get free access to 1,000+ courses &amp; 240+ eBooks</span>
                                                    <span className="_1qxcvB_E">Up your digital game with courses &amp; eBooks on design, illustration, web design, code &amp; more.</span></p>
                                                <span className="_24R0R_mP">Upskill today</span></a></li>
                                                <li className="bW-ATxbK"><a className="pAKZFzVp" href="/andco"><p className="_1BPIXFuT"><span className="k8-g8k6a">Get a free AND CO membership</span>
                                                    <span className="_1qxcvB_E">Streamline your business from proposal to payment with AND CO.</span></p>
                                                    <span className="_24R0R_mP">Bringing less hassle, more hustle</span></a></li></ul>
                                        </div></div></div>
                                <div className="_1sGsOp8r"></div></div></div>
                        <div className="_1ryV0NPs">
                            <button className="lha0PoyP">1111</button>
                            <div className="_1W0Xb33x">
                                <div className="_2Ck7XfZf">
                                    <div className="_1blITI1x" >WordPress</div>
                                    <select class="_2S-Izz47"><option value="">All items</option><option value="wordpress">WordPress</option>
                                        <option value="photos">Photos</option><option value="graphics">Graphics</option>
                                        <option value="add-ons">Add-ons</option><option value="fonts">Fonts</option>
                                        <option value="graphic-templates">Graphic Templates</option>
                                        <option value="presentation-templates">Presentation Templates</option>
                                        <option value="web-templates">Web Templates</option><option value="cms-templates">CMS Templates</option>
                                        <option value="3d">3D</option>
                                    </select>
                                </div>
                                <div className="_15SjEAI_">
                                    {/* <Dropdown overlay={menu}>
                                        <Button>
                                            Actions <Icon type="down" />
                                        </Button>
                                    </Dropdown> */}
                                    <button onClick={this.handleDownMenu} className="_2Cx3YAD8">
                                        <div className="_1blITI1x">WordPress<Icon type="down" style={{ marginLeft: 5 }} /></div>
                                    </button>
                                    <div className={down_search_css} onMouseOver={this.hanleMouseOver} onMouseOut={this.hanleMouseOut}>
                                        <div className="_1rpS1bhu"><span className="_16Fam0gs">Search Items</span>
                                            <ul className="_3fFxw3cm">
                                                <li><button className="_2PefVhEJ">All items</button></li>
                                                <li><button className="_2PefVhEJ">WordPress<span className="_23rfEdWb _2z0VnGyS undefined _1eH36uVn"><span className="_23XlgirZ y_c-qfM7 _3t9Lw-rT">New</span></span></button></li>
                                                <li><button className="_2PefVhEJ">Photos</button></li><li><button className="_2PefVhEJ">Graphics</button></li>
                                                <li><button className="_2PefVhEJ">Add-ons</button></li>
                                                <li><button className="_2PefVhEJ">Fonts</button></li>
                                                <li>
                                                    <button className="_2PefVhEJ">
                                                        <svg className="_397hreFv _1PFpk-Uc" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                            <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path>
                                                        </svg>
                                                        Graphic Templates
                                            </button>
                                                </li>
                                                <li>
                                                    <button className="_2PefVhEJ">
                                                        <svg className="_397hreFv _1PFpk-Uc" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                            <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path></svg>
                                                        Presentation Templates</button>
                                                </li>
                                                <li><button className="_2PefVhEJ">
                                                    <svg className="_397hreFv _1PFpk-Uc" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                        <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path></svg>
                                                    Web Templates</button></li>
                                                <li><button className="_2PefVhEJ">
                                                    <svg className="_397hreFv _1PFpk-Uc" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                        <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path></svg>
                                                    CMS Templates</button>
                                                </li>
                                                <li><button className="_2PefVhEJ">
                                                    <svg className="_397hreFv _1PFpk-Uc" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                        <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path></svg>
                                                    3D</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="_1CDzC_30">
                                    <div className="_2UzBsLNa">
                                        <input type="text" aria-label="Search" id="_2zCLIxob" value="" className="_2zCLIxob" placeholder="Search..." />
                                    </div>
                                </div>
                                <button className="_5S8Q_WLY" aria-label="Submit search">
                                    <svg className="_397hreFv" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Search">
                                        <path d="M9 18c2.1 0 4.1-.7 5.6-2l7.7 7.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L16 14.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9S0 4 0 9s4 9 9 9zM9 2c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="kg04CWqI">
                            <li className="FAjJnrvm _1PdW_I3_"><a className="_34XhM1qT" href="/about">About</a></li>
                            <li className="FAjJnrvm _3UqSb32I"><a className="_34XhM1qT" href="/license-terms">License</a></li>
                            <li className="FAjJnrvm RBuHLcC6"><a className="_34XhM1qT" href="/pricing">Pricing</a></li>
                        </ul>
                        <ul className="_2L129t1v">
                            <li className="-P8JqDPt _2G3SE_4r"><a className="InmbmXbE _3pzLh7yT" href="/sign-up">
                                <span className="_22ujw_jt">Create Account</span><span className="_2OH7tFRE">Create a Free Account</span></a></li>
                            <li className="-P8JqDPt"><a className="InmbmXbE _2zmQP5Um" href="/sign-in">
                                Sign In</a></li>
                        </ul>
                        <div className="_2PYJTl8S">
                            <button className="pxIjwIm2">
                                <svg className="_397hreFv _14Oqt7S8" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 24" role="img" aria-label="Ellipses">
                                    <circle cx="3" cy="3" r="3"></circle><circle cx="3" cy="12" r="3"></circle><circle cx="3" cy="21" r="3"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                <Content />
                <Footer />
            </div>
        );
    }
}
export default Page;
