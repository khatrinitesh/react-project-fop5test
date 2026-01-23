import React, { useState } from "react";
import {
  FaRegEye,
  FaEdit,
  FaRegTrashAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";

const TableAddRoles = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // 👉 Update or replace this array with your new data
  const [roles, setRoles] = useState([
    {
      id: 1,
      roleName: "Super Admin",
      description: "Has complete control over all users, settings, and data.",
      status: "Active",
    },
    {
      id: 2,
      roleName: "Editor",
      description:
        "Can edit and update records but cannot delete or manage users.",
      status: "Active",
    },
    {
      id: 3,
      roleName: "Reviewer",
      description: "Can view and approve data but cannot make edits.",
      status: "Active",
    },
    {
      id: 4,
      roleName: "Guest User",
      description: "Limited access. Can only view basic data.",
      status: "Active",
    },
  ]);

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sorted = [...roles].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setRoles(sorted);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-[#b2bcc7] border-collapse text-sm">
        <thead className="bg-[#1b7398] text-white">
          <tr>
            <th
              onClick={() => sortData("roleName")}
              className="px-4 py-2 text-left cursor-pointer select-none border-r border-[#b2bcc7]"
            >
              <div className="flex items-center gap-1">
                Role Name {renderSortIcon("roleName")}
              </div>
            </th>
            <th
              onClick={() => sortData("description")}
              className="px-4 py-2 text-left cursor-pointer select-none border-r border-[#b2bcc7]"
            >
              <div className="flex items-center gap-1">
                Description {renderSortIcon("description")}
              </div>
            </th>
            <th
              onClick={() => sortData("status")}
              className="px-4 py-2 text-left cursor-pointer select-none border-r border-[#b2bcc7]"
            >
              <div className="flex items-center gap-1">
                Status {renderSortIcon("status")}
              </div>
            </th>
            <th className="px-4 py-2 text-center w-[8%] ">Action</th>
          </tr>
        </thead>

        <tbody>
          {roles.map((role, index) => (
            <tr
              key={role.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
              className="text-[#010d4a]"
            >
              <td className="px-4 py-2 border-r border-[#b2bcc7] montserrat-medium text-[#010d4a]">
                {role.roleName}
              </td>
              <td className="px-4 py-2 border-r border-[#b2bcc7] montserrat-medium text-black">
                {role.description}
              </td>
              <td className="px-4 py-2 border-r border-[#b2bcc7] montserrat-medium text-black">
                {role.status}
              </td>
              <td className="px-4 py-2 flex justify-center items-center gap-3">
                <button title="View">
                  <FaRegEye className="text-[#1b7398] text-[18px]" />
                </button>
                <button title="Edit">
                  <FaEdit className="text-[#1b7398] text-[18px]" />
                </button>
                <button title="Delete">
                  <FaRegTrashAlt className="text-[#1b7398] text-[18px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAddRoles;
