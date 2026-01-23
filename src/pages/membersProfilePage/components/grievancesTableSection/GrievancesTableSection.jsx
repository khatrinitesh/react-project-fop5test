import React, { useState } from "react";
import { initialTasks, statusOptions, taskHeadData } from "./grievancesData";
import DatePicker from "react-datepicker";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const borderRight = "border-r-[1px] border-[#1b7398]";

const GrievancesTableSection = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const updateTaskField = (id, field, value) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, [field]: value } : task
    );
    setTasks(updated);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-[12px]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {taskHeadData.map((label, idx) => (
              <th
                key={idx}
                className={`text-left px-3 py-[6px] montserrat-medium ${
                  idx < taskHeadData.length - 1 ? borderRight : ""
                }`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.caseNumber}
              </td>
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.internalNumber}
              </td>
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.task}
              </td>
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                <DatePicker
                  selected={row.dueDate}
                  onChange={(date) => updateTaskField(row.id, "dueDate", date)}
                  dateFormat="M/d/yyyy"
                  className="w-[100px] px-1 py-0.5 text-[12px] montserrat-medium rounded"
                />
              </td>
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                <select
                  value={row.status}
                  onChange={(e) =>
                    updateTaskField(row.id, "status", e.target.value)
                  }
                  className="bg-transparent outline-none"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-3 py-[5px] flex items-center space-x-2 justify-center">
                <button title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button title="Edit">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button title="Delete">
                  <FaRegTrashAlt className="text-[#1b7398]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GrievancesTableSection;
