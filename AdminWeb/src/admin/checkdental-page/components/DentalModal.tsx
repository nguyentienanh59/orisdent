import { useFromDirty } from '@/common/context/useFormDirty';
import { useLoading } from '@/common/context/useLoading';
import service from '@/common/services/apis';
import { useNotification } from '@/common/utils/notification/useNotification';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface DentalProps {
  isOpenPanel: boolean;
  dataDental: A;
  refreshList: () => Promise<void>;
  handleClosePanel: () => void;
  handleOpenPanel: () => void;
  handleChangePageDefault: () => void;
  isView?: boolean | undefined;
}

const CheckDentalModal = (
  {
    isOpenPanel,
    isView,
    handleClosePanel,
    dataDental,
    refreshList,
    handleOpenPanel,
    handleChangePageDefault
  }: DentalProps,
  ref: A
) => {
  const [panelForm] = Form.useForm();
  const { showLoading, closeLoading } = useLoading();
  const [isViewForm, setIsViewForm] = useState<boolean>(isView ?? false);
  const { listenData, bind, reset, clearBind, checkCanLeave } = useFromDirty();
  const notification = useNotification();
  const formKey = 'knowledge';

  useImperativeHandle(ref, () => ({
    onOpen
  }));

  const onCancel = async () => {
    if (!isViewForm) {
      const canLeave = await checkCanLeave(formKey);
      if (!canLeave) return;
    }
    await reset?.(formKey);
    panelForm.resetFields();
    setIsViewForm(false);
    handleClosePanel();
  };

  const onOpen = (data?: A, isView?: boolean) => {
    bind(formKey);
    handleOpenPanel();
    if (data) {
      setIsViewForm(isView ?? false);
    }
    panelForm.setFieldsValue(data);
  };

  const onRenderFooter = () => {
    return !dataDental?.id ? (
      <>
        <Button onClick={onCancel}>Hủy</Button>
        <Button
          type="primary"
          onClick={() => {
            panelForm.submit();
          }}
        >
          Thêm mới
        </Button>
      </>
    ) : (
      <>
        <Button onClick={onCancel}>Hủy</Button>
        <Button
          type="primary"
          onClick={() => {
            panelForm.submit();
          }}
        >
          Cập nhật
        </Button>
      </>
    );
  };

  const onFinish = async (val: A) => {
    try {
      showLoading('onfinish');
      const payload: A = {
        ...val,
        id: dataDental?.id
      };
      const { data } =
        payload?.id === undefined
          ? await service.dental.createDental(payload)
          : await service.dental.updateDental({ ...payload });
      if (data) {
        if (!dataDental?.id) {
          notification.success('Tạo thành công.');
        } else {
          notification.success('Sửa thành công.');
        }
        await reset?.(formKey);
        clearBind(formKey);
        if (!dataDental?.id) {
          handleChangePageDefault();
        }
        refreshList();
        onCancel();
        closeLoading('onfinish');
      } else {
        if (!dataDental?.id) {
          notification.success('Tạo thất bại.');
        } else {
          notification.success('Sửa thất bại.');
        }

        closeLoading('onfinish');
      }
    } catch (error) {
      console.log(error);
      notification.error('Thất bại');
      closeLoading('onfinish');
    } finally {
      closeLoading('onfinish');
    }
  };

  const onRenderTitle = (
    <div className="dt-one-rows">
      {dataDental?.id
        ? isViewForm
          ? 'Xem thông tin khách hàng'
          : 'Sửa thông tin thông tin khách hàng'
        : 'Tạo mới thông tin khách hàng'}
    </div>
  );

  return (
    <>
      <Modal
        style={{ overflow: 'auto' }}
        onCancel={onCancel}
        title={onRenderTitle}
        width={800}
        open={isOpenPanel}
        footer={onRenderFooter()}
      >
        <div>
          <Form form={panelForm} onFinish={onFinish} layout="vertical" onValuesChange={() => listenData(formKey)}>
            <Col sm={24}>
              <Form.Item
                rules={[{ required: true, message: 'Vui lòng điền số thẻ khách hàng.' }]}
                name="numberCard"
                label="Số thẻ"
              >
                <Input maxLength={150} />
              </Form.Item>
            </Col>
            <Row gutter={[8, 8]}>
              <Col sm={24} xl={12}>
                <Form.Item
                  rules={[{ required: true, message: 'Vui lòng điền họ và tên khách hàng.' }]}
                  name="name"
                  label="Họ và tên"
                >
                  <Input maxLength={150} />
                </Form.Item>
              </Col>
              <Col sm={24} xl={12}>
                <Form.Item
                  rules={[{ required: true, message: 'Vui lòng điền năm sinh' }]}
                  name="dateOfBirth"
                  label="Năm sinh"
                >
                  <Input maxLength={150} />
                </Form.Item>
              </Col>
            </Row>
            <Col sm={24}>
              <Form.Item
                rules={[{ required: true, message: 'Vui lòng điền số điện thoại' }]}
                name="phone"
                label="Số điện thoại"
              >
                <Input maxLength={150} />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item name="teeth" label="Răng sứ">
                <Input maxLength={150} />
              </Form.Item>
            </Col>
            <Row gutter={[8, 8]}>
              <Col sm={24} xl={12}>
                <Form.Item
                  rules={[{ required: true, message: 'Vui lòng điền ngày làm.' }]}
                  name="startDate"
                  label="Ngày làm"
                >
                  <Input maxLength={150} />
                </Form.Item>
              </Col>
              <Col sm={24} xl={12}>
                <Form.Item
                  rules={[{ required: true, message: 'Vui lòng điền hạn sử dụng.' }]}
                  name="expiry"
                  label="Hạn sử dụng"
                >
                  <Input maxLength={150} />
                </Form.Item>
              </Col>
            </Row>
            <Col sm={24}>
              <Form.Item name="labo" label="Labo">
                <Input maxLength={150} />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item name="source" label="Nguồn gốc">
                <Input maxLength={150} />
              </Form.Item>
            </Col>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(CheckDentalModal);
