import { useState } from "react";
import { borderRight, initialPhoneData, typeOptions } from "./data";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const ContactPhoneNumbersTableSection = () => {
  const [phones, setPhones] = useState(initialPhoneData);

  const handleTypeChange = (id, newType) => {
    setPhones((prev) =>
      prev.map((item) => (item.id === id ? { ...item, type: newType } : item))
    );
  };

  const handleDefaultChange = (id) => {
    setPhones((prev) =>
      prev.map((item) => ({
        ...item,
        isDefault: item.id === id,
      }))
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-extraSmallDescription">
        <thead style={{ backgroundColor: "#8fbacd", color: "black" }}>
          <tr>
            <th
              colspan="5"
              className=" py-[5px] font-normal px-4 bg-[#1b7398] text-white text-smallDescription montserrat-medium w-full text-start"
            >
              Contact Phone Numbers
            </th>
          </tr>
          <tr>
            <th
              className={`text-left px-4 py-[6px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Type
            </th>
            <th
              className={`text-left px-4 py-[6px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Phone #
            </th>
            <th
              className={`text-left px-4 py-[6px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Comments
            </th>
            <th
              className={`text-center px-4 py-[6px] montserrat-regular text-extraSmallDescription ${borderRight}`}
            >
              Set as Default
            </th>
            <th className="text-center px-4 py-[6px] montserrat-regular text-extraSmallDescription">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {phones.map((row, idx) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f3f8fa" : "#d1e3ea",
              }}
            >
              {/* Type Dropdown */}
              <td
                className={`montserrat-regular text-extraSmallDescription px-4 py-[6px] ${borderRight}`}
              >
                {row.type}
              </td>

              {/* Phone Number */}
              <td
                className={`px-4 py-[6px]  montserrat-regular text-extraSmallDescription ${borderRight}`}
              >
                {row.phone}
              </td>

              {/* Comments */}
              <td
                className={`px-4 py-[6px]  montserrat-regular text-extraSmallDescription ${borderRight}`}
              >
                {row.comments}
              </td>

              {/* Set as Default */}
              <td
                className={`px-4 py-[6px]  montserrat-regular  text-extraSmallDescription ${borderRight}`}
              >
                <div className="items-center justify-center flex">
                  <input
                    type="checkbox"
                    checked={row.isDefault}
                    onChange={() => handleDefaultChange(row.id)}
                  />
                </div>
              </td>

              {/* Actions */}
              <td className="px-4 py-[6px] flex items-center space-x-2 justify-center">
                <button title="Save">
                  <FaRegEye className="text-[#1b7398] text-[15px]" />
                </button>
                <button title="Cancel">
                  <FaEdit className="text-[#1b7398] text-[15px]" />
                </button>
                <button title="Return to Members">
                  <FaRegTrashAlt className="text-[#1b7398] text-[15px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactPhoneNumbersTableSection;
