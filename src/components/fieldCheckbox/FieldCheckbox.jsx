import React, { useState } from "react";

const FieldCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {/* Checkbox box */}
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 flex items-center justify-center border-2  ${
          checked
            ? "border-[#010d4a] bg-[#010d4a]"
            : "border-[#227093] bg-white"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Label text */}
      <span className="text-[#010d4a] text-smallDescription montserrat-medium">
        {label}
      </span>
    </label>
  );
};

export default FieldCheckbox;
