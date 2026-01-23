import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const UploadProfileSection = () => {
  const [formData, setFormData] = useState({
    memberId: "12345",
    ssn: "555-12-3456",
    lastName: "Rosen",
    firstName: "Joel",
    middleName: "R",
    gender: "Male",
    dob: "1970-01-01",
    age: "55",
    maritalStatus: "Married",
    status: "Active",
    beneficiary: "Marilania Rosen",
    relation: "Spouse",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full border border-[#ccc] bg-white">
      <div className="bg-[#1b7398] text-white px-4 py-2 text-smallDescription montserrat-medium">
        Profile Information
      </div>

      <div className="p-4 flex flex-col md:flex-row gap-6">
        {/* Photo Upload Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 border border-[#ccc] rounded overflow-hidden bg-gray-100 mb-2">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                No Photo
              </div>
            )}
          </div>
          <label className="text-sm text-[#1b7398] cursor-pointer underline">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[
            ["Member #", formData.memberId, "memberId"],
            ["SSN", formData.ssn, "ssn"],
            [
              "Gender",
              formData.gender,
              "gender",
              "select",
              ["Male", "Female", "Other"],
            ],
            ["*Last Name", formData.lastName, "lastName"],
            ["DOB", formData.dob, "dob", "date"],
            [
              "Marital Status",
              formData.maritalStatus,
              "maritalStatus",
              "select",
              ["Single", "Married", "Divorced"],
            ],
            ["*First Name", formData.firstName, "firstName"],
            ["Age", formData.age, "age"],
            ["Beneficiary", formData.beneficiary, "beneficiary"],
            ["Middle Name", formData.middleName, "middleName"],
            [
              "Status",
              formData.status,
              "status",
              "select",
              ["Active", "Inactive", "Retired"],
            ],
            [
              "Relation",
              formData.relation,
              "relation",
              "select",
              ["Spouse", "Child", "Other"],
            ],
          ].map(([label, value, name, type = "text", options], idx) => (
            <div key={idx} className="flex items-center gap-2">
              <label className="w-[50%] text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                {label}:
              </label>

              {type === "select" ? (
                <select
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="w-full !bg-[#f2f5ff] border-[1px] border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : type === "date" ? (
                <div className="relative w-full">
                  <input
                    type="date"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="w-full !bg-[#f2f5ff] border-[1px] border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold pr-8"
                  />
                  <FaRegCalendarAlt className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1b7398] text-sm pointer-events-none" />
                </div>
              ) : (
                <input
                  type="text"
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="w-full !bg-[#f2f5ff] border-[1px] border-[#6570a9] rounded px-2 py-1 text-extraSmallDescription text-[#010d4a] montserrat-semibold"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadProfileSection;
