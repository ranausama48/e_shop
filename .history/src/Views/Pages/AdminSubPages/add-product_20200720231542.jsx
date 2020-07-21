import React from "react";
import { Form, Row, Col, Skeleton } from "antd";
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
import { addProduct } from "../../../Redux/Action/add-product";
const StyledForm = styled(Form)`
  padding: 40px 20px;
  label,
  .buttton_btn,
  .buttton_btn:hover {
    font-weight: 500;
    font-size: 25px;
    line-height: 27px;
    color: #343b5c;
  }
  .buttton_btn {
    padding: 0px;
  }
`;
export const AddProduct = () => {
  const [state, setstate] = React.useState({});
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
    dispatch(addProduct(state));
  };
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState({
    imgUrl: "",
  });
  const changeHandler = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "shoesimages");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/osamaasif/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage({ imgUrl: file.secure_url });
    setLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onValuesChange = async (_, values) => {
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
      // imgupload: file.secure_url,
      ImgUrls: image.imgUrl,
      desc,
      posted_by,
      product_price,
      id: Math.random().toString(16).slice(-4),
    }));
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
        onValuesChange={onValuesChange}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[{ xs: 0, sm: 48 }, 16]} type="flex" justify="center">
          <Col md={13} sm={18} xs={24}>
            <Form.Item
              label="Upload Image"
              name="imgupload"
              rules={[
                {
                  required: true,
                  message: "Please Enter Product Name!",
                },
              ]}
            >
              <Input type="file" onChange={changeHandler} />
            </Form.Item>

            {loading ? (
              <Skeleton.Image />
            ) : (
              <img
                src={image.imgUrl}
                style={{ width: "300px", height: "200px" }}
                alt=""
              />
            )}
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
