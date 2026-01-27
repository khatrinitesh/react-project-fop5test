import React, { useState } from "react";
import Button from "../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaRegFile } from "react-icons/fa";

const AddOrderPayment = () => {
  const [formData, setFormData] = useState({
    dateOfReceipt: "2026-01-27",
    accountNumber: "",
    checkNumber: "",
    totalPaid: "",
    method: "Credit Card",
    orderId: "",
  });

  const paymentMethods = ["Credit Card", "Cash", "Check", "Wire Transfer"]; // example options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your save logic here
  };

  return (
    <div className="addOrderPaymentPage contentBlock">
      {/* Title */}
      <SectionTitleComponent>
        <FaRegFile className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Add Order Payment</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        <div className="w-full bg-[#edf4f7] p-[10px] rounded-md max-w-xl ">
          <form onSubmit={handleSave} className="">
            {/* Date of Receipt */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="dateOfReceipt"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Date of Receipt:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="dateOfReceipt"
                  name="dateOfReceipt"
                  type="date"
                  value={formData.dateOfReceipt}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                />
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

            {/* Total $ Paid */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="totalPaid"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Total $ Paid:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="totalPaid"
                  name="totalPaid"
                  type="text"
                  value={formData.totalPaid}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                  placeholder="Enter total paid"
                />
              </div>
            </div>

            {/* Method */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="method"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Method:
              </label>
              <div className="w-3/4">
                <select
                  id="method"
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="text-xs w-full h-[35px] border border-[#ccc] rounded px-2 py-1 bg-white montserrat-medium"
                >
                  {paymentMethods.map((methodOption) => (
                    <option key={methodOption} value={methodOption}>
                      {methodOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Order ID */}
            <div className="mb-4 flex items-center gap-3">
              <label
                htmlFor="orderId"
                className="text-xs font-bold text-[#010d4a] w-1/4"
              >
                Order ID:
              </label>
              <div className="w-3/4">
                <FieldInput
                  id="orderId"
                  name="orderId"
                  type="text"
                  value={formData.orderId}
                  onChange={handleChange}
                  className=""
                  borderVariant="gray"
                  placeholder="Enter order ID"
                />
              </div>
            </div>

            {/* Entered By */}
            <div className="mb-6 flex items-center gap-3">
              <label className="text-xs font-bold text-[#010d4a] w-1/4">
                Entered By:
              </label>
              <span className="text-xs font-semibold">Velarium Pm</span>
            </div>

            {/* Save Button */}
            <div className="w-full max-w-xs">
              <Button type="submit" label="Save" className="!mx-0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOrderPayment;
