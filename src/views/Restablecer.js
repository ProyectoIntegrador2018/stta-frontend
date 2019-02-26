import React, { Component } from 'react';


import {
    Form, Input, Button,
} from 'antd';

import '../App.css';



const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


class Restablecer extends Component {


    render() {

        return (
            <Form onSubmit>
                <Form.Item
                    {...formItemLayout}
                    label="Nueva contraseña"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input type="password" />

                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Verificar contraseña"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Cambiar contraseña
                    </Button>
                </Form.Item>
            </Form>

        );
    }
}

export default Restablecer;