import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const ActionBar = ({ title, children }: Props) => {
  return (
    <div>
      <h1
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
