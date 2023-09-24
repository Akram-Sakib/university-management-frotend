"use client";

import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const Contents = ({ children }: Props) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </Content>
  );
};

export default Contents;
