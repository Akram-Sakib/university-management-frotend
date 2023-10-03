"use client";

import { Table, TablePaginationConfig } from "antd";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig: TablePaginationConfig | false = showPagination
    ? {
        pageSize,
        total: totalPages,
        pageSizeOptions: ["5", "10", "20", "50", "100"],
        onChange: onPaginationChange,
        showSizeChanger,
      }
    : false;

  return (
    <Table
      style={{ marginTop: "20px" }}
      columns={columns}
      loading={false}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
