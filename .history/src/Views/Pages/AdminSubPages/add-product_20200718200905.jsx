import React from "react";
import { Form, Row, Col } from "antd";
import { useDispatch } from "react-redux";
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
import { LoadingOutlined } from "@ant-design/icons";

import { addProduct } from "../../../Redux/Action/add-product";
const UTILS = require("../../../helper/utils/upload-image");

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
  const [state, setstate] = React.useState({});
  // const [loading, setLoading] = React.useState(false);
  // const [image, setImage] = React.useState("");
  const [upload, setUpload] = React.useState({
    loading: false,
  });
  const dispatch = useDispatch();
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
    // console.log("values", values);
    // console.log("state", state);
    dispatch(addProduct(state));

    // form.resetFields();
  };
  const UploadBtn = styled(Button)`
    border-radius: 50%;
    .anticon-spin {
      color: #3d5166;
      width: 40px;
      height: 40px;
    }
  `;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onValuesChange = (_, values) => {
    const {
      product_name,
      posting_date,
      desc,
      posted_by,
      product_price,
    } = values;
    setstate((prev) => ({
      product_name,
      posting_date,
      desc,
      posted_by,
      product_price,
      id: Math.random().toString(16).slice(-4),
    }));
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setUpload({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      UTILS.getBase64(info.file.originFileObj, (imageUrl) =>
        setUpload({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const uploadButton = (
    <UploadBtn width="100px" height="100px" bg="white">
      {upload.loading ? <LoadingOutlined /> : <PlusOutlined />}
    </UploadBtn>
  );
  const { imageUrl } = upload;
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
        onValuesChange={onValuesChange}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[{ xs: 0, sm: 48 }, 16]} type="flex" justify="center">
          <Col md={12} sm={18} xs={24}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={handleChange}
            >
              {imageUrl ? (
                <Avatar size={120} src={upload.imageUrl} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
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
