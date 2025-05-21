import React, { useEffect, useState } from 'react';
// pages/LoginPage.tsx
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  username: string;
  password: string;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Prefill username from localStorage if available
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      console.log(storedAuth);
      const { username } = JSON.parse(storedAuth);
      console.log(username);
      form.setFieldsValue({ username });
      setRememberMe(true);
    }
  }, [form]);

  const onFinish = (values: LoginFormValues) => {
    setLoading(true);
    const { username, password } = values;
    if (username && password) {
      const authData = { username };
      if (rememberMe) {
        // Store in localStorage for persistence
        localStorage.setItem('auth', JSON.stringify(authData));
      } else {
        // Store in sessionStorage for temporary session
        sessionStorage.setItem('auth', JSON.stringify(authData));
      }
      navigate('/books');
    }
    setLoading(false);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Login Page</h1>
      <Form<LoginFormValues> onFinish={onFinish} form={form}>
        <Form.Item<FieldType> name='username' rules={[{ required: true }]}>
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item<FieldType> name='password' rules={[{ required: true }]}>
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item<FieldType>>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          >
            Remember Me
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' block loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
