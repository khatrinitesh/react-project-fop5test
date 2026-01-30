import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const SectionHeader = ({ title }) => (
  <div className="bg-[#1b7398] px-4 py-2">
    <h2 className="text-[15px] font-bold text-white">{title}</h2>
  </div>
);

const Label = ({ children }) => (
  <label className="text-[12px] font-semibold text-gray-700">{children}</label>
);

const Select = ({ children }) => (
  <select className="h-[35px] w-full border border-gray-300 bg-white px-2 text-sm mt-1">
    {children}
  </select>
);

const MembersSearch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => console.log("Search clicked");
  const handleClear = () => console.log("Clear clicked");

  return (
    <div className="min-h-screen bg-[#dbe7f5] p-6">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <SectionHeader title="Add New Member" />

          <div className="p-4 space-y-3 gap-2 grid">
            <div>
              <Label>First Name:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Last Name:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Payroll Number:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>SSN:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>
            <div className="btnBlock mt-2">
              <Button label="Add Member" variant="color1" className=" mt-2" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <SectionHeader title="🔍 Members Search" />

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {/* Row 1 */}
            <div>
              <Label>First Name:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Last Name:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>District:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>

            {/* Row 2 */}
            <div>
              <Label>SSN:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Payroll Number:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>National Number:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Row 3 */}
            <div>
              <Label>Status:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>

            <div>
              <Label>Type:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>

            <div>
              <Label>Badge #:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Row 4 */}
            <div>
              <Label>Emblem #:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div className="lg:col-span-2">
              <Label>Address1:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Row 5 */}
            <div className="lg:col-span-2">
              <Label>Address2:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Address3:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Row 6 */}
            <div>
              <Label>City:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>State:</Label>
              <Select>
                <option>Select</option>
              </Select>
            </div>

            <div>
              <Label>Zipcode:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-3">
              <Button
                label="Search"
                className="!mx-0"
                onClick={handleSearch}
                variant="color1"
              />
              <Button
                label="Clear"
                className="!mx-0"
                onClick={handleClear}
                variant="color2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersSearch;
