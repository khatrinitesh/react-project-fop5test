import React, { useEffect, useState } from "react";

// Access levels
const accessLevels = [
  "Full Access",
  "View / Download",
  "View Only",
  "No Access",
];

// Access data for Front Desk
const frontDeskData = [
  { module: "Dashboard", selected: "View Only" },
  { module: "Member Profile", selected: "View Only" },
  { module: "Grievances", selected: "No Access" },
  { module: "Financials", selected: "No Access" },
  { module: "Reports", selected: "View / Download" },
  { module: "Importing", selected: "No Access" },
  { module: "Dispatch", selected: "View Only" },
  { module: "Apprenticeship", selected: "No Access" },
  { module: "Mail", selected: "View Only" },
  { module: "Calendar", selected: "View Only" },
  { module: "Settings", selected: "No Access" },
];

// Access data for Administrator
const adminData = [
  { module: "Dashboard", selected: "Full Access" },
  { module: "Member Profile", selected: "Full Access" },
  { module: "Grievances", selected: "Full Access" },
  { module: "Financials", selected: "Full Access" },
  { module: "Reports", selected: "Full Access" },
  { module: "Importing", selected: "Full Access" },
  { module: "Dispatch", selected: "Full Access" },
  { module: "Apprenticeship", selected: "Full Access" },
  { module: "Mail", selected: "Full Access" },
  { module: "Calendar", selected: "Full Access" },
  { module: "Settings", selected: "Full Access" },
];

// Role map
const roleAccessMap = {
  "Front Desk": frontDeskData,
  Administrator: adminData,
};

const TableModules = ({ selectedRole }) => {
  const [accessData, setAccessData] = useState([]);

  useEffect(() => {
    setAccessData(roleAccessMap[selectedRole] || []);
  }, [selectedRole]);

  const handleChange = (index, level) => {
    const updated = [...accessData];
    updated[index].selected = level;
    setAccessData(updated);
  };

  return (
    <d>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 text-sm text-center">
          <thead className="bg-[#1b7398] text-white">
            <tr>
              <th className="py-2 px-4 text-left">Module</th>
              <th className="py-2 px-4 text-left">Selected Access</th>
              {accessLevels.map((level) => (
                <th key={level} className="py-2 px-4">
                  {level}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {accessData.map((row, index) => (
              <tr
                key={row.module}
                className={index % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
              >
                <td className="text-left px-4 py-2 font-semibold text-[#010d4a] border border-gray-300">
                  {row.module}
                </td>
                <td className="text-left px-4 py-2 text-black font-semibold border border-gray-300">
                  {row.selected}
                </td>
                {accessLevels.map((level) => (
                  <td key={level} className="border border-gray-300">
                    <input
                      type="radio"
                      name={`access-${index}`}
                      value={level}
                      checked={row.selected === level}
                      onChange={() => handleChange(index, level)}
                      className="accent-black cursor-pointer"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </d>
  );
};

export default TableModules;
