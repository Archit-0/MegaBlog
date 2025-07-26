import React, { useId } from "react";

const Input = React.forwardRef(
  (
    {
      lebel,
      type = "text",
      placeholder = "",
      value = "",
      onChange = () => {},
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div>
        {lebel && <label className="inline-block mb-1 pl-1 bg">{lebel}</label>}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
