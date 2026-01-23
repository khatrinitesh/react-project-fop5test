import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import FieldInput from "../../../../../../components/fieldInput/FieldInput";

const EmploymentInfoSection = () => {
  const [formData, setFormData] = useState({
    localName: "Local 1212",
    classification: "",
    drugTested: "Yes",
    unionJoinDate: "2000-07-10",
    classroomHours: "",
    drugTestDate: "2018-07-10",
    hireDate: "2000-07-10",
    classroomCredit: "",
    retDate: "",
    department: "",
    dateCredited: "",
    endOfWatch: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="employmentInfoBox w-full bg-white">
        <div className="bg-[#1b7398] text-white px-4 py-2 text-smallDescription montserrat-medium">
          Employment Info
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["Local Name", formData.localName, "localName"],
            ["Classification", formData.classification, "classification"],
            [
              "Drug Tested",
              formData.drugTested,
              "drugTested",
              "select",
              ["Yes", "No"],
            ],
            [
              "Union Join Date",
              formData.unionJoinDate,
              "unionJoinDate",
              "date",
            ],
            ["Classroom Hours", formData.classroomHours, "classroomHours"],
            ["Drug Test Date", formData.drugTestDate, "drugTestDate", "date"],
            ["Hire Date", formData.hireDate, "hireDate", "date"],
            ["Classroom Credit", formData.classroomCredit, "classroomCredit"],
            ["Ret. Date", formData.retDate, "retDate", "date"],
            ["Department", formData.department, "department"],
            ["Date Credited", formData.dateCredited, "dateCredited", "date"],
            ["End of Watch", formData.endOfWatch, "endOfWatch", "date"],
          ].map(([label, value, name, type = "text", options], idx) => (
            <div key={idx} className="flex items-center gap-2">
              <label className="w-[35%] text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                {label}:
              </label>

              {type === "select" ? (
                <select
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="w-full h-[] !bg-[#f2f5ff] border border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold md:max-w-[50%]"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : type === "date" ? (
                <div className="relative w-full md:max-w-[50%]">
                  <input
                    type="date"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="w-full !bg-[#f2f5ff] border-[1px] border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold pr-8 "
                  />
                  <FaRegCalendarAlt className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1b7398] text-sm pointer-events-none " />
                </div>
              ) : (
                <div className="relative w-full md:max-w-[50%]">
                  <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="w-full !bg-[#f2f5ff] border-[1px] border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold pr-8"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmploymentInfoSection;
