import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const SearchBooster = () => {
  const [filters, setFilters] = useState({
    supporterName: "",
    donationType: "All",
    donationYear: "2026",
  });

  const donationTypeOptions = ["All", "One-Time", "Recurring"];
  const yearOptions = ["2024", "2025", "2026"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Filters:", filters);
  };

  const handleClear = () => {
    setFilters({
      supporterName: "",
      donationType: "All",
      donationYear: "2026",
    });
  };
  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Booster Member Search</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSearch}>
            {/* Supporter Name */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Supporter/Name:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="supporterName"
                  value={filters.supporterName}
                  onChange={handleChange}
                  placeholder="Enter supporter name"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Donations Type */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Donations:
              </label>
              <div className="w-2/3">
                <select
                  name="donationType"
                  value={filters.donationType}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {donationTypeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Donation Year */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Donation Year:
              </label>
              <div className="w-2/3">
                <select
                  name="donationYear"
                  value={filters.donationYear}
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
              <div className="w-[120px]">
                <Button type="submit" label="Search" className="!mx-0" />
              </div>
              <div className="w-[120px]">
                <Button
                  type="button"
                  label="Clear"
                  className="!mx-0"
                  onClick={handleClear}
                />
              </div>
            </div>

            {/* Version */}
            <div className="mt-6 text-center text-[11px] text-gray-500">
              Version 1.3.2
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBooster;
