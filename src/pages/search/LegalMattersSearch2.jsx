import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";
import { useEffect } from "react";

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

const LegalMattersSearch2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => console.log("Search clicked");
  const handleClear = () => console.log("Clear clicked");
  return (
    <div className="min-h-screen bg-[#dbe7f5] p-6">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <SectionHeader title="Add New Legal Matter" />

          <div className="p-4 space-y-3">
            <div>
              <Label>Matter Number:</Label>
              <FieldInput className="w-full mt-1 " />
            </div>

            <div>
              <Label>Title:</Label>
              <FieldInput className="w-full mt-1 " />
            </div>

            <Button
              label="Add Legal Matter"
              variant="color1"
              className="w-full mt-2"
            />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm ">
          <SectionHeader title="🔍 Legal Matters Search" />

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {/* Row 1 */}
            <div>
              <Label>Matter number:</Label>
              <FieldInput className="w-full mt-1 " />
            </div>

            <div>
              <Label>Title:</Label>
              <FieldInput className="w-full mt-1 " />
            </div>

            <div className="hidden lg:block"></div>

            {/* Row 2 */}
            <div>
              <Label>Status:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>

            <div>
              <Label>Matter type:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>
          </div>
          {/* Buttons aligned right like screenshot */}
          <div className="flex items-end gap-3 px-5">
            <Button
              label="Search"
              onClick={handleSearch}
              variant="color1"
              className="!mx-0 px-6"
            />
            <Button
              label="Clear"
              onClick={handleClear}
              variant="color2"
              className="!mx-0 px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMattersSearch2;
