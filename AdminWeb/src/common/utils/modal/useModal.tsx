import { ExclamationCircleFilled, InfoCircleFilled } from '@ant-design/icons';
import { App, Button, ModalFuncProps, Space } from 'antd';
import styles from './Modal.module.scss';
const useModal = () => {
  const { modal } = App.useApp();

  const openError = (config?: ModalFuncProps) => {
    const baseConfig: ModalFuncProps = {
      okText: 'OK',
      closable: true,
      centered: true,
      maskClosable: false
    };
    modal.error({
      icon: <ExclamationCircleFilled />,
      className: `${styles.functionModal} ${styles.errorModal} `,
      ...baseConfig,
      ...config
    });
  };

  const openConfirm = (config?: ModalFuncProps) => {
    const baseConfig: ModalFuncProps = {
      title: 'Confirm',
      okText: 'Đồng ý',
      cancelText: 'Không',
      closable: true,
      centered: true,
      maskClosable: false
    };
    modal.confirm({
      icon: <InfoCircleFilled />,
      className: `${styles.functionModal} ${styles.confirmModal} `,
      ...baseConfig,
      ...config
    });
  };

  const openLeave = (config?: ModalFuncProps) => {
    const initConfig: ModalFuncProps = {
      title: 'Hủy Bỏ Cập Nhật',
      content: 'Bạn có chắc chắn muốn thoát khỏi bản ghi này không? Bạn sẽ mất tất cả các thay đổi.',
      icon: <InfoCircleFilled />,
      className: `${styles.functionModal} ${styles.confirmModal} `,
      okText: 'Ở Lại',
      cancelText: 'Hủy Bỏ',
      closable: true,
      centered: true,
      maskClosable: false,
      transitionName: ''
    };
    const instance = modal.confirm(initConfig);
    const baseConfig: ModalFuncProps = {
      ...initConfig,
      footer: (
        <Space style={{ marginTop: 12 }}>
          <Button
            onClick={() => {
              config?.onOk?.();
              instance?.destroy();
            }}
          >
            Hủy Bỏ
          </Button>
          <Button
            onClick={() => {
              config?.onCancel?.();
              instance?.destroy();
            }}
            type="primary"
          >
            Ở Lại
          </Button>
        </Space>
      )
    };
    instance.update({
      ...baseConfig,
      ...config
    });
  };

  return { openError, openConfirm, openLeave };
};
export { useModal };
