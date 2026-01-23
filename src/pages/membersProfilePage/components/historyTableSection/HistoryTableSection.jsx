import React from "react";
import {
  FaRegEye,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { historyData } from "./historyData";

const borderRight = "border-r-[1px] border-[#010d4a]";

const HistoryTableSection = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [data, setData] = useState(
    historyData.map((item) => ({
      ...item,
      paymentDate: new Date(item.paymentDate),
      enteredDate: new Date(item.enteredDate),
    }))
  );

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sorted);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
  };

  const handleDateChange = (date, rowId, field) => {
    const updatedData = data.map((row) =>
      row.id === rowId ? { ...row, [field]: date } : row
    );
    setData(updatedData);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-[12px]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              { label: "Payment Method", key: "paymentMethod" },
              { label: "Invoice#", key: "invoice" },
              { label: "Payment Date", key: "paymentDate" },
              { label: "Billing Period", key: "billingPeriod" },
              { label: "Enrollment Type", key: "enrollmentType" },
              { label: "Amount", key: "amount" },
              { label: "Entered By", key: "enteredBy" },
              { label: "Entered Date", key: "enteredDate" },
            ].map((col, index) => (
              <th
                key={col.key}
                className={`text-left px-2 py-[6px] montserrat-semibold cursor-pointer select-none ${
                  index < 7 ? borderRight : ""
                }`}
                onClick={() => sortData(col.key)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {renderSortIcon(col.key)}
                </div>
              </th>
            ))}
            <th className="text-left px-2 py-[6px] montserrat-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td
                className={`px-2 py-[5px] montserrat-semibold ${borderRight}`}
              >
                {row.paymentMethod}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                {row.invoice}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                <DatePicker
                  selected={row.paymentDate}
                  onChange={(date) =>
                    handleDateChange(date, row.id, "paymentDate")
                  }
                  dateFormat="MM/dd/yyyy"
                  className="w-[100px] px-1 py-0.5 text-[12px] montserrat-medium rounded"
                />
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                {row.billingPeriod}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                {row.enrollmentType}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                {row.amount}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                {row.enteredBy}
              </td>
              <td className={`px-2 py-[5px] montserrat-medium ${borderRight}`}>
                <DatePicker
                  selected={row.enteredDate}
                  onChange={(date) =>
                    handleDateChange(date, row.id, "enteredDate")
                  }
                  dateFormat="MM/dd/yyyy"
                  className="w-[100px] montserrat-medium px-1 py-0.5 text-[12px]  rounded"
                />
              </td>
              <td className="px-2 py-[5px] flex justify-center items-center">
                <button title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTableSection;
