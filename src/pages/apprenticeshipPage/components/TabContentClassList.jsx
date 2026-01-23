import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import { useState } from "react";
import { borderRight, classListData } from "./apprenticeshipData";

const TabContentClassList = () => {
  const [data, setData] = useState(classListData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔹 Filtered data by search term
  const filteredData = data.filter(
    (item) =>
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      {/* 🔹 Table */}
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            <th
              className={`text-left px-4 py-[3px] w-[10%] text-extraSmallDescription poppins-semibold cursor-pointer select-none ${borderRight}`}
              onClick={() => sortData("type")}
            >
              <div className="flex items-center gap-1">
                Class Type {renderSortIcon("type")}
              </div>
            </th>
            <th
              className={`text-left px-4 py-[3px] text-extraSmallDescription poppins-semibold cursor-pointer select-none ${borderRight}`}
              onClick={() => sortData("name")}
            >
              <div className="flex items-center gap-1">
                Class Name {renderSortIcon("name")}
              </div>
            </th>
            <th className="px-4 py-[3px] w-[6%] text-extraSmallDescription poppins-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              <td
                className={`px-4 py-[3px] text-extraSmallDescription poppins-regular ${borderRight}`}
              >
                {row.type}
              </td>
              <td
                className={`px-4 py-[3px] text-extraSmallDescription poppins-regular ${borderRight}`}
              >
                {row.name}
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

export default TabContentClassList;
