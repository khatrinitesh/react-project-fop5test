import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import { savedTemplatesData } from "./reportsData";

const TableSavedTemplates = () => {
  const [data, setData] = useState(savedTemplatesData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[key] ?? "";
      const bValue = b[key] ?? "";

      if (typeof aValue === "boolean") {
        return direction === "ascending" ? aValue - bValue : bValue - aValue;
      }

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sorted);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="!text-[#b5f5f8]" />;
    return sortConfig.direction === "ascending" ? (
      <FaSortUp className="!text-[#b5f5f8]" />
    ) : (
      <FaSortDown className="!text-[#b5f5f8]" />
    );
  };

  const toggleCheckbox = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, selected: !row.selected } : row
    );
    setData(updatedData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse border border-[#b1bcc6]">
        <thead style={{ backgroundColor: "#8fbacd", color: "#07134f" }}>
          <tr>
            <th
              colSpan={6}
              className="text-white bg-[#1b7398] text-extraSmallDescription montserrat-semibold text-left p-[10px]"
            >
              Saved Templates
            </th>
          </tr>
          <tr>
            {[
              { label: "Report Name", key: "reportName", align: "left" },
              { label: "Description", key: "description", align: "left" },
              { label: "Type", key: "type", align: "left" },
              { label: "Date Created", key: "dateCreated", align: "left" },
              { label: "Created By", key: "createdBy", align: "left" },
              { label: "Select", key: "selected", align: "center" },
            ].map((col, idx) => (
              <th
                key={idx}
                className={`w-1/6 px-4 py-[6px] montserrat-semibold border-r border-[#1b7398] cursor-pointer ${
                  col.align === "center" ? "text-center" : "text-left"
                }`}
                onClick={() => sortData(col.key)}
              >
                <div
                  className={`flex items-center gap-1 ${
                    col.align === "center" ? "justify-center" : ""
                  }`}
                >
                  {col.label} {renderSortIcon(col.key)}
                </div>
              </th>
            ))}
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
              <td className="w-1/6 px-4 py-[6px] text-[13px] text-left montserrat-semibold border-r border-[#1b7398]">
                {row.reportName}
              </td>
              <td className="w-1/6 px-4 py-[6px] text-[13px] text-left montserrat-medium border-r border-[#1b7398]">
                {row.description}
              </td>
              <td className="w-1/6 px-4 py-[6px] text-[13px] text-left montserrat-medium border-r border-[#1b7398]">
                {row.type}
              </td>
              <td className="w-1/6 px-4 py-[6px] text-[13px] text-left montserrat-medium border-r border-[#1b7398]">
                {row.dateCreated}
              </td>
              <td className="w-1/6 px-4 py-[6px] text-[13px] text-left montserrat-medium border-r border-[#1b7398]">
                {row.createdBy}
              </td>
              <td className="w-1/6 px-4 py-[6px] text-center montserrat-medium">
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => toggleCheckbox(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSavedTemplates;
