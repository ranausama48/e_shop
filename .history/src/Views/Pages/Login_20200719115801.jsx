import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Form, Row, Col } from "antd";
import { MixStyle, media } from "../../styles";
import { login } from "../../Redux/Action/auth";
import { Grid, Typography, Input, Button } from "../../Components/Core";
// const Notify_Utils = require("../helper/utils/Notification");

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const Section = styled.section`
  height: 100vh;
  padding: 30px;

  label {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  .forgot--link {
    ${MixStyle.Link}
  }
  .pws-reset {
    ${MixStyle.flexCenter}
  }
`;
const Container = styled.div`
  background: #001529;
  ${MixStyle.shadow}
  border-radius: 23px;
  padding: 20px 50px;
  ${media.minitablet`padding: 20px 20px;`};
`;
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formState, setFormState] = useState();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(login(formState));
    history.push("/");

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onValuesChange = (changedValues, userData) => {
    const { email, password } = userData;
    setFormState((prev) => ({
      ...prev,
      email,
      password,
    }));
  };
  return (
    <Section>
      <Grid className="h-100">
        <Row type="flex" align="middle" justify="center" className="h-100">
          <Col md={12} xs={24}>
            <Container>
              <Typography
                as="h1"
                text="Login"
                color="white"
                weight="800"
                align="center"
              />
              <Form
                form={form}
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={onValuesChange}
              >
                <Form.Item
                  label="Email or Phone"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email or phone number",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input type="Password" />
                </Form.Item>
                <Form.Item>
                  <Button
                    width="187px"
                    bg="white"
                    type="primary"
                    htmlType="submit"
                  >
                    <Typography
                      noMargin
                      text="Login"
                      as="h5"
                      weight="bold"
                      align="center"
                      color="#001529"
                    />
                  </Button>
                </Form.Item>
              </Form>
            </Container>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};
export default Login;
