import { useState } from "react";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import Button from "./../../components/button/Button";
import { FaRegFile } from "react-icons/fa";

const GenerateExceptions = () => {
  const [payPeriod, setPayPeriod] = useState("02 - 1/18/2026");

  const handlePayPeriodChange = (e) => {
    setPayPeriod(e.target.value);
    console.log("Selected Pay Period:", e.target.value);
  };
  return (
    <div className="cateringCalendar contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Generate exceptions for pay period</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form className="">
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="payPeriod"
                className="text-xs font-medium text-[#010d4a] w-1/3"
              >
                Pay period:
              </label>
              <select
                id="payPeriod"
                name="payPeriod"
                value={payPeriod}
                onChange={handlePayPeriodChange}
                className="text-xs w-2/3 h-9 border border-[#1b7398] rounded px-2 py-1 bg-white"
              >
                <option value="02 - 1/18/2026">02 - 1/18/2026</option>
                {/* Add other options here if needed */}
              </select>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <label className="text-xs font-medium text-[#010d4a] w-1/3">
                Entered By:
              </label>
              <span className="text-xs font-normal">Velarium Pm</span>
            </div>

            <div className="btnBlock ">
              <Button className="!mx-0" label="Generate" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateExceptions;
