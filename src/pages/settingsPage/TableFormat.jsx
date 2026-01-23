import { useState } from "react";
import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import { fieldCellData, fieldHeadData } from "./data";

const TableFormat = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [data, setData] = useState(fieldCellData);

  const borderRight = "border-r-[1px] border-[#1b7398]";

  const getFieldKey = (index) => {
    switch (index) {
      case 0:
        return "firstName";
      case 1:
        return "lastName";
      case 2:
        return "email";
      case 3:
        return "phone";
      case 4:
        return "role";
      case 5:
        return "status";
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
    if (sortConfig.key !== key) return <FaSort className="text-xs" />;
    return sortConfig.direction === "ascending" ? (
      <FaSortUp className="text-xs" />
    ) : (
      <FaSortDown className="text-xs" />
    );
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-sm">
        {/* Table Header */}
        <thead style={{ backgroundColor: "#1b7398", color: "#fff" }}>
          <tr>
            {fieldHeadData.map((col, index) => {
              const key = getFieldKey(index);
              const isLast = index === fieldHeadData.length - 1;

              return (
                <th
                  key={col.id}
                  className={`px-4 py-[8px] montserrat-semibold text-smallDescription cursor-pointer select-none ${
                    isLast ? "text-center" : "text-left"
                  } ${index < fieldHeadData.length - 1 ? borderRight : ""}`}
                  onClick={() => key && sortData(key)}
                >
                  <div
                    className={`flex items-center gap-1 ${
                      isLast ? "justify-center" : ""
                    }`}
                  >
                    {col.label}
                    {key && renderSortIcon(key)}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className="text-[13px] montserrat-regular"
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              <td
                className={`${borderRight} px-4 py-[6px] montserrat-medium text-smallDescription text-[#010d4a]`}
              >
                {row.firstName}
              </td>
              <td
                className={`${borderRight} px-4 py-[6px] montserrat-medium text-smallDescription`}
              >
                {row.lastName}
              </td>
              <td
                className={`${borderRight} px-4 py-[6px] montserrat-medium text-smallDescription`}
              >
                {row.email}
              </td>
              <td
                className={`${borderRight} px-4 py-[6px] montserrat-medium text-smallDescription`}
              >
                {row.phone}
              </td>
              <td
                className={`${borderRight} px-4 py-[6px] montserrat-medium text-smallDescription`}
              >
                {row.role}
              </td>

              <td
                className={`${borderRight} px-4 py-[6px]  montserrat-medium text-smallDescription`}
                style={{
                  color: row.status === "Inactive" ? "red" : "#000", // status coloring
                }}
              >
                {row.status}
              </td>

              <td className="px-4 py-[6px] flex items-center justify-center space-x-3">
                <button title="View" className="hover:scale-110 transition">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button title="Edit" className="hover:scale-110 transition">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button title="Delete" className="hover:scale-110 transition">
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

export default TableFormat;
