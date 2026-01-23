import React from "react";

const FieldDropdown = ({
  id,
  name,
  value,
  onChange,
  options = [],
  maxLength = null,
  disabled = false,
  className = "",
  bgVariant = "blue", // default is blue
}) => {
  const bgClass = bgVariant === "blue" ? "bg-[#f2f5ff]" : "bg-white";
  const borderClass =
    bgVariant === "blue" ? "border-[#747eb2]" : "border-[#1b7398]";
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(e) => {
        if (!maxLength || e.target.value.length <= maxLength) {
          onChange(e);
        }
      }}
      disabled={disabled}
      className={`
        h-[35px]
        text-extraSmallDescription montserrat-medium
        rounded 
        px-3 
        text-sm 
        ${bgClass}
        border-[1px]
        ${borderClass}
        text-[#000]
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#747eb2]
        disabled:opacity-60 
        ${className}
      `}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FieldDropdown;
