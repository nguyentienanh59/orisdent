export interface IPaginationProps {
  totalRecordCount: number | undefined;
  currentPage: number;
}

export interface PanelRefInterface {
  onOpen: (data?: A, isView?: boolean) => void;
}
