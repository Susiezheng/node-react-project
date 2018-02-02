"use strict";
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import './style';

export default class FieldSet extends Component{
  static propTypes = {
      iconClass:PropTypes.string,
      title:PropTypes.string,
      showContent:PropTypes.bool,
      children: PropTypes.any
  }
  static defaultProps = {
    title: '',
    iconClass:'icon-file-text2',
    showContent:true
  }
  state = {
    show:this.props.showContent,//whether show content
    iconDownClass:'icon-circle-down2',
  }
   render(){
      const {title,children,iconClass} = this.props;
      const {show,iconDownClass,iconUpClass} = this.state;
      return(
        <fieldset>
          <legend>
            <i className={`position-left ${iconClass}`}></i>
            {title}
            <a className="control-arrow" onClick={this.change.bind(this)}>
              <i className={iconDownClass} ref="arrowDown"></i>
            </a>
          </legend>
          <div className="field-content" style={{display:show?'block':'none'}}>{children}</div>
        </fieldset>
      );
   }
   //change show or hide
   change = () => {
     const {show} = this.state;
     this.setState({show:!show});
     if(show){
        this.setState({iconDownClass:'icon-circle-down2 right-rotate'});
     }else{
        this.setState({iconDownClass:'icon-circle-down2 left-rotate'});
     }
   }
}
