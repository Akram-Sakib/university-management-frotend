import React, { ReactNode } from "react";
import { Layout } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";

type Props = {
  children: ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;