"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Space } from "antd";
import React from "react";

type FormProps = {
  name: string;
  type?: string;
  size?: "small" | "large";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: FormProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Space direction="vertical" >
        {label ? <label htmlFor={id}>{label}</label> : null}
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            type === "password" ? (
              <Input.Password
                type={type}
                size={size}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            ) : (
              <Input
                type={type}
                size={size}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            )
          }
        />
      </Space>
    </>
  );
};

export default FormInput;
