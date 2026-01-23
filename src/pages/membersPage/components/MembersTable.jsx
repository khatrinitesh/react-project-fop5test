import { useState } from "react";
import { fieldCellData, fieldHeadData } from "../../../constants/constants";
import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";

const MembersTable = () => {
  const borderRight = "border-r-[1px] border-[#1b7398]";

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [data, setData] = useState(fieldCellData);

  const getFieldKey = (index) => {
    switch (index) {
      case 0:
        return "firstName";
      case 1:
        return "lastName";
      case 2:
        return "email";
      case 3:
        return "employeeId";
      case 4:
        return "joinDate";
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
                  className={`px-4 py-[5px] text-extraSmallDescription montserrat-regular cursor-pointer select-none ${
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
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className="montserrat-medium text-extraSmallDescription"
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              <td className={borderRight + " px-4 py-[5px]"}>
                {row.firstName}
              </td>
              <td className={borderRight + " px-4 py-[5px]"}>{row.lastName}</td>
              <td className={borderRight + " px-4 py-[5px]"}>{row.email}</td>
              <td className={borderRight + " px-4 py-[5px]"}>
                {row.employeeId}
              </td>
              <td className={borderRight + " px-4 py-[5px]"}>{row.joinDate}</td>
              <td className={borderRight + " px-4 py-[5px]"}>{row.status}</td>
              <td className="px-4 py-[3px] flex items-center justify-center space-x-2">
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

export default MembersTable;
