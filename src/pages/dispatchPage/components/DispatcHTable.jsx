import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import { useState } from "react";
import { fieldCellData, fieldHeadData } from "./dispatchData";

const borderRight = "border-r-[1px] border-[#1b7398]";

const DispatcHTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [data, setData] = useState(fieldCellData);

  const getFieldKey = (index) => {
    switch (index) {
      case 0:
        return "project";
      case 1:
        return "contractor";
      case 2:
        return "startDate";
      case 3:
        return "requestDate";
      case 4:
        return "requestBy";
      case 5:
        return "comments";
      default:
        return null;
    }
  };

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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {fieldHeadData.map((col, index) => {
              const key = getFieldKey(index);
              const isLast = index === fieldHeadData.length - 1;

              return (
                <th
                  key={col.id}
                  className={`px-4 py-[3px] text-extraSmallDescription poppins-semibold cursor-pointer select-none
          ${isLast ? "text-center" : "text-left"}
          ${index < fieldHeadData.length - 1 ? borderRight : ""}`}
                  onClick={() => key && sortData(key)}
                >
                  <div
                    className={`flex gap-1 ${
                      isLast ? "justify-center" : "items-center"
                    }`}
                  >
                    <span>{col.label}</span>
                    {!isLast && key && renderSortIcon(key)}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              {[
                row.project,
                row.contractor,
                row.startDate,
                row.requestDate,
                row.requestBy,
                row.comments,
              ].map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-[3px] text-extraSmallDescription poppins-regular ${
                    colIndex < fieldHeadData.length - 1 ? borderRight : ""
                  }`}
                >
                  {value}
                </td>
              ))}
              <td className="px-4 py-[3px] space-x-2 flex items-center justify-center">
                <button className="cursor-pointer" title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button className="cursor-pointer" title="Edit">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button className="cursor-pointer" title="Delete">
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

export default DispatcHTable;
