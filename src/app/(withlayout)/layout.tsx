"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
