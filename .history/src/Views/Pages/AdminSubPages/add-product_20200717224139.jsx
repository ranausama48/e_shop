import React from "react";
import { Form, Row, Col, Button, Typography } from "antd";
import { Grid, Input } from "../../../Components/Core";
import styled from "styled-components";
const StyledForm = styled(Form)`
  label,
  .buttton_btn,
  .buttton_btn:hover {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    color: red;
  }
  .buttton_btn {
    padding: 0px;
  }
`;
export const AddProduct = () => {
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Grid>
      <StyledForm
        form={form}
        {...layout}
        name="basic"
        initialValues={{
          include_gst: false,
        }}
        onFinish={onFinish}
        // onValuesChange={handleTotal}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[{ xs: 0, sm: 48 }, 16]} type="flex" justify="center">
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Contract #"
              name="contract_no"
              rules={[
                {
                  required: true,
                  message: "Please Enter Contract Number!",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Contract number"
                prefix={<NumberOutlined />}
              />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Contract Date"
              name="contract_date"
              rules={[
                {
                  required: true,
                  message: "Please Set Contract Date!",
                },
              ]}
            >
              <DatePicker reverse="reverse" />
            </Form.Item>
          </Col>

          <Col md={24} sm={18} xs={24}>
            <Form.Item
              label="Description"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please Enter Description!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Broker Name"
              name="broker_name"
              rules={[
                {
                  required: true,
                  message: "Please Enter Broker name",
                },
              ]}
            >
              <Input placeholder="Broker name" prefix={<UserOutlined />} />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Broker Rate"
              name="broker_rate"
              rules={[
                {
                  required: true,
                  message: "Please Enter Broker Rate",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Broker Rate"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Row type="flex" justify="end">
            <Col md={16}>
              <Row type="flex" justify="space-between">
                <Button
                  width="187px"
                  bg="#404E67"
                  // type="primary"
                  // htmlType="submit"
                >
                  <Typography
                    text="Save Contract"
                    as="h5"
                    noMargin
                    weight="bold"
                    align="center"
                    color="white"
                  />
                </Button>
                <Button
                  width="187px"
                  bg="#404E67"
                  type="primary"
                  htmlType="submit"
                >
                  <Typography
                    text="Save and Print"
                    as="h5"
                    noMargin
                    weight="bold"
                    align="center"
                    color="white"
                  />
                </Button>
                <Button
                  width="187px"
                  bg="#404E67"
                  type="primary"
                  onClick={() => form.resetFields()}
                >
                  <Typography
                    text="Cancel"
                    as="h5"
                    noMargin
                    weight="bold"
                    align="center"
                    color="white"
                  />
                </Button>
              </Row>
            </Col>
          </Row>
        </Form.Item>
      </StyledForm>
    </Grid>
  );
};
