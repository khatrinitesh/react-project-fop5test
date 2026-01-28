import React from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const LegalMattersSearch = () => {
  const handleSearch = () => console.log("Search clicked");
  const handleClear = () => console.log("Clear clicked");
  const handleAdd = () => console.log("Add Legal Matter clicked");
  return (
    <div className="min-h-screen bg-[#e6edf7] p-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="bg-[#fff] border border-gray-300 ">
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <h2 className="text-md font-bold text-white">
              Add New Legal Matter
            </h2>
          </div>

          <div className="space-y-3 p-4">
            <div>
              <label className="text-xs font-semibold">Matter Number:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <div>
              <label className="text-xs font-semibold">Title:</label>
              <FieldInput className="w-full mt-1" />
            </div>

            <Button
              label="Add Legal Matter"
              onClick={handleAdd}
              variant="color1"
            />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <h2 className="text-md font-bold text-white">
              Legal Matters Search
            </h2>
          </div>

          {/* Search Form */}
          <div className="bg-white p-6 border-b border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm items-end">
              <div>
                <label className="font-semibold text-xs">Matter number:</label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div>
                <label className="font-semibold text-xs">Title:</label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div>
                <label className="font-semibold text-xs">Status:</label>
                <select className="w-full border outline-none bg-white border-gray-300 mt-1 px-2 py-1">
                  <option>All</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-xs">Matter type:</label>
                <select className="w-full border outline-none bg-white border-gray-300 mt-1 px-2 py-1">
                  <option>All</option>
                </select>
              </div>

              {/* Buttons aligned right like screenshot */}
              <div className="col-span-full flex justify-start gap-3 pt-2">
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

          {/* (Optional) Results Area Placeholder */}
          <div className="p-6 text-sm text-gray-600">
            No records to display.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMattersSearch;
