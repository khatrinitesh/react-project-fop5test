import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onDateChange, borderVariant = "gray" }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);

    if (onDateChange) {
      onDateChange(date);
    }
  };

  const borderClass =
    borderVariant === "blue" ? "border-[#1b7398]" : "border-[#ccc]";

  return (
    <div>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd-MMM-yyyy"
        placeholderText="dd-mmm-yyyy"
        className={`
          w-full
          h-[35px]
          outline-none
          px-2
          border
          ${borderClass}
          bg-white
          text-sm
        `}
      />
    </div>
  );
};

export default DatePickerComponent;
