import React from "react";
import { Form } from "antd";
import { Grid } from "../../../Components/Core";
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
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addConversion(conversion));
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
        onValuesChange={handleTotal}
        onFinishFailed={onFinishFailed}
      >
        {console.log("conversion state", conversion)}
        <Row gutter={[{ xs: 0, sm: 48 }, 16]} type="flex" justify="center">
          <Col md={24} sm={18} xs={24}>
            <SubTiitle tittle=" General Info" />
          </Col>
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
              label="Buyer Company Name"
              name="buyer_company_name"
              rules={[
                {
                  required: true,
                  message: "Please select Buyer Company Name ",
                },
              ]}
            >
              <Select
                placeholder="Buyer Company Name"
                prefixIcon={<UserOutlined />}
                Options={BuyerNameOption}
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
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Cloth Quality"
              name="cloth_quality_id"
              rules={[
                {
                  required: true,
                  message: "Please select Quality ",
                },
              ]}
            >
              <Select
                placeholder="Reed * Pick / Warp * Weft = width″ Type"
                type="qualities"
                prefixIcon={<UserOutlined />}
                Options={clothQuality ? clothQuality : []}
              />
            </Form.Item>
          </Col>
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please Enter Quantity (meter)!",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Quantity (meter)"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Fabric Rate Per Meter"
              name="fabric_rate_per_meter"
              rules={[
                {
                  required: true,
                  message: "Please Enter Fabric Rate/m",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Fabric Rate/m"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Rate Per Pick"
              name="rate_per_pick"
              rules={[
                {
                  required: true,
                  message: "Please Enter Rate per pick",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Rate per pick"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>
          <Col md={12} sm={18} xs={24}>
            <Form.Item
              label="Conversion Rate"
              name="conversion_rate"
              rules={[
                {
                  required: true,
                  message: "Please Enter Conversion rate ",
                },
              ]}
            >
              <Input
                disabled
                placeholder="Conversion rate "
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </Col>

          <Col md={24} sm={18} xs={24}>
            <SubTiitle tittle="Weight Calculator" />
          </Col>
          <Col md={22} sm={18} xs={24}>
            {/* Wrap Calculatore */}
            <CalContainer>
              <Row
                type="flex"
                justify="space-between"
                align="center"
                gutter={[16, 16]}
              >
                <Col md={6}>
                  <Form.Item
                    label="Wrap Count Margin"
                    name="wrap_cm"
                    rules={[
                      { required: true, message: "Fill Wrap Count Margin" },
                    ]}
                  >
                    <Input
                      className="text-center"
                      placeholder="Wrap Count Margin"
                      type="number"
                    />
                  </Form.Item>
                </Col>

                <Col md={6}>
                  <Form.Item
                    label="Wrap weight"
                    name="wrap_weight"
                    rules={[
                      { required: true, message: "Please Enter Wrap Weight" },
                    ]}
                  >
                    <Input
                      disabled
                      className="text-center"
                      placeholder="Wrap Weight"
                      type="number"
                    />
                  </Form.Item>
                </Col>

                <Col md={6}>
                  <Form.Item
                    label="Wrap Rate"
                    name="wrap_rate"
                    rules={[
                      { required: true, message: "Please Enter Wrap Rate" },
                    ]}
                  >
                    <Input
                      className="text-center"
                      placeholder="Wrap Rate"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Wrap Avg" name="wrap_avg">
                    <Input
                      initialValue={0.0}
                      className="text-center"
                      resultbox="true"
                      prefix="="
                      placeholder="0.00"
                      disabled
                    />
                  </Form.Item>
                </Col>
              </Row>

              {/* Weft calculatore */}
              <Row
                type="flex"
                justify="space-between"
                align="center"
                gutter={[16, 16]}
              >
                <Col md={6}>
                  <Form.Item
                    label="Weft Count Margin"
                    name="weft_cm"
                    rules={[
                      { required: true, message: "Fill Weft Count Margin" },
                    ]}
                  >
                    <Input
                      className="text-center"
                      placeholder="Weft Count Margin"
                      type="number"
                    />
                  </Form.Item>
                </Col>

                <Col md={6}>
                  <Form.Item
                    label="Weft weight"
                    name="weft_weight"
                    rules={[
                      { required: true, message: "Please Enter Weft Weight" },
                    ]}
                  >
                    <Input
                      disabled
                      className="text-center"
                      placeholder="Weft Weight"
                      type="number"
                    />
                  </Form.Item>
                </Col>

                <Col md={6}>
                  <Form.Item
                    label="Weft Rate"
                    name="weft_rate"
                    rules={[
                      { required: true, message: "Please Enter weft Rate" },
                    ]}
                  >
                    <Input
                      className="text-center"
                      placeholder="Wrap Rate"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Weft Avg" name="weft_avg">
                    <Input
                      initialValue={0.0}
                      className="text-center"
                      resultbox="true"
                      prefix="="
                      placeholder="0.00"
                      disabled
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col md={6}>
                  <Form.Item name="rate_per_meter" label="Rate/MTR">
                    <Input
                      initialValue={0.0}
                      className="text-center"
                      placeholder="0.00"
                      disabled
                    />
                  </Form.Item>
                </Col>
              </Row>
            </CalContainer>
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
          <Col md={24} sm={18} xs={24}>
            <SubTiitle tittle="Taxes" />
          </Col>
          <Col md={24} sm={18} xs={24}>
            <Form.Item name="include_gst" valuePropName="checked">
              <Checkbox checked={true}>Include GST</Checkbox>
            </Form.Item>
          </Col>
          <Col md={24} sm={18} xs={24}>
            <SubTiitle tittle=" Broker Info " />
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
          <Col md={12} sm={18} xs={24}></Col>

          <Col md={24} sm={18} xs={24}>
            <SubTiitle tittle="Delivery Scedule" />
          </Col>
          <Col md={12} sm={18} xs={24}>
            <Form.List name="delivery_data">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="start"
                      >
                        <Form.Item
                          {...field}
                          name={[field.name, "date"]}
                          fieldKey={[field.fieldKey, "date"]}
                          rules={[
                            { required: true, message: "Plz Enter Date" },
                          ]}
                        >
                          <DatePicker reverse="reverse" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "meter"]}
                          fieldKey={[field.fieldKey, "meter"]}
                          rules={[{ required: true, message: "Input Meter" }]}
                        >
                          <Input
                            placeholder="Meter"
                            prefix={<UserOutlined />}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        ) : null}
                      </Space>
                    ))}

                    <Form.Item>
                      <Button
                        width="187px"
                        margin="0px"
                        fontSize="16px"
                        weight="500"
                        height="auto"
                        bg="#ba3d79"
                        onClick={() => {
                          add();
                        }}
                      >
                        <PlusOutlined />
                        Add Delivery Scedule
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>
          </Col>
          <Col md={12} sm={18} xs={24}></Col>
          <Col md={24} sm={18} xs={24}>
            <Form.Item
              name="invoice"
              label="Select Invoice"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Please Select Invoice"),
                },
              ]}
            >
              <RadioGroup>
                <Radio value="invoice">Invoice</Radio>
                <Radio value="widthout invoice">Without Invoice</Radio>
              </RadioGroup>
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
