"use strict";
import React, { Component } from 'react';
import TipPopover from '../tipPopover';
/***
**Character exceeds the specified length display '...'
**/
export default function TextOverflow(props) {
  function strlen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      //单字节加1 
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        len++;
      }
      else {
        len += 2;
      }
    }
    return len;
  }

  function getContentLen(str, maxLen) {
    let len = 0, contentLen = 0;
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (len >= maxLen) {
        contentLen = i;
        break;
      }
      if(i == str.length-1){
        contentLen = i;
      }
      //单字节加1 
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        len++;
      }
      else {
        len += 2;
      }
    }
    return contentLen;
  }

  let {content, length, placement} = props;
  if (!length) {
    length = 0;
  }
  if (!placement) {
    placement = 'right';
  }
  const len = strlen(content);
  let result = '';
  if (length >= len) {
    result = content;//全部显示
  } else {
    //获取内容的长度
    const contentLen = getContentLen(content, length);
    result = content.slice(0, contentLen) + '...';
  }
  return (
    <TipPopover tips={content} placement={placement} {...props}><span>{result}</span></TipPopover>
  )
}
