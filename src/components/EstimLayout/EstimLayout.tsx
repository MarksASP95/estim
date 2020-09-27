import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    TeamOutlined,
    BarsOutlined,
} from '@ant-design/icons';

import {
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import ProjectList from '../ProjectList/ProjectList';
import Project from '../../models/Project';

import './EstimLayout.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const mockProjects: Project[] = [{
    "name": "Secured bi-directional parallelism",
    "active": false,
    "about": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "dueDate": new Date(10/18/2020),
    "image": "https://i.picsum.photos/id/409/400/250.jpg?hmac=EOCapY_Ek48Mech0Iw2b3lOWCtI-UhJtMKmpywPfnYs"
  }, {
    "name": "Business-focused systematic structure",
    "active": true,
    "about": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "dueDate": new Date(10/19/2019),
    "image": "https://i.picsum.photos/id/404/400/250.jpg?hmac=xJTG8LZN89EueWcRxvM9TG2ES574uE5O4dNjXUliOTE"
  }, {
    "name": "Upgradable object-oriented forecast",
    "active": false,
    "about": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "dueDate": new Date(9/28/2020),
    "image": "https://i.picsum.photos/id/416/400/250.jpg?hmac=Fc0RSOWfGtw66wVXalAAPZNymkJr-z3l2IKzjwgrcLM"
  }, {
    "name": "Decentralized methodical moderator",
    "active": true,
    "about": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    "dueDate": new Date(10/25/2020),
    "image": "https://i.picsum.photos/id/615/400/250.jpg?hmac=B5_u6j9JLqoUF1qQA5BaxOkCyLsYxFg_kZXOBd5PZRw"
  }, {
    "name": "Switchable intermediate installation",
    "active": false,
    "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    "dueDate": new Date(5/22/2020),
    "image": "https://i.picsum.photos/id/866/400/250.jpg?hmac=9HDAr7aHm2NgjIg2mYqO4PAn6ZmgU1_nCxAzjmYZUK8"
  }, {
    "name": "Multi-channelled static paradigm",
    "active": false,
    "about": "Proin at turpis a pede posuere nonummy.",
    "dueDate": new Date(5/15/2020),
    "image": "https://i.picsum.photos/id/960/400/250.jpg?hmac=OQJ9PecVtGEbWRLdfAq7fJt5ODEHJpJOhdpnLtd6oT8"
  }, {
    "name": "Re-contextualized heuristic approach",
    "active": false,
    "about": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "dueDate": new Date(5/7/2020),
    "image": "https://i.picsum.photos/id/867/400/250.jpg?hmac=Epi1Qtm_jrqx4klqVzXW5nZKHzGlK5DbPikBjxhCNfA",
    "group": {
        name: "Odalys",
        image: "http://marco-dev.surge.sh/static/media/odalys.a2560ece.jpg"
    }
  }]

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
        <Layout style={{ height: '100vh' }}>
            <Sider collapsible collapsed={layoutState.siderCollapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="1" icon={<AppstoreOutlined />}>
                        <Link to="/">General</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<BarsOutlined />} title="Mis projectos">
                        <Menu.Item key="3">
                            <Link to="projects/some_id">Arreglos en pagos</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="projects/another_id">Tienda</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Grupos">
                        <Menu.Item key="6">Odalys</Menu.Item>
                        <Menu.Item key="8">Aether Solutions</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, height: '100%' }}>
                        <Switch>
                            <Route path="/projects/some_id">
                                <h2>This is a project</h2>
                            </Route>
                            <Route path="/projects/another_id">
                                <h2>This is another project</h2>
                            </Route>
                            <Route exact path="/">
                                <ProjectList projects={mockProjects} />
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default EstimLayout;
