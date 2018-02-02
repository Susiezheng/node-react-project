"use strict";
import React from 'react';
import {LazilyLoadFactory} from './LazilyLoad';

class JsonHighlighter extends React.Component {
    render() {
        const {JsonHighlighter} = this.props;   // highlight js 现在在 props 里面以备使用
        return <JsonHighlighter {...this.props}/>
    }
}

export default LazilyLoadFactory(JsonHighlighter, {
    JsonHighlighter: () => import('react-json-syntax-highlighter').then(m => m.default),
});
