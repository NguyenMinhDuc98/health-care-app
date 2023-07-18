import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { routesObj } from "../../routes";
import { utils } from "../../utils";
import { configs } from "../../configs";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    try {
      const res = authService.login(values);
      utils.setStorage(configs.storage.access_token, res);
      setTimeout(() => {
        setLoading(false);
        navigate(routesObj.home.path);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const rules = [{ required: true, message: "This field is required" }];

  return (
    <div className={styles.login}>
      <div className="container">
        <div className="label">Sign in</div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="Username" name="username" rules={rules}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={rules}>
            <Input.Password />
          </Form.Item>

          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="w-full mt-5"
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
