import React, { useState } from "react";
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
  trainingCourseCellData,
  trainingCourseHeadData,
} from "./apprenticeshipData";

const TabContentTrainingCourseList = () => {
  const [data, setData] = useState(trainingCourseCellData);
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
            {trainingCourseHeadData.map((col, index) => (
              <th
                key={col.id}
                className={`px-4 py-[3px]  text-extraSmallDescription montserrat-medium cursor-pointer select-none ${
                  index < trainingCourseHeadData.length - 1 ? borderRight : ""
                } ${col.key === "hours" ? "text-center w-[5%]" : "text-left"}`}
                onClick={() => sortData(col.key)}
              >
                <div className="flex items-center gap-1 ">
                  {col.label}
                  {renderSortIcon(col.key)}
                </div>
              </th>
            ))}
            <th className="px-4 py-[3px] w-[6%] text-extraSmallDescription poppins-semibold">
              Action
            </th>
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
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.type}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.name}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.date}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.time}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium text-center px-4 py-[3px] ${borderRight}`}
              >
                {row.hours}
              </td>
              <td
                className={`text-extraSmallDescription montserrat-medium px-4 py-[3px] ${borderRight}`}
              >
                {row.instructor}
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

export default TabContentTrainingCourseList;
