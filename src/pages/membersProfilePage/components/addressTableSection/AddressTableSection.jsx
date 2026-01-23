import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { addressCellData, addressHeadData } from "./addressTableData";

const borderRight = "border-r-[1px] border-[#1b7398]";
const typeOptions = ["Office", "Home", "Email"];

const AddressTableSection = () => {
  const [data, setData] = useState(addressCellData);
  const toggleBadAddress = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, badAddress: !item.badAddress } : item
      )
    );
  };

  const handleTypeChange = (id, newType) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, type: newType } : item))
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {addressHeadData.map((col, index) => (
              <th
                key={col.id}
                className={`text-left px-4 py-[3px] text-extraSmallDescription montserrat-semibold ${
                  index < addressHeadData.length - 1 ? borderRight : ""
                }`}
              >
                {col.label}
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
              {/* Type (Dropdown + selected text) */}
              <td className={`px-4 py-[3px] montserrat-medium ${borderRight}`}>
                <select
                  value={row.type}
                  onChange={(e) => handleTypeChange(row.id, e.target.value)}
                  className="bg-transparent outline-none text-extraSmallDescription"
                >
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>

              {/* Notes */}
              <td
                className={`px-4 py-[3px] text-extraSmallDescription montserrat-medium ${borderRight}`}
              >
                {row.notes}
              </td>

              {/* Bad Address (Checkbox) */}
              <td className={`px-4 py-[3px] ${borderRight}`}>
                <input
                  type="checkbox"
                  checked={row.badAddress}
                  onChange={() => toggleBadAddress(row.id)}
                />
              </td>

              {/* Actions */}
              <td className="px-4 py-[3px] flex items-center space-x-2 justify-center">
                <button title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
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

export default AddressTableSection;
