import { DeleteOutlined, EditOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Paragraph from 'antd/es/typography/Paragraph';
import { IPaginationProps } from '../CheckDental.model';
import styles from './CheckDental.module.scss';

interface IProp {
  list: A[];
  pagination: IPaginationProps;
  setPage: (page: number) => void;
  handleDelete: (id: string) => void;
  handleEdit: (record: A) => void;
}

const DentalTable = (props: IProp) => {
  const { list, pagination, setPage, handleDelete, handleEdit } = props;

  const columns: ColumnsType<A> = [
    {
      title: 'Số thẻ',
      dataIndex: 'numberCard',
      key: 'numberCard',
      className: `tableColumns`,
      render: (_, record) => {
        return <Paragraph className={`${styles.paragraph} cardNo`}>{record.numberCard ?? 'N/A'}</Paragraph>;
      }
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <>
            <Tooltip placement="topLeft" title={<div className="customTooltip">{_}</div>} color="#ffffff" arrow={true}>
              <Paragraph className={`${styles.paragraph} fullName`} ellipsis={{ rows: 2, expandable: false }}>
                {record.name ?? 'N/A'}
              </Paragraph>
            </Tooltip>
            <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
              {record.dateOfBirth}
            </Paragraph>
            <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
              {record.phone}
            </Paragraph>
          </>
        );
      }
    },
    {
      title: 'Răng sứ',
      dataIndex: 'teeth',
      key: 'teeth',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <>
            <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
              {record.teeth ?? 'N/A'}
            </Paragraph>
            <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
              {record.color ?? 'N/A'}
            </Paragraph>
          </>
        );
      }
    },
    {
      title: 'Ngày làm',
      dataIndex: 'dentalDay',
      key: 'dentalDay',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
            {record.startDate ?? 'N/A'}
          </Paragraph>
        );
      }
    },
    {
      title: 'Hạn sử dụng',
      dataIndex: 'expiry',
      key: 'expiry',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
            {record.expiry}
          </Paragraph>
        );
      }
    },
    {
      title: 'Labo/LAB',
      dataIndex: 'labo',
      key: 'labo',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
            {record.labo ?? 'N/A'}
          </Paragraph>
        );
      }
    },
    {
      title: 'Nguồn gốc',
      dataIndex: 'source',
      key: 'source',
      className: `tableColumns`,
      render: (_, record) => {
        return (
          <Paragraph className={styles.paragraph} ellipsis={{ rows: 2, expandable: false }}>
            {record.origin ?? 'N/A'}
          </Paragraph>
        );
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      fixed: 'right',
      className: `tableColumns ${styles.action}`,
      render: (_, record) => (
        <div className="actionclass" style={{ display: 'flex' }}>
          <Button
            type="text"
            icon={<EditOutlined color="#0E2554" style={{ fontSize: '18px' }} />}
            onClick={() => {
              handleEdit(record);
            }}
          />
          <Popconfirm
            title="Delete"
            description="Bạn có muốn xóa khách hang này đi không?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={() => console.log('')}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" icon={<DeleteOutlined color="#0E2554" style={{ fontSize: '18px' }} />} />
          </Popconfirm>
        </div>
      )
    }
  ];

  return (
    <Table
      dataSource={list}
      columns={columns}
      pagination={{
        current: pagination?.currentPage,
        pageSize: 10,
        total: pagination?.totalRecordCount,
        simple: true,
        onChange: setPage
      }}
      locale={{
        emptyText: (
          <>
            <SmileOutlined style={{ marginRight: 5 }} /> Không có bài viết nào được hiển thị
          </>
        )
      }}
      rowKey={(record: A) => record.id ?? new Date().getTime()}
      scroll={{ x: 768 }}
      className="dt-border-table "
      rootClassName={styles.tableKnowledgeData}
    />
  );
};

export default DentalTable;
