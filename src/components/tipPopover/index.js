"use strict";
import React, { Component } from 'react';
import { Tooltip } from 'antd';

export default function TipPopover(props) {
  let {tips, children} = props;
  if (!tips) {
    tips = '';
  }
  return (
    <Tooltip title={tips} {...props}>
      {children}
    </Tooltip>
  )
}
