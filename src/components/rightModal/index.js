/**
 * [向右边弹出框]
 */
"use strict";
import React,{Component} from 'react';
import {Modal} from 'antd';

export default function rightModal(props){
     let defaultWidth = null;
     if(props.width && typeof(props.width) == 'string'){
       defaultWidth = props.width.split('%')[0];
     }else{
       defaultWidth = 70;//默认宽度
     }
     const defaultValue = {
       width:defaultWidth+'%',
       style:{
         top:0,
         marginLeft:(100 - defaultWidth)+'%',
         paddingBottom:0,
         height:'100%'
       },
       footer:null
     };
     Object.assign(props,defaultValue);
     return (
        <Modal {...props}/>
     );
}
