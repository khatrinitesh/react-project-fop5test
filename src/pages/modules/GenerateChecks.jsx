import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";

const GenerateChecks = () => {
  const [formData, setFormData] = useState({
    year: "2026",
    markAsSent: true,
  });

  const yearOptions = ["2024", "2025", "2026"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generate Checks Data:", formData);
    // API call logic here
  };
  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Generate RHBJPT Checks</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit}>
            {/* Year */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Year:
              </label>
              <div className="w-2/3">
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {yearOptions.map((yr) => (
                    <option key={yr}>{yr}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mark Member as Check Sent */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Mark Member as Check Sent:
              </label>
              <div className="w-2/3">
                <input
                  type="checkbox"
                  name="markAsSent"
                  checked={formData.markAsSent}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
              </div>
            </div>

            {/* Button */}
            <div className="mt-2">
              <Button type="submit" label="Generate Checks" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateChecks;
