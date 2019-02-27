import React, { Component } from 'react';
import '../App.css';
import {
    Form, Icon, Input, Button, Row, Col
  } from 'antd';
import loginImage from '../images/stte.png';
import logo from '../images/logo.png';

class Restablecer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
    }

    state = {
        confirmDirty: false,
     };

    handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('La contraseña no coincide con la introducida previamente');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
          if (!error) {
            console.log('Valores recibidos ', values);
          }
        });
      };

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
        <div className="App">
            <Row>
            <Col xs={0} sm={0} md={0} lg={12} xl={14}>
                <div className="login-image-container">
                <img className="login-image" src={loginImage} alt={''}/>
                </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={10}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="logo-image-container">
                    <img className="logo-image" src={logo} alt={''}/>
                </div>
                <Form.Item className="restore-title">
                    <h2>Restablecer contraseña</h2>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Por favor ingresa la nueva contraseña' }, , {
                        validator: this.validateToNextPassword,
                      }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Nueva contraseña" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('passwordVerification', {
                    rules: [{ required: true, message: 'Por favor ingresa la verificación de la contraseña' }, {
                        validator: this.compareToFirstPassword,
                      }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Verificar contraseña" onBlur={this.handleConfirmBlur}/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Restablecer contraseña
                    </Button> 
                </Form.Item>
                </Form>
            </Col>
            </Row>
        </div>      
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'restablecer' })(Restablecer);
export default WrappedNormalLoginForm;