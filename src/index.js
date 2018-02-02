"use strict"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router';
import { Language, Privileges } from 'Utils';
//导航组件
import App from './app';
import './style';
import './images/favicon.ico';
import 'babel-polyfill';
class Index extends Component {
    render() {
        const i18n = Language.getLanguage('index');
        return (
            <Router history={hashHistory}>
                <Route path="/login" breadcrumbName={i18n.login}>
                    <IndexRoute getComponent={function (nexState, callback) {
                        import('./controllers/login').then(m => {
                            callback(null, m['Login']);
                        })
                    }
                    } />
                </Route>
                <Route path="/" breadcrumbName={i18n.home} component={App}>
                    <IndexRoute getComponent={function (nexState, callback) {
                        import('./controllers/page').then(m => {
                            callback(null, m['Content']);
                        })
                    }
                    } />
                    {/* <Route path="/" breadcrumbName={'首页'} getComponent={function (nexState, callback) {
                        import('./controllers/page').then(m => {
                            callback(null, m['Page']);
                        })
                    }} /> */}
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
