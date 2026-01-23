import { useState } from "react";
import {
  FaRegEye,
  FaEdit,
  FaRegTrashAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import { notesData } from "./data";

const NotesTabbed = () => {
  const [data, setData] = useState(notesData);
  const [sortConfig, setSortConfig] = useState(null);

  const headers = ["note", "loggedBy", "date", "action"];
  const headerLabels = ["Notes", "Logged By", "Date", "Action"];

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

  const renderSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key)
      return <FaSort className="inline ml-1" />;
    if (sortConfig.direction === "asc")
      return <FaSortUp className="inline ml-1" />;
    return <FaSortDown className="inline ml-1" />;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Header */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {headers.map((key, idx) => (
              <th
                key={key}
                className="text-left px-3 py-[6px] border border-[#b2bcc7] montserrat-semibold cursor-pointer select-none"
                onClick={() => key !== "action" && handleSort(key)}
              >
                {headerLabels[idx]}
                {key !== "action" && renderSortIcon(key)}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((entry, idx) => (
            <tr
              key={entry.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.note}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.loggedBy}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {entry.date}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                <div className="flex space-x-2 text-[#1b7398] items-center justify-center">
                  <FaRegEye title="View" className="cursor-pointer" />
                  <FaEdit title="Edit" className="cursor-pointer" />
                  <FaRegTrashAlt title="Delete" className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotesTabbed;
