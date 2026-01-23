import React, { useState } from "react";
import { borderRight, initialLogs } from "./historyTableData";

const HistoryTableLastSection = () => {
  const [logs] = useState(initialLogs);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-[12px]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              "Field Name",
              "Updated Value",
              "Previous Value",
              "Updated By",
              "Date",
              "Time",
            ].map((label, idx, arr) => (
              <th
                key={idx}
                className={`text-left px-3 py-[6px] montserrat-semibold ${
                  idx < arr.length - 1 ? borderRight : ""
                }`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {logs.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.field}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.updatedValue}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.previousValue}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.updatedBy}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.date}
              </td>
              <td className="px-3 py-[5px] montserrat-medium text-extraSmallDescription">
                {row.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTableLastSection;
