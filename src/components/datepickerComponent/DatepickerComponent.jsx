import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        placeholderText="Select month & year"
        className="border border-gray-300 rounded px-2 py-1"
      />
    </div>
  );
};

export default DatePickerComponent;
