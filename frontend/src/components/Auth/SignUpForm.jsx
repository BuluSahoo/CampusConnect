/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import FormButton from "../common/FormElement/FormButton";
import { LinkButton } from "../common/Elements";
import FormField from "../common/FormElement/FormField";

const fields = [
  {
    name: 'name',
    placeholder: 'Name',
    rules: [{ required: true, message: 'Please enter your name!' }]
  },
  {
    name: 'email',
    placeholder: 'Email',
    rules: [
      { required: true, message: 'Please enter your email!' },
      { type: 'email', message: 'Please enter a valid email address!' },
    ]
  },
  {
    name: 'phone',
    placeholder: 'Phone Number',
    rules: [{ required: true, message: 'Please enter your phone number!' }],
    type: 'number'
  },
  {
    name: 'password',
    placeholder: 'Password',
    rules: [{ required: true, message: 'Please enter a password!' }],
    type: "password"
  },
  {
    name: 'repeatPassword',
    placeholder: 'Repeat Password',
    rules: [
      { required: true, message: 'Please repeat your password!' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('The Password and Repeat Password should match!');
        },
      }),
    ],
    type: "password"
  }
]


const SignUpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values:", values);
    if (values.password !== values.repeatPassword) {
      message.error("The password and repeat password do not match!");
      return;
    }
    // Proceed with sign in logic
  };

  return (
    <div>
      <Form name="signin-form" onFinish={onFinish}>
        {
          fields.map((field, i) => (
            <FormField
              name={field.name}
              rules={field.rules}
              placeholder={field.placeholder}
              type={field.type}
            />
          ))
        }
        <FormButton label={"Create Now"} loading={loading} />
        <Form.Item>
          <div style={{ textAlign: "center" }}>
            Already have an Account? &nbsp;
            <LinkButton label={"Login"} path="/login" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
