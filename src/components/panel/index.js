"use strict";
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Spin} from 'antd';
import './style';


let count = 0;//refresh count
export default class Panel extends Component{
  static propTypes = {
      panelTitle:PropTypes.string,
      children: PropTypes.any,
      refresh:PropTypes.bool,
      closed:PropTypes.bool,
      fold:PropTypes.bool,
      startFresh:PropTypes.func,
      showContent:PropTypes.bool,
  }
  static defaultProps = {
    panelTitle: '',
    refresh:false,//default no show refresh
    closed:false,//default no show closed
    fold:false,//default no show closed
    showContent:true,//默认显示面板内容
  }
  state = {
    showContent:this.props.showContent,//whether show panel content
    showPanel:true,//whether show panel
    loading:false,//whether show loading
    iconDownClass:'icon-chevron-down',//show or hide operate
    iconRefresh:'icon-sync',//refresh operate
  }
  render(){
      const {panelTitle,children,refresh,closed,fold} = this.props;
      const {showContent,showPanel,loading,iconDownClass,iconRefresh} = this.state;
      return(
        <Spin spinning={loading}>
           <div className="panel" style={{display:showPanel?'block':'none'}}>
            <div className="panel-heading">
               <h3 className="panel-title">
                 <span>{panelTitle}</span>
               </h3>
               <div className="heading-elements">
                  <i className={iconRefresh} onClick={this.runRefresh.bind(this)} style={{display:refresh?'inner-block':'none'}}></i>
                  <i className="icon-x" onClick={this.closePanel.bind(this)} style={{display:closed?'inner-block':'none'}}></i>
                  <i className={iconDownClass} onClick={this.changeBody.bind(this)} style={{display:fold?'inner-block':'none'}}></i>
               </div>
            </div>
            <div className="panel-body" style={{display:showContent?'block':'none'}}>{children}</div>
          </div>
        </Spin>
      );
  }
  runRefresh = () => {
    //run refresh
    const {startFresh} = this.props;
    count++;
    if(count % 2 === 0){
      this.setState({iconRefresh:'icon-sync right-rotate-panel'});
    }else{
      this.setState({iconRefresh:'icon-sync left-rotate-panel'});
    }
    startFresh && startFresh();
  }
  changeBody = () => {
    const {showContent} = this.state;
    this.setState({showContent:!showContent});
    if(showContent){
        this.setState({iconDownClass:'icon-chevron-down right-rotate-panel'});
     }else{
        this.setState({iconDownClass:'icon-chevron-down left-rotate-panel'});
     }
  }
  closePanel = () => {
    const {showPanel} = this.state;
    this.setState({showPanel:!showPanel});
  }
}
