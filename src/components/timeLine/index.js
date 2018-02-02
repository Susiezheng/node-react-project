
"use strict";
import React, { Component } from 'react';
import { Popover, Button, Icon } from 'antd';
import './style';

class TimeLine extends Component {

    render() {
        const { children, title, footer, desc, icon, clickStatus, updateOnclick, data,
            deleteOnclick, updateStatus, deleteStatus, titleStatus } = this.props;
        const content = (
            <div style={{ textAlign: 'center' }}>
                {
                    updateStatus ?
                        <Button type="primary" shape="circle" icon="edit" onClick={() => updateOnclick('update', data)} >
                        </Button> : ''
                }
                {
                    deleteStatus ?
                        <Button type="danger" shape="circle" icon="delete" onClick={() => deleteOnclick(data)} >
                        </Button> : ''
                }
            </div>
        );
        let titleData = (
            <Popover content={content} trigger="hover">
                <div>
                    <p>{title ? title : ''}</p>
                    <small>{desc ? desc : ''}</small>
                </div>
            </Popover>
        )
        return (
            <div className={titleStatus ? "vertical-container noTitle" : "vertical-container"}>
                <div className="vertical-timeline-block">
                    {
                        titleStatus ? '' :
                            <span className="vertical-date fl">
                                {
                                    clickStatus ?
                                        titleData
                                        :
                                        <span>
                                            <p>{title ? title : ''}</p>
                                            <small>{desc ? desc : ''}</small>
                                        </span>
                                }
                            </span>
                    }
                    <div className="vertical-timeline-icon navy-bg" style={titleStatus && { left: 0 }}>
                        {
                            icon ? icon :
                                <i className="icon-clipboard5"></i>
                        }
                    </div>
                    <div className="vertical-timeline-content" style={titleStatus && { marginLeft: 58 }}>
                        {children}
                    </div>
                    {
                        footer ?
                            <div className="time-footer">
                                <Icon type="arrow-up" style={{ marginRight: 10 }} />
                                <Icon type="arrow-down" />
                            </div>
                            : ""
                    }
                </div>
            </div >
        );
    }

}
export default TimeLine;