/***
*Input标签里面输入多个tags组件
**/
"use strict";
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Row,Col,Tag} from 'antd';
import './style';

export default class InputDouble extends Component{
  state = {
    value:this.props.initVal || [],//该组件的值
  }

  static propTypes = {
    span:PropTypes.number,
    offset:PropTypes.number,
    initVal:PropTypes.array,
    getVal:PropTypes.func
  }

  static defaultProps = {
    span:12,
    offset:6
  }

  render(){
      const {value} = this.state;
      const {span,offset,initVal,getVal} = this.props;
      //标签数目
      const tags = value.map((item,index) => {
         return (
           <Tag closable key={index}>{item}</Tag>
         )
      });
      return (
          <Row>
            <Col span={span} offset={offset}>
                <div className="edsp-input" onClick={() => getVal && getVal(value)}>
                  {tags}
                  <input type="text" onKeyUp={this.onKeyUpInput.bind(this)} ref="input"/>
                </div>
            </Col>
          </Row>
      );
  }

  onKeyUpInput = (event) => {
      const e = event || window.event;
      const {value} = this.state;
      if(e.keyCode == 188 || e.keyCode == 13){
        //','和'enter'键触发添加标签
        let val = this.refs.input.value;
        if(val){
            val = val.split(',')[0];
            value.push(val);
        }
        this.setState({value});
        this.refs.input.value = '';
      }
  }
}
