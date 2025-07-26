import React from "react";

const Button = ({
  childern,
  classname = "",
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={`px-4 py-2 rounded-lg ${classname} ${bgColor} ${textColor}`}
    >
      {childern}
    </button>
  );
};

export default Button;
