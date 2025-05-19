import React from 'react';
// pages/LoginPage.tsx
import { Form, Input, Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const { username, password } = values;
    if (username && password) {
      localStorage.setItem('auth', JSON.stringify({ username }));
      navigate('/books');
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Login Page</h1>
      <Form onFinish={onFinish}>
        <Form.Item name='username' rules={[{ required: true }]}>
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true }]}>
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
