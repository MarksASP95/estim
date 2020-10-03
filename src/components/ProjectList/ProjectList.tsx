import React from 'react'
import { Card, Row, Col, Avatar, Button } from 'antd';
import { ArrowRightOutlined, EditOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import Project from '../../models/Project';

import './ProjectList.scss';
import Meta from 'antd/lib/card/Meta';

export interface ProjectListProps {
    projects: Project[];
}

const randomImage = 'https://picsum.photos/400/250';
const marcoImage = 'http://marco-dev.surge.sh/static/media/me.965d0b8a.png';


const projectActions = [
    <ArrowRightOutlined key="open" />,
    <EditOutlined key="edit" />,
    <SettingOutlined key="settings" />,
];

const ProjectCard = ({project}: { project: Project }) => {


    const image = <img className="project-image" alt="project_img" src={project.image || randomImage}/>

    return (
        <Card cover={image} actions={projectActions}>
                <Meta
                    className="card-description-container"
                    avatar={<Avatar src={project.group?.image || marcoImage} />}
                    title={project.name}
                    description={project.about}
                />
        </Card>
    );
}

const ProjectList = ({ projects }: ProjectListProps) => {

    const getProjectsTemplate = (columnSpan): React.ReactNode => {
        return projects.map((project, i) => {
            return (
                <React.Fragment key={i}>
                    <Col span={columnSpan} style={{}}>
                        <ProjectCard project={project} />
                    </Col>
                </React.Fragment>
            );
        });
    }

    return (
        <div className="project-list">
            <h2>Your projects</h2>

            <Row gutter={[16,16]}>
                <Col span={24}>
                    
                    <Link to="/new-project">
                        <Button type="primary" icon={<PlusOutlined />}>
                            New project
                        </Button>
                    </Link>
                    
                </Col>

                {getProjectsTemplate(8)}
            </Row>
        </div>
    )
}

export default ProjectList
