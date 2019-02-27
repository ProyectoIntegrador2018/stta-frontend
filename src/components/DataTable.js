import React, { Component } from 'react';
import {
    Table, Button, Popconfirm,Tag,Icon
} from 'antd';
import {
    HeaderSearch
} from 'ant-design-pro';



export default class DataTable extends Component {

    constructor(props) {
        super(props);



        this.state = {
            results: false,
            rowToSearch:"",
            filteredSize: 0,
            selectedRows:[],
            dataSource: props.data || [],
            columns: this.prepareColumns(props.columns || []),
            loading: props.loading || false
        }


    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.data !== this.props.data ||
            prevProps.columns !== this.props.columns ||
            prevProps.loading !== this.props.loading ) {
            this.setState({dataSource: this.props.data});
            this.setState({loading: this.props.loading});

        }

        if (prevProps.columns !== this.props.columns  ) {
            this.setState({columns:  this.prepareColumns(this.props.columns || [])});
        }
    }


    prepareColumns = (cols) =>{

        let columns = [];
        cols.map(function(val){
            columns.push({title: val.title,
                dataIndex: val.key,
                key: val.key,
                sorter: (a, b) => {
                    if(a[val.key] < b[val.key]) { return -1; }
                    if(a[val.key] > b[val.key]) { return 1; }
                    return 0},
                sortDirections: ['descend', 'ascend'],
                render: val.render ?  val.render  : (text, record) => (<span>{text}</span>)
            });
        });

        return columns;
    };

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(selectedRows);
            console.log(selectedRowKeys);

            this.setState({selectedRows:selectedRowKeys});
        }
    };



    getData = () => {
        let newData = this.state.dataSource.filter((v) => {
            for (let key in v) {
                if (v[key].toString().toLowerCase().includes(this.state.rowToSearch.toLowerCase()))
                    return true;
            }
            return false;
        });

        return newData;
    };


    render() {
        return (
            <Table loading={this.state.loading} locale={{ emptyText: (<div style={{margin:'20px'}}><Icon style={{ fontSize: '36px' }} type="exception" /><br/><b>No hay datos</b></div>) }} rowSelection={this.rowSelection} bordered size={'middle'} dataSource={this.getData()}
                       columns={this.state.columns} scroll={{x:true}}
                       title={() => (
                           <div style={{textAlign:'right', marginRight:10}}>
                               <div style={{float:'left',lineHeight: 2.5}}>

                                   <span hidden={this.state.selectedRows.length > 0}>
                                       <b>{'Total ' + this.state.dataSource.length}</b>
                                   </span>

                                   <span hidden={!(this.state.selectedRows.length > 1)}>
                                        <Popconfirm title="Are you sure delete this task?"  okText="Yes" cancelText="No">
                                            <Button type="danger" className={'button-danger'} icon={'delete'}/>
                                       </Popconfirm>
                                       &nbsp; &nbsp;{'  ' + this.state.selectedRows.length+ ' elementos seleccionados de un total de ' + this.state.dataSource.length }


                                   </span>
                                   <span hidden={!(this.state.selectedRows.length === 1)}>
                                       <Popconfirm title="Are you sure delete this task?"  okText="Yes" cancelText="No">
                                           <Button type="danger" className={'button-danger'} icon={'delete'}/>
                                       </Popconfirm>
                                       &nbsp; &nbsp;{'  ' + this.state.selectedRows.length+ ' elemento seleccionado de un total de ' + this.state.dataSource.length}
                                   </span>

                               </div>

                               <span hidden={!this.state.results}>
                                        {'Mostrando '+ this.getData().length+ ' de ' + this.state.dataSource.length + ' resultados para '}
                                   <Tag closable visible={true}
                                        onClose={() => {this.setState({results:false,rowToSearch:""})}}>
                                        {this.state.rowToSearch}</Tag>
                                    </span>

                               <HeaderSearch
                                   placeholder="Buscar..."
                                   dataSource={[]}
                                   onSearch={(value) => {
                                       if (value === "")
                                           this.setState({rowToSearch:value,results:false});
                                       else
                                           this.setState({rowToSearch:value,results:true});
                                   }}/>
                           </div>)}
                />
        );
    }
}
