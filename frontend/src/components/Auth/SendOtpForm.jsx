/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EmailInput } from '../common/FormElement/FormInput';
import FormButton from '../common/FormElement/FormButton';

const SendOtpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Email:', values.email);
    // navigate("/otpverify")
  };

  return (
    <Form name="email-form" onFinish={onFinish}>
      <EmailInput />
      <FormButton label={'Send OTP'} loading={loading} />
    </Form>
  );
};

export default SendOtpForm;
