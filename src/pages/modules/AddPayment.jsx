import { useState } from "react";
import Button from "../../components/button/Button"; // Assuming you have this component
import { payPeriodTypes, payPeriods, methods } from "../../constants/constants";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaMoneyBill } from "react-icons/fa";

const AddPayment = () => {
  const [formData, setFormData] = useState({
    payrollNumber: "",
    payPeriodType: "bi-weekly",
    payPeriod: payPeriods[0],
    dateOfReceipt: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    billPeriod: "",
    accountNumber: "",
    checkNumber: "",
    totalPaid: "0.00",
    method: "check",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="addPayment contentBlock">
        {/* Title */}
        <SectionTitleComponent>
          <FaMoneyBill className="text-[var(--color6)]" />
          <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
            <strong>Add Payment</strong>
          </h2>
        </SectionTitleComponent>
        <div className="innerContent p-5">
          <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
            <form onSubmit={handleSubmit} className="grid gap-5">
              {/* Payroll # */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="payrollNumber"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Payroll #:
                </label>
                <input
                  type="text"
                  id="payrollNumber"
                  name="payrollNumber"
                  value={formData.payrollNumber}
                  onChange={handleChange}
                  className=" text-xs montserrat-medium text-[#010d4a] bg-white w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Pay period type */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="payPeriodType"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Pay period type:
                </label>
                <select
                  id="payPeriodType"
                  name="payPeriodType"
                  value={formData.payPeriodType}
                  onChange={handleChange}
                  className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white text-xs montserrat-medium text-[#010d4a]"
                >
                  {payPeriodTypes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pay period */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="payPeriod"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Pay period:
                </label>
                <select
                  id="payPeriod"
                  name="payPeriod"
                  value={formData.payPeriod}
                  onChange={handleChange}
                  className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white  text-xs montserrat-medium text-[#010d4a]"
                >
                  {payPeriods.map((period, index) => (
                    <option key={index} value={period}>
                      {period}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date of Receipt */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="dateOfReceipt"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Date of Receipt:
                </label>
                <input
                  type="date"
                  id="dateOfReceipt"
                  name="dateOfReceipt"
                  value={formData.dateOfReceipt}
                  onChange={handleChange}
                  className="bg-white  text-xs montserrat-medium text-[#010d4a] w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Bill Period */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="billPeriod"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Bill Period:
                </label>
                <input
                  type="text"
                  id="billPeriod"
                  name="billPeriod"
                  value={formData.billPeriod}
                  onChange={handleChange}
                  className="bg-white  text-xs montserrat-medium text-[#010d4a] w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Account Number */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="accountNumber"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Account Number:
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="bg-white  text-xs montserrat-medium text-[#010d4a] w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Check # */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="checkNumber"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Check #:
                </label>
                <input
                  type="text"
                  id="checkNumber"
                  name="checkNumber"
                  value={formData.checkNumber}
                  onChange={handleChange}
                  className="bg-white  text-xs montserrat-medium text-[#010d4a] w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Total $ Paid */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="totalPaid"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Total $ Paid:
                </label>
                <input
                  type="number"
                  id="totalPaid"
                  name="totalPaid"
                  min="0"
                  step="0.01"
                  value={formData.totalPaid}
                  onChange={handleChange}
                  className="bg-white  text-xs montserrat-medium text-[#010d4a] w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px]"
                />
              </div>

              {/* Method */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label
                  htmlFor="method"
                  className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1"
                >
                  Method:
                </label>
                <select
                  id="method"
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full h-[35px] border border-[#1b7398] rounded px-2 py-[4px] bg-white  text-xs montserrat-medium text-[#010d4a]"
                >
                  {methods.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Entered By */}
              <div className="flex items-center justify-between px-1 rounded-[10px] w-full">
                <label className="text-xs montserrat-medium md:w-[40%] text-[#010d4a] mb-1">
                  Entered By:
                </label>
                <div className="w-full h-[35px] flex items-center border border-[#1b7398] rounded px-2 py-[4px] bg-white  text-xs montserrat-medium text-[#010d4a]">
                  Velarium Pm
                </div>
              </div>

              {/* Save button */}
              <div className="btnBlock flex justify-start pt-3">
                <Button className="!mx-0" type="submit" label="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPayment;
