import React, { useState } from "react";
import FieldInput from "../../../../components/fieldInput/FieldInput";
import Button from "../../../../components/button/Button";
import RecentPaymentsTable from "./components/RecentPaymentsTable";

const DuesSection = () => {
  const [formData, setFormData] = useState({
    dues: "78.00",
    perCapita: "0.00",
    massMutual: "0.00",
    mmlBayState: "0.00",
    insuranceCo: "0.00",
    offDutyIns: "0.00",
    privacyProtection: "0.00",
    promissoryNote: "0.00",
    genworth: "0.00",
    charities: "0.00",
    pastDue: "0.00",
    totalOwed: "78.00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, "");

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: numericValue,
      };

      const numericFields = [
        "dues",
        "perCapita",
        "massMutual",
        "mmlBayState",
        "insuranceCo",
        "offDutyIns",
        "privacyProtection",
        "promissoryNote",
        "genworth",
        "charities",
        "pastDue",
      ];

      const total = numericFields.reduce((sum, key) => {
        const val = parseFloat(updatedData[key]) || 0;
        return sum + val;
      }, 0);

      updatedData.totalOwed = total.toFixed(2);

      return updatedData;
    });
  };

  // Field groups based on your arrangement
  const leftFields = [
    ["Dues", formData.dues, "dues"],
    ["Per Capita", formData.perCapita, "perCapita"],
    ["Mass Mutual", formData.massMutual, "massMutual"],
    ["MML Bay State", formData.mmlBayState, "mmlBayState"],
  ];

  const middleFields = [
    ["Insurance Co", formData.insuranceCo, "insuranceCo"],
    ["Off Duty Ins", formData.offDutyIns, "offDutyIns"],
    ["Privacy Protection", formData.privacyProtection, "privacyProtection"],
    ["Promissory Note", formData.promissoryNote, "promissoryNote"],
  ];

  const rightFields = [
    ["Genworth", formData.genworth, "genworth"],
    ["Charities", formData.charities, "charities"],
    ["Past Due", formData.pastDue, "pastDue"],
    ["Total Owed", formData.totalOwed, "totalOwed"],
  ];

  return (
    <div className="duesSection grid gap-[10px]">
      <div className="duesDetailBox w-full border border-[#ccc] bg-[#d1e3ea]">
        <div className="bg-[#1b7398] text-white px-4 py-2 text-sm font-semibold border-b border-black">
          Dues Details
        </div>

        {/* 3-column grid with specific arrangement */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftFields.map(([label, value, name], i) => (
              <div key={i} className="flex items-center gap-2">
                <label className="w-[50%] text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                  {label}:
                </label>
                <FieldInput
                  type="text"
                  name={name}
                  value={`$${value}`}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4">
            {middleFields.map(([label, value, name], i) => (
              <div key={i} className="flex items-center gap-2">
                <label className="w-[50%] text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                  {label}:
                </label>
                <FieldInput
                  type="text"
                  name={name}
                  value={`$${value}`}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightFields.map(([label, value, name], i) => {
              const isTotalOwed = name === "totalOwed"; // check if it's Total Owed
              return (
                <div key={i} className="flex items-center gap-2">
                  <label
                    className={`w-[50%] text-extraSmallDescription montserrat-semibold ${
                      isTotalOwed ? "text-orange-500" : "text-[#010d4a]"
                    }`}
                  >
                    {label}:
                  </label>
                  <FieldInput
                    type="text"
                    name={name}
                    value={`$${value}`}
                    onChange={handleChange}
                    className={`w-full ${
                      isTotalOwed ? "text-orange-500 font-bold" : ""
                    }`}
                    readOnly={isTotalOwed} // optional: make it non-editable
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="btnBlock flex gap-[10px]">
        <Button className="!mx-0" label="Add" />
        <Button className="!mx-0" label="Save" />
        <Button className="!mx-0" label="Cancel" />
      </div>

      <RecentPaymentsTable />

      <div className="btnBlock flex gap-[10px]">
        <Button className="!mx-0" label="Payment Search" />
        <Button className="!mx-0" label="Run Report" />
      </div>
    </div>
  );
};

export default DuesSection;
