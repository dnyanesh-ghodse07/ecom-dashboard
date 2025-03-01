// src/components/RegisterForm.tsx
import { Form, Input, Button, Typography, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { registerUser } from "../../redux/authSlice";
import { useEffect } from "react";

const { Title } = Typography;

const RegisterForm = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, user } = useSelector((state: RootState) => state.auth);

  interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
  }

  const onFinish = (values: RegisterFormValues) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    if (user) {
      console.log("User Registered:", user);
    }
  }, [user]);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "2rem" }}>
      <Title level={3}>Register</Title>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: "1rem" }} />}

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
