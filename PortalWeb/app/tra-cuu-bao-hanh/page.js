"use client";
import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/home1/About1";
import service from "@/services/apis";
import { Button, Form, Input, Spin } from "antd";
import { useState } from "react";

export default function Home() {
  const [isSpin, setShowSpin] = useState(false);
  const [dataSearch, setDataSearch] = useState();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const onFinish = async (values) => {
    setShowSpin(true);
    try {
      const model = { ...values };
      const { data } = await service.dental.searchnumbercard(model);
      if (data) {
        form2.setFieldsValue(data);
        setDataSearch(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setShowSpin(false);
    }
  };

  return (
    <Spin spinning={isSpin} tip="Loading..." size="large">
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Tra cứu bảo hành"
      >
        <section className="process-section sec-pad bg-color-2">
          <div className="align-2 flexbox_1 p_20 mwp_100">
            <div className="align-2 flexbox_1 flex-start p_20 wp_50 wpmb_100">
              <Form
                size="large"
                layout="vertical"
                onFinish={onFinish}
                form={form}
                className="wp_100"
              >
                <Form.Item
                  name="numberCard"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng điền Mã số thẻ!",
                    },
                  ]}
                  required
                  label="Mã số thẻ"
                >
                  <Input></Input>
                </Form.Item>
              </Form>
              <Button
                style={{ height: "3rem" }}
                className="theme-btn btn-one"
                onClick={() => {
                  form.submit();
                }}
              >
                <span className="px_24">Tra cứu</span>
              </Button>
            </div>
          </div>
        </section>

        {/* {dataSearch && ( */}
        <section className="process-section bg-color-2">
          <div className="align-2 flexbox_1 p_20 mwp_100">
            <div className="align-2 flexbox_1 p_20 wp_50 wpmb_100">
              <Form className="wp_100" size="large" form={form2}>
                <Form.Item name="nameProduct" label="Sản phẩm">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="name" label="Họ và tên">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="numberCard" label="Mã số thẻ">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="dental" label="Nha khoa">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="doctor" label="Bác sĩ">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="numberTeeth" label="Số lượng răng">
                  <Input disabled></Input>
                </Form.Item>
                <Form.Item name="expired" label="Ngày hết hạn">
                  <Input disabled></Input>
                </Form.Item>
              </Form>
              <p>
                Trân trọng cảm ơn Quý khách đã tin dùng và lựa chọn sản phẩm
                Răng sứ cao cấp Orisdent.
              </p>
            </div>
          </div>
        </section>
        {/* )} */}
        <About1 />
      </Layout>
    </Spin>
  );
}
