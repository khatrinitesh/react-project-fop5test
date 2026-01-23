import { useState } from "react";
import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import {
  borderRight,
  instructorCellData,
  instructorHeadData,
} from "./apprenticeshipData";

const TabContentInstructorList = () => {
  const [data, setData] = useState(instructorCellData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // 🔹 Sorting logic
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

  // 🔹 Sorting icon renderer
  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {instructorHeadData.map((col, index) => (
              <th
                key={col.id}
                className={`text-left px-4 py-[3px] text-extraSmallDescription montserrat-medium cursor-pointer select-none ${
                  index < instructorHeadData.length - 1 ? borderRight : ""
                }`}
                onClick={() => sortData(col.key)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {renderSortIcon(col.key)}
                </div>
              </th>
            ))}
            <th className="px-4 py-[3px]  w-[6%]  text-extraSmallDescription montserrat-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {instructorCellData.map((row) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: row.id % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.firstName}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.lastName}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.email}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.phone}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.location}
              </td>
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

export default TabContentInstructorList;
