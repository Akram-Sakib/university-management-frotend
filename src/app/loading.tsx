import React from "react";
import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip="Loading" size={"large"} />
      </Space>
    </Row>
  );
};

export default Loading;
