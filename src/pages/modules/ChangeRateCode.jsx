import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const ChangeRateCode = () => {
  const [formData, setFormData] = useState({
    duesType: "Active Members Dues",
    rateCodeTitle: "Active Members - Dues",
    billPeriod: "",
    accountNumber: "",
    checkNumber: "",
    deductionAmount: "36.64",
    description: "Active Members - Dues",
  });

  const duesTypeOptions = ["Active Members Dues", "Associate Members Dues"];
  const rateCodeOptions = ["Active Members - Dues", "Special Assessment"];
  const billPeriodOptions = ["", "January 2026", "February 2026", "March 2026"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Change Rate Code</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          {" "}
          <form onSubmit={handleSubmit}>
            {/* Dues Type */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Dues Type:
              </label>
              <div className="w-2/3">
                <select
                  name="duesType"
                  value={formData.duesType}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {duesTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rate Code (Title Changed Here) */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Rate Code Title:
              </label>
              <div className="w-2/3">
                <select
                  name="rateCodeTitle"
                  value={formData.rateCodeTitle}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {rateCodeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bill Period */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Bill Period:
              </label>
              <div className="w-2/3">
                <select
                  name="billPeriod"
                  value={formData.billPeriod}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  <option value="">Select Bill Period</option>
                  {billPeriodOptions.map(
                    (option) =>
                      option && <option key={option}>{option}</option>,
                  )}
                </select>
              </div>
            </div>

            {/* Account Number */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Account Number:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Enter account number"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Check # */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Check #:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="checkNumber"
                  value={formData.checkNumber}
                  onChange={handleChange}
                  placeholder="Enter check number"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Deduction Amount */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Deduction Amount:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="deductionAmount"
                  value={formData.deductionAmount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Description:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full max-w-xs">
              <Button type="submit" label="Save Payment" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeRateCode;
