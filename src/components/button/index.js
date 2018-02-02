/**
 * [自定义按钮]
 */
"use strict";
import React,{Component} from 'react';
import './style';

export default function Button(props){
   const {type,children,onClick,htmlType,style} = props;
   const iconMap = {
      add: "icon-plus3",
      delete: "icon-bin",
      disable: "icon-blocked",
      enable: "icon-checkmark",
      fileUpload:"icon-file-upload",
      fileExport:"icon-file-download",
      installRecord:"icon-stack-text",
      installNow:"icon-gear",
      search:'icon-search4',
      fileIcon : 'icon-plus3'
   }
   const styleCss = type && type == 'fileIcon' ? {fontSize:12} : undefined;
   return (
        <button className={`btn bg-${type}`} onClick={onClick} type={htmlType} style={style}>
          <i className={iconMap[type]} style={styleCss}></i>
          {children}
        </button>
      );
}
