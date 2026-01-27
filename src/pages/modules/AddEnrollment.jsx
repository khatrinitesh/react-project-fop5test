import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const AddEnrollment = () => {
  const [formData, setFormData] = useState({
    payrollNumber: "",
    duesType: "Active Members Dues",
    startPayPeriod: "03 - 2/1/2026",
    rateCode: "Active Members - Dues",
    billPeriod: "",
    accountNumber: "",
    checkNumber: "",
    enrollmentAmount: "36.64",
    isSentToCity: false,
  });

  const duesTypeOptions = ["Active Members Dues", "Other Dues Type"];
  const startPayPeriodOptions = ["03 - 2/1/2026", "04 - 2/15/2026"];
  const rateCodeOptions = ["Active Members - Dues", "Other Rate Code"];
  const billPeriodOptions = ["", "Monthly", "Quarterly"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Data:", formData);
    // Add your submission logic here
  };
  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Add Enrollment</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit} className=".empty">
            {/* Payroll # */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="payrollNumber"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Payroll #:
              </label>
              <div className="w-3/4">
                <select
                  id="payrollNumber"
                  name="payrollNumber"
                  value={formData.payrollNumber}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  <option value="">Select Payroll #</option>
                  {/* Add payroll options here */}
                  <option value="Payroll1">Payroll 1</option>
                  <option value="Payroll2">Payroll 2</option>
                </select>
              </div>
            </div>

            {/* Dues Type */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="duesType"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Dues Type:
              </label>
              <div className="w-3/4">
                <select
                  id="duesType"
                  name="duesType"
                  value={formData.duesType}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  {duesTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Start pay period */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="startPayPeriod"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Start pay period:
              </label>
              <div className="w-3/4">
                <select
                  id="startPayPeriod"
                  name="startPayPeriod"
                  value={formData.startPayPeriod}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  {startPayPeriodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rate Code */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="rateCode"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Rate Code:
              </label>
              <div className="w-3/4">
                <select
                  id="rateCode"
                  name="rateCode"
                  value={formData.rateCode}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  {rateCodeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bill Period */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="billPeriod"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Bill Period:
              </label>
              <div className="w-3/4">
                <select
                  id="billPeriod"
                  name="billPeriod"
                  value={formData.billPeriod}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  {billPeriodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option || "Select Bill Period"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Account Number */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="accountNumber"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Account Number:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                  placeholder="Enter account number"
                />
              </div>
            </div>

            {/* Check # */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="checkNumber"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Check #:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="checkNumber"
                  name="checkNumber"
                  type="text"
                  value={formData.checkNumber}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                  placeholder="Enter check number"
                />
              </div>
            </div>

            {/* Enrollment Amount $ */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="enrollmentAmount"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Enrollment Amount $:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="enrollmentAmount"
                  name="enrollmentAmount"
                  type="text"
                  value={formData.enrollmentAmount}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                  placeholder="Enter enrollment amount"
                />
              </div>
            </div>

            {/* Entered By */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/4">
                Entered By:
              </label>
              <span className="text-xs font-semibold">Velarium Pm</span>
            </div>

            {/* Is Sent To City */}
            <div className="mb-6 flex items-center gap-3">
              <label
                htmlFor="isSentToCity"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Is Sent To City:
              </label>
              <input
                id="isSentToCity"
                name="isSentToCity"
                type="checkbox"
                checked={formData.isSentToCity}
                onChange={handleChange}
                className="w-4 h-4"
              />
            </div>

            {/* Add Enrollment Button */}
            <div className="w-full max-w-xs">
              <Button type="submit" label="Add Enrollment" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEnrollment;
