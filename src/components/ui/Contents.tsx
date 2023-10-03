"use client";

import { Layout } from "antd";
import React from "react";
import Header from "./Header";

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
      <Header />
      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
