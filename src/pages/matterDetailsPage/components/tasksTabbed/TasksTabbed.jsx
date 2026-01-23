import { useState } from "react";
import {
  FaRegEye,
  FaEdit,
  FaRegTrashAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import { taskData } from "./data";

const TasksTabbed = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [data, setData] = useState(taskData);

  const handleSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <FaSort className="inline ml-1" />;
    }
    if (sortConfig.direction === "asc") {
      return <FaSortUp className="inline ml-1" />;
    }
    return <FaSortDown className="inline ml-1" />;
  };

  const headers = [
    { label: "Task", key: "task" },
    { label: "Start Date", key: "startDate" },
    { label: "Meeting Date", key: "meetingDate" },
    { label: "Response Due", key: "responseDue" },
    { label: "Response Date", key: "responseDate" },
    { label: "Status", key: "status" },
    { label: "Assigned To", key: "assignedTo" },
    { label: "Action", key: "action" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Table Head */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={() =>
                  header.key !== "action" ? handleSort(header.key) : undefined
                }
                className={`text-left px-3 py-[6px] montserrat-semibold border border-[#b2bcc7] ${
                  header.key !== "action" ? "cursor-pointer select-none" : ""
                }`}
              >
                {header.label}
                {header.key !== "action" && getSortIcon(header.key)}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, idx) => {
            // Row highlight logic
            let rowBg = idx % 2 === 0 ? "bg-[#ecfcfd]" : "bg-[#ecfcfd]";
            if (row.status === "In Process") rowBg = "bg-[#e0f8c3]";
            if (row.status === "Not Started") rowBg = "bg-[#b2d9e8]";

            return (
              <tr key={row.id} className={`${rowBg}`}>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.task}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.startDate}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.meetingDate}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.responseDue}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.responseDate}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.status}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  {row.assignedTo}
                </td>
                <td className="px-3 py-[5px] border border-[#b2bcc7]">
                  <div className="flex space-x-2 text-[#1b7398] items-center">
                    <FaRegEye className="cursor-pointer" title="View" />
                    <FaEdit className="cursor-pointer" title="Edit" />
                    <FaRegTrashAlt className="cursor-pointer" title="Delete" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTabbed;
