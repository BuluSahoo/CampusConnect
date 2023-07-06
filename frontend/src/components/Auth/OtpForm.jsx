/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import { Form, message } from 'antd';
import FormButton from '../common/FormElement/FormButton';

const OtpForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Combined OTP:', otp);
    // navigate("/resetPassword")
  };

  return (
    <Form name="otp-form" onFinish={onFinish}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" inputClassName='otp-input' />
      </div>

      <FormButton label={'Verify OTP'} loading={loading} />
    </Form>
  );
};

export default OtpForm;




