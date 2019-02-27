import React, { Component } from 'react';
import {
    Icon, Button, Modal, Form, Input
} from 'antd';
import DataTable from "../components/DataTable";
import API from "../tools/API";


class ProcesosForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible:false,
            loading:true,
            data: []
        }
    }

    refreshData = () => {
        this.setState({loading:true});

        API.call('getProcesosPasos',[],(response) => {

            this.setState({data: response.data, loading:false});
        });
    };

    componentWillMount() {
        this.refreshData();
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
            <div>
                <Button style={{float:'right'}} type="secondary" icon="plus" onClick={() => {this.setState({visible:true})}}>
                    Agregar proceso nuevo</Button>
                <h1><Icon type="cluster" /> Procesos</h1>
                    <DataTable data={this.state.data} loading={this.state.loading}
                           columns={[
                               {title: 'Nombre del proceso',key: 'nombre', },
                               {title: 'Pasos',key: 'pasos',},
                               {title: 'Fecha de creación',key: 'fecha',}
                               ]}/>

                <Modal
                    title="Agregar proceso nuevo"
                    visible={this.state.visible}
                    onCancel={() => {this.setState({visible:false})}}
                    footer={[
                        <Button key="back" onClick={() => {this.setState({visible:false})}}>Cancelar</Button>,
                        <Button key="submit" type="primary"  onClick={this.handleSubmit}>
                            OK
                        </Button>,
                    ]}
                >
                    <Form layout="horizontal" className={'form-normal'}>
                        <Form.Item label="Nombre del procesos" type="text">
                            {getFieldDecorator('proceso', {
                                rules: [{ required: true, message: 'Por favor escribe un nombre para el proceso' }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        );
    }
}


const Procesos = Form.create({ name: 'normal_login' })(ProcesosForm);
export default Procesos;