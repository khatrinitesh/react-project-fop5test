import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import { exportTypes } from "../../constants/constants";
import Button from "./../../components/button/Button";

const ChangeFile = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    setSelectedType(e.target.value);
    console.log("Selected Export Type:", e.target.value);
    // Add your logic to handle selection change here
  };

  return (
    <div className="cateringCalendar contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Change File</strong>
        </h2>
      </SectionTitleComponent>

      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] ">
          <div className="grid gap-5 boxContent max-w-1/2">
            <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
              <label className="text-xs montserrat-medium md:w-[30%] text-[#010d4a] mb-1">
                Export Type:
              </label>
              <div className="w-full">
                <select
                  name="exportType"
                  value={selectedType}
                  onChange={handleChange}
                  className="text-xs montserrat-medium w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white"
                >
                  <option value="">Select Type</option>
                  {exportTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="btnBlock ">
              <Button className="!mx-0" label="Download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeFile;
