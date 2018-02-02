"use strict";
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
export default class ReactEcharts extends Component {
    static propTypes = {
        option: PropTypes.object.isRequired,
        notMerge: PropTypes.bool,
        lazyUpdate: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        theme: PropTypes.string,
        onChartReady: PropTypes.func,
        showLoading: PropTypes.bool,
        onEvents: PropTypes.object
    }
    static defaultProps = {
        notMerge: false,
        lazyUpdate: false,
        style: { height: '300px' },
        showLoading: false,
        onEvents: {}
    }
    // update
    shouldComponentUpdate(nextProps, nextState) {
        this.renderEchartDom();
        return true;
    }
    // first add
    componentDidMount() {
        const echartObj = this.renderEchartDom();
        const {onEvents, onChartReady} = this.props;

        for (let eventName in onEvents) {
            // ignore the event config which not satisfy
            if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
                // binding event
                echartObj.on(eventName, function (param) { onEvents[eventName](param, echartObj); });
            }
        }
        // on chart ready
        if (typeof onChartReady === 'function') onChartReady(echartObj);

        // on resize
        elementResizeEvent(this.refs.echartsDom, function () {
            echartObj.resize();
        });
    }
    // remove
    componentWillUnmount() {
        echarts.dispose(this.refs.echartsDom);
    }
    render() {
        const {style, className} = this.props;
        // for render
        return (
            <div ref='echartsDom'
                className={className}
                style={style} />
        );
    }
    // render the dom
    renderEchartDom() {
        // init the echart object
        let echartObj = this.getEchartsInstance();
        const {option, notMerge, lazyUpdate, showLoading} = this.props;
        // set the echart option
        echartObj.setOption(option, notMerge, lazyUpdate);
        // set loading mask
        if (showLoading) {
            echartObj.showLoading();
        } else {
            echartObj.hideLoading();
        }
        return echartObj;
    }
    getEchartsInstance() {
        // return the echart object
        return echarts.getInstanceByDom(this.refs.echartsDom) || echarts.init(this.refs.echartsDom, this.props.theme);
    }
}
