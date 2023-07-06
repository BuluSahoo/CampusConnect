import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import FormButton from '../common/FormElement/FormButton';

const PasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [disable, setDiable] = useState(true)

  const onFinish = (values) => {
    // const { newPassword, confirmPassword } = values;
    setLoading(true);
    // Passwords match

    // Proceed with further actions
    message.success('Password changed successfully!');

  };

  const validatePassword = (_, value) => {
    if (!value) {
      setDiable(true);
      return Promise.reject('Please enter a new password');
    }

    if (value.length < 5) {
      setDiable(true);
      return Promise.reject('Please enter at least an 5-digit password');
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/.test(value)) {
      setDiable(true);
      return Promise.reject('Please include at least one letter, one digit, and one special character (@#$%^&+=!)');
    }

    setDiable(false);


    return Promise.resolve();
  };

  return (
    <Form name="password-form" onFinish={onFinish}>
      <Form.Item
        name="newPassword"
        rules={[
          {
            validator: validatePassword
          }
        ]}
      >
        <Input.Password placeholder="New Password" size='large' />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        dependencies={['newPassword']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" size='large' disabled={disable} />
      </Form.Item>
      <div style={{ margin: '40px 0' }} />
      <FormButton label={'Change Password'} loading={loading} />
    </Form>

  );
};

export default PasswordForm;
