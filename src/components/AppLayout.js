import React, { Component } from 'react';
import {
    Layout, Menu, Icon
} from 'antd';
import tec from '../images/tec.png'
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {

        }
    }

    BasicLoggedIn = () => {
        return (
            <Layout className={'layout'}>
                <Header className={'primaryBackground'}>
                    <img alt="ExSaM" className={'logo'} src={tec}/>
                    <h2 className={'logoName'} >  Sistema de Trazabilidad de Tramites Escolares</h2>
                    <Menu mode="horizontal"
                          size={'small'}
                          style={{ lineHeight: '64px',backgroundColor:'transparent',textAlign:'right', border:'unset' }}>
                        <Menu.SubMenu style={{ border:'unset', color:'white' }}
                                      title={<span className="submenu-title-wrapper">dd</span>}>
                            <Menu.Item className={'item-logout'}>
                                Salir
                            </Menu.Item>
                        </Menu.SubMenu>

                    </Menu>
                </Header>

                <Content style={{ padding: '0', height:'100%' }}>
                    {this.props.children}
                </Content>
                <Footer className={'footer'}>
                    STTE ITESM - Sistema de Trazabilidad de Tramites Escolares ITESM ©2019
                </Footer>

            </Layout>
        )};

    Basic = () => {
        return (
            <Layout className={'layout'}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    className={'ant-menu-tec'}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo"><img alt="ExSaM" className={'logo'} src={tec}/></div>
                    <Menu theme="dark" className={'ant-menu-tec'} mode="inline" defaultSelectedKeys={[this.props.view || 0]}>
                        <Menu.Item key="0">
                            <Link to={"/dashboard"}><Icon type="pie-chart" />
                                <span className="nav-text">Dashboard</span></Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to={"/administradores"}><Icon type="user" />
                                <span className="nav-text">Administradores</span></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={"/estudiantes"}><Icon type="team" />
                                <span className="nav-text">Estudiantes</span></Link>
                        </Menu.Item>
                        <Menu.Item  key="3">
                            <Link to={"/procesos"}><Icon type="cluster" />
                                <span className="nav-text">Procesos</span></Link>
                        </Menu.Item>
                        <Menu.Item  key="4">
                            <Link to={"/documentos"}><Icon type="file-excel" />
                            <span className="nav-text">Documentos CSV</span></Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="logout" />
                            <span>Salir</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={'primaryBackground header-bar'}><h2 className={'logoName'} >Sistema de Trazabilidad de Tramites Academicos</h2></Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Content style={{ padding: '0', height:'100%' }}>
                                {this.props.children}
                            </Content>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        STTA ITESM - Sistema de Trazabilidad de Tramites Academicos ITESM ©2019
                    </Footer>
                </Layout>
            </Layout>
        )};

    render() {
        return this.props.type === "basic" ? this.Basic() : this.props.type === "basicLoggedIn" ? this.BasicLoggedIn() : (<div></div>);
    }
}
