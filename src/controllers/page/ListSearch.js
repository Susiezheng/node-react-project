import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Button, Menu, Dropdown, Icon, Input, message, Select, Row, Col } from 'antd';
import './style';
import './style/Page.css';
import CardList from './CardList';

class ListSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down_search_css: 'qI5MyRGq',
        };
    }
    componentWillMount() {

    }
    render() {
        const { showSearch } = this.props;
        return (
            <section className={showSearch ? "_24EIJSrM _1UMBWrAq" : '_24EIJSrM'}>
                <div className="_2Wpy4Uqn _3fddMcAA">
                    <div className="_3VDtFj3A _1yQhJKh7">
                        <ul className="_1_JgRMOY" role="navigation" aria-label="Breadcrumbs">
                            <li className="_1LiloBAS"><a className="_103LOAwn" href="/all-items">All Items</a></li>
                            <li className="_1LiloBAS"><a className="_103LOAwn" href="/wordpress">WordPress</a></li>
                        </ul>
                    </div>
                </div>
                <div className="_2Wpy4Uqn"><div className="l2tuk4Pm">
                    <div className="_3VDtFj3A _70W78yNI">
                        <ul className="_1_JgRMOY" role="navigation" aria-label="Breadcrumbs">
                            <li className="_1LiloBAS"><a className="_103LOAwn" href="/all-items">All Items</a></li>
                            <li className="_1LiloBAS"><a className="_103LOAwn" href="/wordpress">WordPress</a></li>
                        </ul>
                    </div>
                    <div className="yxJ9DbRX">
                        <div className="_2seCbr7B">
                            <div className="_2YYKTbYL" role="navigation" aria-label="Refinements">
                                <div className="_1omFoIGr"><div className="cnRVbh_J">
                                    <svg className="_397hreFv _35H2KbBa" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.38 61.31" role="img" aria-label="Refine">
                                        <path d="M0 0h86.38v13.42H0zM25.73 23.94h60.65v13.42H25.73zM52.99 47.89h33.38v13.42H52.99z"></path>
                                    </svg>Refine by</div>
                                </div>
                                <ul className="_3VLg9s1Y">
                                    <li className="_2L4LyweS">
                                        <div className="_15dTarTx">Categories</div>
                                        <div className="_2_wN1xyO"><a className="_3HUPESve" href="/wordpress/themes">
                                            <div className="NKOhaiSL">
                                                <svg className="_397hreFv _2kBfcZ-V" tabindex="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.8 5.2" role="img" aria-label="Tick">
                                                    <path d="M6.7.8L2.9 5c-.1.1-.3.2-.4.2-.1 0-.3-.1-.4-.2l-2-2c-.1-.2-.1-.5 0-.7s.5-.2.7 0L2.5 4 6 .2c.2-.2.5-.2.7 0 .2.1.2.4 0 .6z"></path>
                                                </svg>
                                            </div><div className="_1biO22pH">Themes</div></a>
                                            <div className="_3N6bnL6u"><span className="WfZmkS2F">271</span></div></div>
                                        <div className="_2_wN1xyO"><a className="_3HUPESve" href="/wordpress/plugins">
                                            <div className="NKOhaiSL"></div><div className="_1biO22pH">Plugins</div></a>
                                            <div className="_3N6bnL6u"><span className="WfZmkS2F">157</span></div></div>
                                    </li>
                                    <li className="_2L4LyweS"><div className="_15dTarTx">Properties</div><div className="_2_wN1xyO">
                                        <a className="_3HUPESve" href="/wordpress/properties-responsive"><div className="NKOhaiSL"></div>
                                            <div className="_1biO22pH">Responsive</div></a><div className="_3N6bnL6u"><span className="WfZmkS2F">408</span></div></div>
                                        <div className="_2_wN1xyO"><a className="_3HUPESve" href="/wordpress/properties-retina-ready"><div className="NKOhaiSL"></div>
                                            <div className="_1biO22pH">Retina Ready</div></a><div className="_3N6bnL6u"><span className="WfZmkS2F">301</span></div></div>
                                    </li>
                                    <li className="_2L4LyweS">
                                        <div className="_15dTarTx">Compatible With</div>
                                        <div>
                                            <div className="_2_wN1xyO">
                                                <a className="_3HUPESve" href="/wordpress/compatible-with-visual-composer"><div className="NKOhaiSL"></div>
                                                    <div className="_1biO22pH">Visual Composer</div>
                                                </a>
                                                <div className="_3N6bnL6u"><span className="WfZmkS2F">242</span></div>
                                            </div>
                                            <div className="_2_wN1xyO">
                                                <a className="_3HUPESve" href="/wordpress/compatible-with-woocommerce"><div className="NKOhaiSL"></div>
                                                    <div className="_1biO22pH">WooCommerce</div>
                                                </a>
                                                <div className="_3N6bnL6u"><span className="WfZmkS2F">194</span></div>
                                            </div>
                                            <div className="_2_wN1xyO">
                                                <a className="_3HUPESve" href="/wordpress/compatible-with-wpml"><div className="NKOhaiSL"></div>
                                                    <div className="_1biO22pH">WPML</div>
                                                </a>
                                                <div className="_3N6bnL6u"><span className="WfZmkS2F">226</span></div>
                                            </div>
                                            <div className="_2_wN1xyO">
                                                <a className="_3HUPESve" href="/wordpress/compatible-with-bootstrap"><div className="NKOhaiSL"></div>
                                                    <div className="_1biO22pH">Bootstrap</div>
                                                </a>
                                                <div className="_3N6bnL6u"><span className="WfZmkS2F">63</span></div>
                                            </div>
                                            <button className="_1l3TOmks" type="button">Show more</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="_1fSFqAny">Close Filters</button>
                </div>
                    <CardList />
                </div>
            </section>
        );
    }
}
export default ListSearch;
