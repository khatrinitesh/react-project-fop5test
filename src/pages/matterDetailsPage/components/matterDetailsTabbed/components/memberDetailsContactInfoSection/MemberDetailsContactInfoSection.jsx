import { useState } from "react";
import FieldInput from "./../../../../../../components/fieldInput/FieldInput";

const MemberDetailsContactInfoSection = () => {
  const [formData, setFormData] = useState({
    firstName: "Joel",
    lastName: "Rosen",
    memberId: "12345",
    unitName: "",
    contactName: "Sgt. Maria Bennett",
    contactRole: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#edf4f7] border border-[#a1b4c4]">
        {/* Member Details Header */}
        <div className="bg-[#1b7398] text-white text-[13px] font-semibold px-2 py-[5px] border-b border-[#a1b4c4]">
          Member Details
        </div>

        {/* Contact Info Header */}
        <div className="bg-[#1b7398] text-white text-[13px] font-semibold px-2 py-[5px] border-b border-[#a1b4c4]">
          Contact Info
        </div>

        {/* Member Details Form */}
        <div className="grid grid-cols-1 gap-[10px] p-[10px]">
          {[
            { label: "First Name:", name: "firstName" },
            { label: "Last Name:", name: "lastName" },
            { label: "Member ID:", name: "memberId" },
            { label: "Unit Name:", name: "unitName" },
          ].map(({ label, name }) => (
            <div
              key={name}
              className="flex flex-col md:flex-row items-start gap-[10px]"
            >
              <label className="md:w-1/2 text-[#010d4a] text-extraSmallDescription  montserrat-medium">
                {label}
              </label>
              <FieldInput
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className=""
              />
            </div>
          ))}
        </div>

        {/* Contact Info Form */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-1.5 p-2">
          {[
            { label: "Contact Name:", name: "contactName", type: "text" },
            { label: "Contact Role:", name: "contactRole", type: "text" },
            { label: "Contact Email:", name: "contactEmail", type: "email" },
            { label: "Contact Phone:", name: "contactPhone", type: "text" },
          ].map(({ label, name, type }) => (
            <div
              key={name}
              className="flex flex-col md:flex-row items-start gap-[10px]"
            >
              <label className="md:w-1/2 text-[#010d4a] text-extraSmallDescription  montserrat-medium">
                {label}
              </label>
              <FieldInput
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsContactInfoSection;
