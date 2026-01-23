import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import FieldInput from "../../../../../../components/fieldInput/FieldInput";

const MatterDates = () => {
  const [formData, setFormData] = useState({
    initiationDate: "2025-05-20",
    dateClosed: "",
    reopenDate: "",
    reclosedDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-full   bg-[#f7fbfc] montserrat-medium border border-[#a1b4c4]">
      {/* Header */}
      <div className="bg-[#1b7398] text-white text-[13px] font-semibold px-2 py-[4px] border-b border-[#a1b4c4]">
        Matter Dates:
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-y-[6px] p-2 ">
        {[
          { label: "Initiation Date", name: "initiationDate" },
          { label: "Date Closed", name: "dateClosed" },
          { label: "Re-open Date", name: "reopenDate" },
          { label: "Re-closed Date", name: "reclosedDate" },
        ].map(({ label, name }) => (
          <div
            key={name}
            className="flex items-start md:flex-row flex-col justify-between"
          >
            <label className="text-[#010d4a] md:w-1/2  text-extraSmallDescription  montserrat-medium">
              {label}:
            </label>
            <div className="relative w-full">
              <FieldInput
                type="date"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="!max-w-full !w-full"
              />
              <FaRegCalendarAlt className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1b7398] text-[14px] pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatterDates;
