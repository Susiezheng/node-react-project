"use strict"
import React, { Component } from 'react';
import { Form, Icon, Input, Button, message, Modal, Select, Row, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { hashHistory } from 'react-router';
import { userService } from 'services';
import jwt_decode from 'jwt-decode';
import { Language } from 'Utils';
import './style';
const i18n = Language.getLanguage('user');

class loginForm extends Component {
    state = {
        showModal: false, //配置的模态框的显示
        roleList: [],
        showCode: false,
        route: '',
        username: '',
    }

    getCode = () => {
        const { username } = this.state;
        let route = 'http://10.22.0.150/auth/captcha?username=' + username + '&';
        this.setState({ route: route + Math.random() })
    }

    componentDidMount() {
        document.getElementById('particles-js').style.display = 'block';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                hashHistory.push('/');
                // userService.loginIn(values, (res) => {
                //     if (res.sys.status == 'S' && res.output.issuce == 'true') {
                //         const access_token = res.output.utoken;
                //         const refresh_token = res.output.ftoken;
                //         const privileges = res.output.powers;
                //         const user_claims = res.output.user;
                //         //  const decoded = jwt_decode(access_token);
                //         localStorage.setItem('access_token', access_token);
                //         localStorage.setItem('refresh_token', refresh_token);
                //         if (privileges && privileges instanceof Object) {
                //             localStorage.setItem('privileges', JSON.stringify(privileges));
                //         }
                //         if (user_claims && user_claims instanceof Object) {
                //             localStorage.setItem('user_claims', JSON.stringify(user_claims));
                //             if (user_claims.usrtid) {
                //                 localStorage.setItem('TENTID', user_claims.usrtid);
                //             }
                //         }
                //         hashHistory.push('/');
                //         location.reload();
                //     } else {
                //         message.error(res.output.mesage);
                //     }
                // })
            }
        });
    }
    handleUserName = (e) => {
        this.setState({ username: e.target.value })
    }
    handleOnBlur = (e) => {
        const value = e.target.value;
        if (value) {
            this.setState({ showCode: true })
            this.getCode();
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { showModal, roleList, showCode, route } = this.state;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
        };
        const option = roleList && roleList.map((item, i) => {
            return (
                <Option key={item.id}>{item.name}</Option>
            )
        });
        const modalOpt = {
            title: i18n.chooseRole,
            width: '50%',
            visible: showModal,
            okText: i18n.ok,
            cancelText: i18n.cancel,
            footer: null,
            closable: false,   //点击右上角关闭按钮
        }
        //<a className="login-form-forgot" href="">{data.loginForgotPwd}</a>
        return (
            <div className="login-bg">
                <div className="login-page">
                    <div className="login-icon-content">
                        <div className="login-icon"></div>
                        <p>{i18n.systemName}</p>
                    </div>
                </div>
                <div className="login-content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('usrnam', {
                                rules: [{ required: true, message: i18n.loginMessage }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} onChange={this.handleUserName} placeholder={i18n.loginMessage} onBlur={this.handleOnBlur} />
                                )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('usrpas', {
                                rules: [{ required: true, message: i18n.pwdMessage }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder={i18n.pwdMessage} />
                                )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                {i18n.login}
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
const LoginPage = Form.create()(loginForm);
export default LoginPage;
