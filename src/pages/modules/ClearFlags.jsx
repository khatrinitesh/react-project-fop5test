import { useState } from "react";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "./../../components/button/Button";

const ClearFlags = () => {
  const [selectedFlag, setSelectedFlag] = useState("15 - Need to Send Ass");

  const flagOptions = [
    "10 - Missing Document",
    "12 - Incorrect Details",
    "15 - Need to Send Ass",
    "18 - Pending Approval",
    "20 - Verification Required",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clearing flag:", selectedFlag);

    // 👉 Call API here
    // clearFlagAPI(selectedFlag)
  };

  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Clear Flag</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full  bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit} className="grid gap-2">
            <div className="flex gap-2 items-center">
              {/* Label */}
              <label className="text-sm font-semibold text-[#010d4a] whitespace-nowrap">
                Flag to clear:
              </label>

              {/* Dropdown */}
              <select
                value={selectedFlag}
                onChange={(e) => setSelectedFlag(e.target.value)}
                className="text-sm h-[32px] border border-[#bbb] rounded px-2 bg-white min-w-[260px]"
              >
                {flagOptions.map((flag) => (
                  <option key={flag}>{flag}</option>
                ))}
              </select>
            </div>

            {/* Button */}
            <div className="btnBlock">
              <Button type="submit" label="Clear Flags" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClearFlags;
