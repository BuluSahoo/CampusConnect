import { Form, Input } from 'antd';

const FormField = ({ name, rules, placeholder, type = 'text' }) => {
    return (
        <Form.Item name={name} rules={rules}>
            {type === 'password' ? (
                <Input.Password placeholder={placeholder} size="large" />
            ) : (
                <Input placeholder={placeholder} size="large" type={type} className={type === 'number' ? 'input-number' : ''} />
            )}
        </Form.Item>
    );
};

export default FormField;
