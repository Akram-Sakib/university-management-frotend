"use client";

import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
