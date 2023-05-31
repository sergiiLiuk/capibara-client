import classNames from "classnames";
import React, { forwardRef } from "react";

type Ref = HTMLInputElement;

type InputType = "text" | "email" | "password";

type Props = {
  placeholder?: string;
  className?: string;
  type?: InputType;
  readonly?: boolean;
  error?: boolean;
};

export const Input = forwardRef<Ref, Props>((props, ref) => {
  const {
    type = "text",
    className,
    placeholder,
    error,
    readonly,
    ...rest
  } = props;
  return (
    <input
      ref={ref}
      className={classNames(
        "bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1.5 focus:outline-none",
        error
          ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
          : "",
        className
      )}
      placeholder={placeholder}
      disabled={readonly}
      type={type}
      {...rest}
    />
  );
});
