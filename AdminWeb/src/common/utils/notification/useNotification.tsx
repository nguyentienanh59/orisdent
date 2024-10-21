import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, WarningFilled } from '@ant-design/icons';
import { ArgsProps } from 'antd/es/notification/interface';
import styles from './useNotification.module.scss';
import { App } from 'antd';

const useNotification = () => {
  const { notification } = App.useApp();
  const baseConfig: ArgsProps = {
    className: `${styles.notification} ${styles.customNotification}`,
    icon: <CheckCircleFilled />,
    duration: 3,
    message: ''
  };

  const success = (message?: React.ReactNode, config?: Partial<ArgsProps>) => {
    const successConfig: ArgsProps = {
      ...baseConfig,
      icon: <CheckCircleFilled className="notification-success" />
    };

    notification.success({ ...successConfig, message, ...config });
  };
  const info = (message?: React.ReactNode, config?: Partial<ArgsProps>) => {
    const infoConfig: ArgsProps = {
      ...baseConfig,
      icon: <InfoCircleFilled className="notification-info" />,
      message: ''
    };

    notification.info({ ...infoConfig, message, ...config });
  };
  const error = (message?: React.ReactNode, config?: Partial<ArgsProps>) => {
    const errorConfig: ArgsProps = {
      ...baseConfig,
      icon: <ExclamationCircleFilled className="notification-error" />
    };

    notification.error({ ...errorConfig, message, ...config });
  };
  const warning = (message?: React.ReactNode, config?: Partial<ArgsProps>) => {
    const warningConfig: ArgsProps = {
      ...baseConfig,
      icon: <WarningFilled className="notification-warning" />
    };

    notification.warning({ ...warningConfig, message, ...config });
  };

  const openDefault = (config: ArgsProps) => {
    notification.open(config);
  };

  return { success, openDefault, error, warning, info };
};
export { useNotification };
