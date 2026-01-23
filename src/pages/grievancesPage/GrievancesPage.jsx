import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import FieldInput from "./../../components/fieldInput/FieldInput";
import { useState } from "react";
import FieldDropdown from "./../../components/fieldDropdown/FieldDropdown";
import { GRIEVANCE_STATUS } from "../../constants/constants";
import Button from "./../../components/button/Button";
import TableRecently from "./components/tableRecently/TableRecently";
import { useNavigate } from "react-router-dom";

const GrievancesPage = () => {
  const [formData, setFormData] = useState({
    memberNumber: "",
    firstName: "",
    lastName: "",
    last4ssn: "",
    dueDate: "",
    grievanceType: "",
    assignedTo: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/matter-details");
  };
  return (
    <div className="grievancesPage" onClick={handleClick}>
      <SectionTitleComponent>
        <FaExclamationCircle className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Grievances:</strong>{" "}
          <span className="text-white">Lookup</span>
        </h2>
      </SectionTitleComponent>

      <div className="innerContent grid gap-[30px] w-full p-[20px]">
        <div className="fillFormBlock">
          <form className="grid gap-[10px]">
            <SearchComponent
              placeholder="Quick Grievance Search"
              maxLength={50}
              disabled={false}
              className="w-full md:max-w-[20%] rounded-full"
            />

            <div className="innerFillForm bg-[#d1e3ea] border-[1px] border-[#b1bcc6] p-[10px] flex flex-col md:flex-row gap-[30px] md:gap-[50px] w-full md:px-[50px] py-[20px]">
              {/* Left Side */}
              <div className="leftContent md:w-[35%] flex flex-col gap-[10px]">
                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="memberNumber"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Member ID#:
                  </label>
                  <FieldInput
                    id="memberNumber"
                    name="memberNumber"
                    type="text"
                    value={formData.memberNumber}
                    onChange={handleChange}
                    placeholder=""
                    className="w-1/2 rounded-[5px]"
                    borderVariant="blue"
                  />
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="firstName"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    First Name:
                  </label>
                  <FieldInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=""
                    className="w-1/2 rounded-[5px]"
                    borderVariant="blue"
                  />
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="lastName"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Last Name:
                  </label>
                  <FieldInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder=""
                    className="w-1/2"
                    borderVariant="blue"
                  />
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="last4ssn"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Case Number:
                  </label>
                  <FieldInput
                    id="last4ssn"
                    name="last4ssn"
                    type="text"
                    value={formData.last4ssn}
                    onChange={handleChange}
                    placeholder=""
                    className="w-1/2 rounded-[5px]"
                    borderVariant="blue"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="rightContent md:w-[35%] flex flex-col gap-[10px]">
                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="assignedTo"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Assigned To:
                  </label>
                  <FieldInput
                    id="assignedTo"
                    name="assignedTo"
                    type="text"
                    value={formData.assignedTo}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full rounded-[5px]"
                    borderVariant="blue"
                  />
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center relative">
                  <label
                    htmlFor="dueDate"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Due Date:
                  </label>
                  <div className="relative w-full">
                    <FieldInput
                      id="dueDate"
                      name="dueDate"
                      type="text" // use text for custom dd-mmm-yyyy
                      value={formData.dueDate}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full rounded-[5px]"
                      borderVariant="blue"
                    />
                    <FaCalendarAlt className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1b7398] pointer-events-none" />
                  </div>
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="grievanceType"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Grievance Type:
                  </label>
                  <FieldInput
                    id="grievanceType"
                    name="grievanceType"
                    type="text"
                    value={formData.grievanceType}
                    onChange={handleChange}
                    placeholder=""
                    className="w-1/2 rounded-[5px]"
                    borderVariant="blue"
                  />
                </div>

                <div className="fieldGrp w-full flex gap-[10px] items-center">
                  <label
                    htmlFor="status"
                    className="text-extraSmallDescription font-medium text-[#122159] montserrat-medium w-1/2"
                  >
                    Grievance Status:
                  </label>
                  <FieldDropdown
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={GRIEVANCE_STATUS}
                    maxLength={10}
                    disabled={false}
                    className="w-full rounded-[5px]"
                    bgVariant="white"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="btnBlock flex items-start gap-[10px]">
              <Button label="Search" className="!mx-0" />
              <Button
                label="Clear"
                className="!mx-0"
                onClick={() =>
                  setFormData({
                    memberNumber: "",
                    firstName: "",
                    lastName: "",
                    last4ssn: "",
                    dueDate: "",
                    grievanceType: "",
                    assignedTo: "",
                    status: "",
                  })
                }
              />
              <Button label="Add Matter" className="!mx-0" />
            </div>
          </form>
        </div>

        <TableRecently />
      </div>
    </div>
  );
};

export default GrievancesPage;
