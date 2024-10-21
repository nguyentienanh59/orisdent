import { useLoading } from '@/common/context/useLoading';
import service from '@/common/services/apis';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useRef, useState } from 'react';
import style from './CheckDental.module.scss';
import DentalTable from './components/CheckDentalTable';
import DentalModal from './components/DentalModal';
import { useBoolean } from './utils/useBoolean';
import { useNotification } from '@/common/utils/notification/useNotification';
import { PanelRefInterface } from './CheckDental.model';

const CheckDental = () => {
  const paramInitial: A = {
    pageInfo: {
      pageSize: 10,
      pageNo: 1,
      total: 0
    },
    searchInfo: {
      searchOperator: 0,
      searchRule: [
        {
          keyWord: '',
          searchColumns: []
        }
      ]
    }
  };
  const { showLoading, closeLoading } = useLoading();
  const [checkDentalData, setCheckDentalData] = useState<A>();
  const [checkDentalDataApi, setCheckDentalDataApi] = useState<A[]>([]);
  const [totalRecordCount, setTotalRecordCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [param, setParam] = useState<A>(paramInitial);
  const [isView, setIsView] = useState<boolean>();
  const [isOpenPanel, handleOpenPanel, handleClosePanel] = useBoolean(false);
  const notification = useNotification();
  const panelRef = useRef<PanelRefInterface>(null);

  const paginationProps = {
    totalRecordCount,
    currentPage
  };
  const getList = async () => {
    try {
      showLoading('checkDental');
      const { data } = await service.dental.getAllDental(param);
      setCheckDentalDataApi(data?.baseDatas);
      setTotalRecordCount(data?.totalRecordCount);
      setCurrentPage(data?.pageIndex);
      closeLoading('checkDental');
    } catch (e) {
      console.log(e);
      closeLoading('checkDental');
    }
  };

  useEffect(() => {
    getList();
  }, [param]);

  const handleSearchParam = (value: string) => {
    const dataGridFilter = { ...param };
    if (dataGridFilter.searchInfo && dataGridFilter.pageInfo) {
      dataGridFilter.pageInfo.pageNo = 1;
      dataGridFilter.searchInfo.searchRule = [{ keyWord: value }];
      setParam(dataGridFilter);
    }
  };

  const nameSearch = async (value: string) => {
    handleSearchParam(value.trim());
  };

  const openPanel = (data?: A, isView?: boolean) => {
    panelRef.current?.onOpen(data, isView);
    setIsView(isView);
    setCheckDentalData(data);
  };

  const handleDelete = async (id: string) => {
    try {
      showLoading('delete');
      const model = {
        id: id ?? ''
      };
      const { data } = await service.dental.deleteDental(model);
      if (data) {
        getList();
      }
      notification.success('Xóa thành công');
      closeLoading('delete');
    } catch (e) {
      console.log(e);
      closeLoading('delete');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setParam((currentParam: A) => ({
      ...currentParam,
      pageInfo: {
        ...currentParam.pageInfo,
        pageNo: page,
        total: totalRecordCount
      }
    }));
  };

  const handleChangePageDefault = () => {
    // setParam(paramInitial);
    setCurrentPage(1);
  };

  return (
    <div className={style.knowledge}>
      <Card title="Mã khách hàng">
        <div className={style.knowledgeWrap}>
          <div className="control-bar">
            <div className="control-bar-left">
              <Button type="text" onClick={() => openPanel()}>
                <PlusCircleOutlined className="icon-font-size"></PlusCircleOutlined>
                <span style={{ fontSize: '13px' }}>Tạo mã khách hàng</span>
              </Button>
            </div>
            <div className={style.headerPC}>
              <Search onSearch={nameSearch} placeholder="Tìm kiếm tên" allowClear />
            </div>
          </div>
        </div>
        <DentalTable
          handleEdit={openPanel}
          list={checkDentalDataApi ?? []}
          pagination={paginationProps}
          handleDelete={handleDelete}
          setPage={handlePageChange}
        />
        <DentalModal
          isOpenPanel={isOpenPanel}
          handleClosePanel={handleClosePanel}
          handleOpenPanel={handleOpenPanel}
          dataDental={checkDentalData}
          isView={isView}
          refreshList={getList}
          ref={panelRef}
          handleChangePageDefault={handleChangePageDefault}
        />
      </Card>
    </div>
  );
};

export default CheckDental;
