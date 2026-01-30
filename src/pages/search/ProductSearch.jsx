import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

import FieldInput from "../../components/fieldInput/FieldInput";

const SectionHeader = ({ title }) => (
  <div className="bg-[#1b7398]  border-b border-gray-300 px-4 py-2">
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

const ProductSearch = () => {
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
          <SectionHeader title="Add New Product" />

          <div className="p-4 space-y-3">
            <div>
              <Label>Name:</Label>
              <FieldInput className="w-full " />
            </div>

            <Button label="Add Product" variant="color1" className="!mx-0" />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <SectionHeader title="🔍 Products Search" />

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {/* Row 1 */}
            <div>
              <Label>Product Id:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" className="h-4 w-4" defaultChecked />
              <Label>Active</Label>
            </div>

            <div>
              <Label>Product Name:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Row 2 */}
            <div>
              <Label>Unit Price:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            <div>
              <Label>Product Category:</Label>
              <Select>
                <option>All</option>
              </Select>
            </div>

            <div>
              <Label>Product Description:</Label>
              <FieldInput className="w-full mt-1 h-[28px]" />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-3">
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
    </div>
  );
};

export default ProductSearch;
