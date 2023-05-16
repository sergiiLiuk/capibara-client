import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

type ButtonType = "button" | "submit";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "primary-outline"
  | "secondary-outline"
  | "success-outline"
  | "danger-outline"
  | "warning-outline"
  | "info-outline"
  | "light-outline"
  | "dark-outline";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  // rounded: boolean;
  variant: ButtonVariant;
  className?: string;
  type?: ButtonType;
};

export const Button = ({
  children,
  // rounded,
  variant,
  className,
  onClick,
  ...props
}: Props) => (
  <button
    onClick={onClick}
    className={classNames(
      "px-4 py-1 cursor-pointer select-none [outline:none] shadow-md focus:ring-[1px] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner",
      // rounded ? 'rounded': '',
      variant === "primary"
        ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 text-white"
        : "",
      variant === "secondary"
        ? "bg-slate-500 hover:bg-slate-400 focus:ring-slate-300 text-white"
        : "",
      variant === "warning"
        ? "bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300 text-white"
        : "",
      variant === "light"
        ? "bg-white hover:bg-grey-100 focus:ring-grey-300 text-gray-500"
        : "",
      variant === "success"
        ? "bg-green-700 hover:bg-green-600 focus:ring-green-500 text-white"
        : "",
      variant === "danger"
        ? "bg-red-700 hover:bg-red-600 focus:ring-red-500 text-white"
        : "",
      variant === "dark"
        ? "bg-gray-700 hover:bg-gray-600 focus:ring-gray-500 text-white"
        : "",
      variant === "info"
        ? "bg-cyan-700 hover:bg-cyan-600 focus:ring-cyan-500 text-white"
        : "",
      variant === "primary-outline"
        ? "text-blue-500 border-[1px] border-blue-500 hover:bg-blue-500 focus:ring-blue-500 hover:text-white"
        : "",
      variant === "secondary-outline"
        ? "border-[1px] border-slate-500 hover:bg-slate-500 focus:ring-slate-300  text-slate-500 hover:text-white"
        : "",
      variant === "warning-outline"
        ? "hover:bg-yellow-500 border-[1px] border-yellow-500 focus:ring-yellow-500 text-yellow-500  hover:text-white"
        : "",
      variant === "light-outline"
        ? "border-[1px] border-grey-300 hover:bg-gray-100 focus:ring-gray-300 text-gray-400"
        : "",
      variant === "success-outline"
        ? "text-green-700 border-[1px] border-green-700 hover:bg-green-700 focus:ring-green-500 hover:text-white"
        : "",
      variant === "danger-outline"
        ? "border-[1px] hover:bg-red-700 focus:ring-red-500 text-red-700 border-red-700 hover:text-white"
        : "",
      variant === "dark-outline"
        ? "border-[1px] hover:bg-gray-600 border-gray-700 focus:ring-gray-500 text-gray-700 hover:text-white"
        : "",
      variant === "info-outline"
        ? "text-cyan-700 border-[1px] border-cyan-700 hover:bg-cyan-700 focus:ring-cyan-500 hover:text-white"
        : "",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  // rounded: false,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  // rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "primary-outline",
    "secondary-outline",
    "success-outline",
    "danger-outline",
    "warning-outline",
    "info-outline",
    "light-outline",
    "dark-outline",
  ]),
};
