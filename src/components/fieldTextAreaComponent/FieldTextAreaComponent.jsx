import React from "react";

const FieldTextAreaComponent = ({
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
}) => {
  return (
    <textarea
      className={`w-full p-2 border bg-white border-gray-300 rounded focus:outline-none ${className}`}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default FieldTextAreaComponent;
