"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/features/department/departmentApi";
import { Button, Input, Space, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounce } from "@/redux/hooks";
import dayjs from "dayjs";

const Department = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortyBy] = useState<string>("");
  const [sortOrder, setOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debounceTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debounceTerm) {
    query["searchTerm"] = debounceTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  // @ts-ignore
  const departments = data?.departments;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting department");
    try {
      await deleteDepartment(id);
      message.success("Department deleted successfully");
    } catch (err: any) {
      message.error("Something went wrong");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (data: any) => data && dayjs(data).format("MMM D, YYYY hh:mm A"),
      sorter: true,
    },
    {
      title: "Action",
      render: (data: any) => (
        <Space>
          {/* <Button type="primary" onClick={() => console.log(data)}>
            <EyeOutlined />
          </Button> */}
          <Link href={`/super_admin/department/edit/${data?.id}`}>
            <Button type="primary">
              <EditOutlined />
            </Button>
          </Link>
          <Button type="primary" danger onClick={() => deleteHandler(data?.id)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortyBy(field as string);
    setOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortyBy("");
    setOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
        ]}
      />
      <ActionBar title="Department List">
        <Input.Search
          placeholder="Search"
          type="text"
          size="large"
          style={{
            width: "20%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Space>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button type="primary" onClick={resetFilters}>
              <ReloadOutlined />
            </Button>
          )}
        </Space>
      </ActionBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Department;
