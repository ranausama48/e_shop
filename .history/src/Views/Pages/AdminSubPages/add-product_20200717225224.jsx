import React from "react";
import { Form, Row, Col } from "antd";
import {
  Grid,
  Input,
  DatePicker,
  Button,
  Typography,
  TextArea,
} from "../../../Components/Core";
import styled from "styled-components";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
const StyledForm = styled(Form)`
  padding: 40px 20px;
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
              label="Product Name"
              name="product_name"
              rules={[
                {
                  required: true,
                  message: "Please Enter Product Name!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Product Name"
                prefix={<NumberOutlined />}
              />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Posting Date"
              name="posting_date"
              rules={[
                {
                  required: true,
                  message: "Please Set Posting Date!",
                },
              ]}
            >
              <DatePicker reverse="reverse" />
            </Form.Item>
          </Col>

          <Col md={24} sm={18} xs={24}>
            <Form.Item
              label="Product Description"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please Enter Product Description!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Posted By"
              name="posted_by"
              rules={[
                {
                  required: true,
                  message: "Please Enter Posted By",
                },
              ]}
            >
              <Input placeholder="Posted Buyer" prefix={<UserOutlined />} />
            </Form.Item>
          </Col>

          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Product Price"
              name="product_price"
              rules={[
                {
                  required: true,
                  message: "Please Enter Product Price",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Product Price"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button width="187px" bg="#404E67" type="primary" htmlType="submit">
            <Typography
              text="Add Product"
              as="h5"
              noMargin
              weight="bold"
              align="center"
              color="white"
            />
          </Button>
        </Form.Item>
      </StyledForm>
    </Grid>
  );
};
