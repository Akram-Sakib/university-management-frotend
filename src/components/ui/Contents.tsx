"use client";

import { Layout } from "antd";
import React from "react";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const Contents = ({ children }: Props) => {
  const base = "admin";

  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
