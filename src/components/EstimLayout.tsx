import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import './EstimLayout.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const EstimLayout = () => {

    const onCollapse = (collapsed: boolean) => {
        setLayoutState({
            ...layoutState,
            siderCollapsed: collapsed
        });
    };

    const initialLayoutState = {
        siderCollapsed: false,

    }
    const [layoutState, setLayoutState] = useState(initialLayoutState)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={layoutState.siderCollapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, height: '100%' }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default EstimLayout;
