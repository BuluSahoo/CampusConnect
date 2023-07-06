import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Form, Input } from "antd"

export const EmailInput = ({ email = '' }) => {
    return (
        <Form.Item
            name="email"
            rules={[
                { required: true, message: 'Email Id is required' },
                { type: 'email', message: 'Please enter a valid email address' },
            ]}
        >
            <Input
                prefix={<UserOutlined />}
                placeholder="Enter your Email"
                initialValues={email}
                size='large'
            />
        </Form.Item>
    )
}


export const PasswordInput = ({ placeholder = 'Password', name = 'password' }) => {
    return (
        <Form.Item
            name={name}
            rules={[
                { required: true, message: 'Please enter your password!' }
            ]}
        >
            <Input.Password
                prefix={<LockOutlined />}
                placeholder={placeholder}
                size='large'
            />
        </Form.Item>
    )
}
