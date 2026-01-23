import FieldInput from "./../../../components/fieldInput/FieldInput";
import { useState } from "react";
import Button from "./../../../components/button/Button";
import FieldTextAreaComponent from "../../../components/fieldTextAreaComponent/FieldTextAreaComponent";
import FieldDropdown from "./../../../components/fieldDropdown/FieldDropdown";
import { paymentMethodData } from "./paymentsData";
import DatePicker from "react-datepicker";

const ImportPaymentsComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    memberNumber: "",
    last4ssn: "",
    paymentDate: "", // Payment Date will show placeholder "/ /"
    travelFee: "0.00", // default value
    paymentMethod: "Check",
    lateFee: "0.00", // default value
    initiationFee: "0.00", // default value
    fines: "0.00", // default value
    dues: "0.00", // default value
    dba: "0.00", // default value
    notes: "",
    totalPaid: "0.00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="tabContent">
      <div className="innerContent gap-[20px] grid">
        <div className="fillFormBlock">
          <div className="flex flex-col md:flex-row grid-cols-2 mb-[10px]  bg-[#d1e3ea] py-[30px] border-[1px] border-[#cccfdb] gap-[10px] md:max-w-[60%]">
            <div className="leftContent grid gap-[10px] ">
              <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                <label
                  htmlFor="memberNumber"
                  className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                >
                  Last Name
                </label>
                <div className="ml-3 flex-1 w-full">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder=""
                    className="rounded !border-[#1b7398]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-3 rounded-[10px] w-ful">
                <label
                  htmlFor="memberNumber"
                  className="w-[40%] text-extraSmallDescription  text-[#122159] montserrat-semibold"
                >
                  First Name
                </label>
                <div className="ml-3 flex-1 w-full">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=""
                    className="rounded !border-[#1b7398]"
                  />
                </div>
              </div>
            </div>
            <div className="rightContent grid gap-[10px] md:gap-[30px]">
              <div className="flex items-center justify-between px-3 rounded-[10px]">
                <label
                  htmlFor="memberNumber"
                  className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                >
                  Member #:
                </label>
                <div className="ml-3 flex-1 w-full">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.memberNumber}
                    onChange={handleChange}
                    placeholder=""
                    className="rounded !border-[#1b7398]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-3 rounded-[10px]">
                <label
                  htmlFor="memberNumber"
                  className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                >
                  Last 4 SSN:
                </label>
                <div className="ml-3 flex-1 w-full">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.last4ssn}
                    onChange={handleChange}
                    placeholder=""
                    className="rounded !border-[#1b7398]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btnBlock">
            <Button className="!mx-0" label="Search" />
          </div>
        </div>
        <div className="detailBlock w-full bg-[#d1e3ea] border-[1px] border-[#cccfdb]">
          <span className="haedTitle block text-white montserrat-regular text-smallDescription bg-[#1b7398] w-full px-[10px] py-[5px] border-[1px] border-black">
            Add Payment
          </span>
          <div className="innerDetail grid gap-[20px] py-[10px] grid-cols-1 md:grid-cols-2">
            <div className="leftContent grid grid-cols-1 md:grid-cols-2  gap-[10px]">
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                  >
                    Payment Date:
                  </label>
                  <div className="ml-3 flex-1 w-full">
                    <DatePicker
                      id="paymentDate"
                      selected={formData.paymentDate}
                      onChange={(date) =>
                        setFormData((prev) => ({ ...prev, paymentDate: date }))
                      }
                      placeholderText="/ /" // custom placeholder
                      className="w-full px-2 py-1 text-smallDescription bg-white border-[1px]  !border-[#1b7398] rounded"
                      dateFormat="MM/dd/yyyy" // optional format
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%]  text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                  >
                    Travel Fee:
                  </label>
                  <div className="ml-3 flex-1 w-full">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.travelFee}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                  >
                    Payment Method:
                  </label>
                  <div className="ml-3 flex-1 w-full">
                    <FieldInput
                      id="paymentMethod"
                      name="paymentMethod"
                      type="text"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                  >
                    Late Fee:
                  </label>
                  <div className="ml-3 flex-1 w-full">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.lateFee}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold "
                  >
                    Initiation Fee:
                  </label>
                  <div className="ml-3 flex-1 ">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.initiationFee}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                  >
                    Fines:
                  </label>
                  <div className="ml-3 flex-1 ">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.fines}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold "
                  >
                    Dues:
                  </label>
                  <div className="ml-3 flex-1 ">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.dues}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                  <label
                    htmlFor="memberNumber"
                    className="w-[40%] text-extraSmallDescription font-medium text-[#122159] montserrat-semibold "
                  >
                    DBA:
                  </label>
                  <div className="ml-3 flex-1 w-full">
                    <FieldInput
                      id="memberNumber"
                      name="memberNumber"
                      type="text"
                      value={formData.dba}
                      onChange={handleChange}
                      placeholder=""
                      className="rounded !border-[#1b7398]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <div className="flex items-start flex-col justify-between px-3 rounded-[10px] w-full gap-[10px]">
                <label
                  htmlFor="memberNumber"
                  className="text-extraSmallDescription font-medium text-[#122159] montserrat-semibold"
                >
                  Notes:
                </label>
                <div className=" w-full">
                  <FieldTextAreaComponent
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder=""
                    className="rounded !border-[#1b7398]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-3 rounded-[10px] w-full">
                <label
                  htmlFor="memberNumber"
                  className="text-extraSmallDescription font-medium text-[#eb973a] montserrat-semibold"
                >
                  Total Paid:
                </label>
                <div className="ml-3 flex-1 w-full">
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.totalPaid}
                    onChange={handleChange}
                    placeholder=""
                    className="text-[#eb973a] md:max-w-[50%] rounded !border-[#1b7398]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btnBlock flex gap-[10px]">
          <Button className="!mx-0" label="Add" />
          <Button className="!mx-0" label="Save" />
          <Button className="!mx-0" label="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default ImportPaymentsComponent;
