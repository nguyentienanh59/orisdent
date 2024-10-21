import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import React, { useEffect } from 'react';
import styles from './LoginNav.module.scss';
import service from '@/common/services/apis';
import { cookie } from '@/common/helpers/cookie/cookie';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  if (values) {
    const params: A = {
      email: values.username,
      password: values.password
    };
    const response: A = await service.userAdmin.login(params);
    if (response.status === 200) {
      if (response.data) {
        cookie.setCookie('userid', JSON.stringify(response.data.id), 1);
        cookie.setCookie('user', JSON.stringify(response.data), 1);
        location.href = '/admin';
      }
    }
  }
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {};

const Login: React.FC = () => {
  useEffect(() => {
    const user = cookie.getCookie('user');
    if (user) {
      location.href = '/admin';
    }
  }, []);

  return (
    <div className={styles.formcontainer}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={styles.centerText}>
          <h2>Đăng nhập</h2>
        </div>
        <Form.Item<FieldType>
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: 'Vui lòng điền tên tài khoản!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng điền mật khẩu!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Login);
