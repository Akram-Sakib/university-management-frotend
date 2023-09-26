import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

type Props = {
  items: {
    label: string;
    link: string;
  }[];
};

const UMBreadCrumb = ({ items }: Props) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span> {item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems} />;
};

export default UMBreadCrumb;
