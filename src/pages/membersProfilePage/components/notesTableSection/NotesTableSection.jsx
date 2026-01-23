import {
  FaEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";
import { logCellData, logHeadData } from "./notesTableData";
import DatePicker from "react-datepicker";

const borderRight = "border-r-[1px] border-[#1b7398]";

const NotesTableSection = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [data, setData] = useState(
    logCellData.map((item) => ({
      ...item,
      date: new Date(item.date),
    }))
  );

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

  const handleDateChange = (date, rowId) => {
    const updatedData = data.map((row) =>
      row.id === rowId ? { ...row, date } : row
    );
    setData(updatedData);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {logHeadData.map((col, index) => (
              <th
                key={col.id}
                className={`text-left px-4 py-[3px] text-extraSmallDescription montserrat-semibold cursor-pointer select-none ${
                  index < logHeadData.length ? borderRight : ""
                }`}
                onClick={() => sortData(col.id)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {renderSortIcon(col.id)}
                </div>
              </th>
            ))}
            <th className="text-left px-4 py-[3px] text-extraSmallDescription montserrat-semibold">
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
                className={`px-4 py-[3px] text-extraSmallDescription montserrat-medium ${borderRight}`}
              >
                {row.notes}
              </td>
              <td
                className={`px-4 py-[3px] text-extraSmallDescription montserrat-medium ${borderRight}`}
              >
                {row.loggedBy}
              </td>
              <td
                className={`px-4 py-[3px] text-extraSmallDescription montserrat-medium ${borderRight}`}
              >
                <div className="flex items-center gap-2">
                  <DatePicker
                    selected={row.date}
                    onChange={(date) => handleDateChange(date, row.id)}
                    dateFormat="MM/dd/yyyy"
                    className="text-extraSmallDescription montserrat-medium rounded px-2 py-[2px] w-[100px]"
                  />
                  <FaRegCalendarAlt className="text-[#1b7398] " />
                </div>
              </td>
              <td className="px-4 py-[3px] flex items-center space-x-2 justify-center">
                {/* <button title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button> */}
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

export default NotesTableSection;
