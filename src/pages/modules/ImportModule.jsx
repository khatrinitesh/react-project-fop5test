import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";

const ImportModule = () => {
  const [formData, setFormData] = useState({
    format: "Deduction",
    payPeriod: "02 - 1/18/2026",
    file: null,
  });

  const formatOptions = ["Deduction", "Adjustment"];
  const payPeriodOptions = ["01 - 1/4/2026", "02 - 1/18/2026", "03 - 2/1/2026"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Import Data:", formData);
    // Upload logic goes here
  };
  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Import Module</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit}>
            {/* Format */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Format:
              </label>
              <div className="w-2/3">
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {formatOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pay Period */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Pay Period:
              </label>
              <div className="w-2/3">
                <select
                  name="payPeriod"
                  value={formData.payPeriod}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {payPeriodOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-5 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                File Path:
              </label>
              <div className="w-2/3">
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="text-xs w-full border border-[#ccc] rounded bg-white file:mr-3 file:py-1 file:px-3 file:border-0 file:text-xs file:bg-[#dfe8ff] file:text-[#010d4a] hover:file:bg-[#c9d7f5]"
                />
              </div>
            </div>

            {/* Import Button */}
            <div className="w-full max-w-[150px]">
              <Button type="submit" label="Import" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImportModule;
