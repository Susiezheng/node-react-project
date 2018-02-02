"use strict";
import React, { Component } from 'react';

import './style';

function Label (props) {
    const {type, children} = props;
    const colorMap = {
        info: 'info',
        success: 'success',
        error: 'error',
        warning: 'warning'
    }

    return (
        <label className={`label-${colorMap[type]}`}>{children}</label>
    );
}

export default Label;
