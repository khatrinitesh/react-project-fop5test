import { FaEdit, FaTrash } from "react-icons/fa";
import { beneficiariesData } from "./components/data";
import { useState } from "react";
import FieldDropdown from "./../../../../components/fieldDropdown/FieldDropdown";

const BeneficiariesTableSection = () => {
  const [data, setData] = useState(beneficiariesData);

  const handleRelationshipChange = (index, event) => {
    const updated = [...data];
    updated[index].relationship = event.target.value;
    setData(updated);
  };

  const relationshipOptions = [
    { value: "Spouse", label: "Spouse" },
    { value: "Child", label: "Child" },
  ];

  return (
    <div className="w-full overflow-x-auto border border-[#ccc]">
      <table className="w-full text-left border-collapse text-extraSmallDescription montserrat-regular">
        <thead>
          <tr>
            <th
              colSpan="13"
              className="p-[5px]  bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription text-start"
            >
              Beneficiaries
            </th>
          </tr>
          <tr className="bg-[#8db9cb] text-black montserrat-semibold text-extraSmallDescription">
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Full Name
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[15%]">
              Relationship
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Insurance Type
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[15%]">
              Percentage
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Notes
            </th>
            <th className="p-2 border-r-[#1b7398] w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#f2f9ff]" : "bg-[#d3e6f5]"}
            >
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.fullName}
              </td>

              {/* Relationship Dropdown */}
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                <FieldDropdown
                  value={item.relationship}
                  onChange={(e) => handleRelationshipChange(index, e)}
                  options={relationshipOptions}
                  className="bg-transparent !border-0"
                />
              </td>

              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.insuranceType}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.percentage}
              </td>
              <td className="p-2 border-r border-[#1b7398] text-black montserrat-medium">
                {item.notes || ""}
              </td>
              <td className="p-2 border-r border-[#1b7398] flex gap-2 items-center">
                <button title="Edit">
                  <FaEdit className="text-[#1b7398] text-extraSmallDescription" />
                </button>
                <button title="Delete">
                  <FaTrash className="text-[#1b7398] text-extraSmallDescription" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiariesTableSection;
