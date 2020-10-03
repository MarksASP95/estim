import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Input, Button, Select, Row, Col, Card } from 'antd';

import axios from 'axios';

const { Option } = Select;

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
};

const NewProject = () => {

    const [form] = Form.useForm();
    
    const onFinish = values => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/projects',
            data: {
                projectData: values
            }
        })
        .then(res => {
            console.log(res)
        })
    };

    const onReset = () => {
        form.resetFields();
    };

    const groups = [
        {name: 'Aether Solutions', id: '1'},
        {name: 'Odalys', id: '2'}
    ];
    const getListOfGroups = () => {
        return groups.map(group => {
            return <Option key={group.id} value={group.id}>{group.name}</Option>
        });
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Add a new project</h2>

            <Row style={{marginTop: 20}}>
                <Col span={16} offset={4}>
                    <Card>                        
                        <Form {...layout} form={form} name="new-project" onFinish={onFinish}>
                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="about" label="About">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item name="image" label="Image link">
                                <Input />
                            </Form.Item>
                            <Form.Item name="group" label="Group">
                                <Select 
                                    defaultValue={undefined}
                                    allowClear
                                >
                                    { getListOfGroups() }
                                </Select>
                            </Form.Item>
                            <Row>
                                <Col span={12} offset={6} style={{textAlign: 'center'}}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" style={{marginRight: '20px'}}>
                                            Create project
                                        </Button>
                                        <Button htmlType="button" onClick={onReset}>
                                            Reset
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <div style={{textAlign: 'center', marginTop: 20}}>
                <Link to="/">
                    <Button>
                        back to projects
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default NewProject
