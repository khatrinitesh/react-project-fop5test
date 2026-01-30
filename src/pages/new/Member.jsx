import { useEffect } from "react";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";
import { useNavigate } from "react-router-dom";

const Member = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleClear = () => {
    console.log("Clear clicked");
  };

  return (
    <div className="p-5 bg-[#e6edf7] min-h-screen">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="bg-[#fff] border border-gray-300">
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <h2 className="text-md font-bold m-0 text-white">Add New Member</h2>
          </div>

          <div className="space-y-3 p-4">
            <div>
              <label className="text-xs font-semibold">First Name:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="text-xs font-semibold">Last Name:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="text-xs font-semibold">Payroll Number:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="text-xs font-semibold">SSN:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <Button label="Add Member" variant="color1" />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <h2 className="text-md font-bold text-white">Members Search</h2>
          </div>

          {/* Form Area */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 text-sm">
            {/* Row 1 */}
            <div>
              <label className="font-semibold text-xs">First Name:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">Last Name:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">District:</label>
              <select className="h-[35px] w-full border border-gray-300 mt-1 px-2 py-1">
                <option>All</option>
              </select>
            </div>

            {/* Row 2 */}
            <div>
              <label className="font-semibold text-xs">SSN:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">Payroll Number:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">National Number:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            {/* Row 3 */}
            <div>
              <label className="font-semibold text-xs">Status:</label>
              <select className="h-[35px] w-full border border-gray-300 mt-1 px-2 py-1">
                <option>All</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-xs">Type:</label>
              <select className="h-[35px] w-full border border-gray-300 mt-1 px-2 py-1">
                <option>All</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-xs">Badge #:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            {/* Row 4 */}
            <div>
              <label className="font-semibold text-xs">Emblem #:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div className="lg:col-span-2">
              <label className="font-semibold text-xs">Address1:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            {/* Row 5 */}
            <div className="lg:col-span-2">
              <label className="font-semibold text-xs">Address2:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">Address3:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            {/* Row 6 */}
            <div>
              <label className="font-semibold text-xs">City:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="font-semibold text-xs">State:</label>
              <select className="h-[35px] w-full border border-gray-300 mt-1 px-2 py-1">
                <option>Select</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-xs">Zipcode:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            {/* Buttons */}
            <div className="items-start flex gap-2 pt-4">
              <Button
                label="Search"
                onClick={handleSearch}
                className="!mx-0"
                variant="color1"
              />
              <Button
                label="Clear"
                onClick={handleClear}
                className="!mx-0"
                variant="color2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
