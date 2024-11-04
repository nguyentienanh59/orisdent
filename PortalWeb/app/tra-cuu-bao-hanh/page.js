"use client";
import Layout from "@/components/layout/Layout";
import ModalSearch from "@/components/modal/modalSearch";
import About1 from "@/components/sections/home1/About1";
import TestimonialSlider3 from "@/components/slider/TestmonialSlider3";
import service from "@/services/apis";
import { Button, Form, Input, Spin } from "antd";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isSpin, setShowSpin] = useState(false);
  const [dataSearch, setDataSearch] = useState();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setShowSpin(true);
    try {
      const model = { ...values };
      const { data } = await service.dental.searchnumbercard(model);
      if (data) {
        setOpen(true);
        setDataSearch(data);
      }
    } catch (error) {
      console.log(error);
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
        <ModalSearch open={isOpen} setOpen={setOpen} dataSearch={dataSearch} />
        <section className="process-section sec-pad bg-color-1">
          <div className="align-2 flexbox_1 p_20 mwp_100">
            <div className="align-2 flexbox_1 p_20 wp_50 wpmb_100">
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
                  <Input required placeholder="Mã số thẻ"></Input>
                </Form.Item>
              </Form>
              <Button
                className="theme-btn btn-one"
                onClick={() => {
                  form.submit();
                }}
              >
                <span className="px_24"> Tra cứu bảo hành</span>
              </Button>
              {dataSearch && (
                <Button
                  className="theme-btn btn-two"
                  onClick={() => setOpen(true)}
                >
                  <span className="px_24"> Xem bảng tra cứu</span>
                </Button>
              )}
            </div>
          </div>
        </section>
        <About1 />
      </Layout>
    </Spin>
  );
}
