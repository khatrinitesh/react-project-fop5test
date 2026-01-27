import React, { useState } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";

const ChangeEnrollments = () => {
  const [formData, setFormData] = useState({
    enrollmentType: "Active Members Dues",
    applyPayPeriod: "04 - 2/15/2026",
    currentRateFilter: "",
    memberStatus: "All",
    memberType: "All",
    rateCode: "Active Members - Dues",
    billPeriod: "",
    accountNumber: "",
    checkNumber: "",
    enrollmentAmount: "36.64",
    isSentToCity: false,
  });

  const enrollmentTypeOptions = ["Active Members Dues", "Associate Members"];
  const payPeriodOptions = ["03 - 2/1/2026", "04 - 2/15/2026"];
  const memberStatusOptions = ["All", "Active", "Inactive"];
  const memberTypeOptions = ["All", "Full-Time", "Part-Time"];
  const rateCodeOptions = ["Active Members - Dues", "Special Rate"];
  const billPeriodOptions = ["", "Jan 2026", "Feb 2026", "Mar 2026"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Apply Enrollment Changes:", formData);
  };

  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Change Enrollments</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSubmit}>
            {/* Enrollment Type */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Enrollment Type:
              </label>
              <div className="w-2/3">
                <select
                  name="enrollmentType"
                  value={formData.enrollmentType}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {enrollmentTypeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Apply changed enrollments PP */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Apply changed enrollments PP:
              </label>
              <div className="w-2/3">
                <select
                  name="applyPayPeriod"
                  value={formData.applyPayPeriod}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {payPeriodOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Only change enrollments with current rate */}
            <div className="mb-2 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Only change enrollments with current rate:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="currentRateFilter"
                  value={formData.currentRateFilter}
                  onChange={handleChange}
                  placeholder="Optional rate filter"
                  borderVariant="gray"
                />
              </div>
            </div>
            <p className="text-[11px] italic text-gray-600 mb-3 ml-[33%]">
              (leave this blank to enroll all members of the selected status and
              type)
            </p>

            {/* Member Status */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Member Status:
              </label>
              <div className="w-2/3">
                <select
                  name="memberStatus"
                  value={formData.memberStatus}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {memberStatusOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Member Type */}
            <div className="mb-4 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Member Type:
              </label>
              <div className="w-2/3">
                <select
                  name="memberType"
                  value={formData.memberType}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {memberTypeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-[#010d4a] mb-2">
              New Enrollment
            </h3>

            {/* Rate Code */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Rate Code:
              </label>
              <div className="w-2/3">
                <select
                  name="rateCode"
                  value={formData.rateCode}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 bg-white"
                >
                  {rateCodeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bill Period */}
            <div className="mb-3 flex items-center gap-3">
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
                    (opt) => opt && <option key={opt}>{opt}</option>,
                  )}
                </select>
              </div>
            </div>

            {/* Account Number */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Account Number:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Check # */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Check #:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="checkNumber"
                  value={formData.checkNumber}
                  onChange={handleChange}
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Enrollment Amount */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Enrollment Amount $:
              </label>
              <div className="w-2/3">
                <FieldInput
                  name="enrollmentAmount"
                  value={formData.enrollmentAmount}
                  onChange={handleChange}
                  borderVariant="gray"
                />
              </div>
            </div>

            {/* Entered By */}
            <div className="mb-3 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Entered By:
              </label>
              <span className="text-xs font-semibold">Velarium Pm</span>
            </div>

            {/* Is Sent To City */}
            <div className="mb-5 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/3">
                Is Sent To City:
              </label>
              <input
                type="checkbox"
                name="isSentToCity"
                checked={formData.isSentToCity}
                onChange={handleChange}
                className="w-4 h-4"
              />
            </div>

            <div className="w-full max-w-xs">
              <Button type="submit" label="Apply Changes" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeEnrollments;
