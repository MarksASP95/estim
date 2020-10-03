import React, { ReactNode, useState, useEffect } from 'react'
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

import axios from 'axios'

import ProjectList from '../ProjectList/ProjectList';
import NewProject from '../NewProject/NewProject';

import './EstimLayout.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const EstimLayout = () => {

    const initialProjectsState = {
        projects: [],
        projectsError: false,
        loadingProjects: true,
    }
    const [projectsState, setProjectsState] = useState(initialProjectsState)

    const getProjects = async () => {

        axios.get('http://localhost:5000/projects')
        .then(res => {
            console.log(res.data)
            setProjectsState({
                ...projectsState,
                projects: res.data,
                projectsError: false,
                loadingProjects: false,
            });
        })
        .catch(err => {
            console.log('Error getting projects', err);
            setProjectsState({
                ...projectsState,
                projectsError: true,
                loadingProjects: false,
            });
        })
    }

    useEffect(() => {
        getProjects()
    }, []);

    const getProjectsTemplateOutcome = (): ReactNode => {
        if (projectsState.projectsError) return (<p>Something went wrong!</p>)

        if (projectsState.loadingProjects) return (<p>Loading projects...</p>)

        return <ProjectList projects={projectsState.projects} />
    }

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
                            <Route path="/new-project">
                                <NewProject />
                            </Route>
                            <Route exact path="/">
                                { getProjectsTemplateOutcome }
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
