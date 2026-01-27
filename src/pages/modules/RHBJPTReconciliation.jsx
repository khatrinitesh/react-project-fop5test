import { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";

const RHBJPTReconciliation = () => {
  const [filters, setFilters] = useState({
    checkNumber: "",
    reconciled: "All",
    claimYear: "2026",
  });

  const reconciledOptions = ["All", "Yes", "No"];
  const yearOptions = ["2024", "2025", "2026"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Filters:", filters);
  };

  const handleClear = () => {
    setFilters({
      checkNumber: "",
      reconciled: "All",
      claimYear: "2026",
    });
  };

  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>RHBJPT Reconciliation</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit}>
            {/* Check Number */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Check Number:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="checkNumber"
                  value={filters.checkNumber}
                  onChange={handleChange}
                  placeholder="Enter check number"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Reconciled */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Reconciled:
              </label>
              <div className="w-2/3">
                <select
                  name="reconciled"
                  value={filters.reconciled}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {reconciledOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Claim Year */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Claim Year:
              </label>
              <div className="w-2/3">
                <select
                  name="claimYear"
                  value={filters.claimYear}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {yearOptions.map((yr) => (
                    <option key={yr}>{yr}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <div>
                <Button type="submit" label="Search" className="!mx-0" />
              </div>
              <div>
                <Button
                  type="button"
                  label="Clear"
                  className="!mx-0"
                  onClick={handleClear}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RHBJPTReconciliation;
