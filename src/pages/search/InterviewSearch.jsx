import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const SectionHeader = ({ title }) => (
  <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
    <img src="/icons/search.png" alt="" className="h-5 w-5" />
    <h2 className="text-md font-bold text-white">{title}</h2>
  </div>
);

const Label = ({ children }) => (
  <label className="text-[12px] font-semibold text-gray-700 whitespace-nowrap">
    {children}
  </label>
);

const Select = ({ children }) => (
  <select className="h-[35px] border border-gray-400 bg-white px-2 text-sm">
    {children}
  </select>
);

const InterviewSearch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);
  return (
    <div className="min-h-screen bg-[#e6effd] p-4">
      <div className="mx-auto grid grid-cols-[240px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <div className="bg-[#1b7398]  px-4 py-2 flex items-center gap-2">
            <h2 className="text-md font-bold text-white">Add New Interview</h2>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <Label>Name:</Label>
              <FieldInput className="w-full" />
            </div>

            <div>
              <Label>Date:</Label>
              <div className="flex items-center gap-2 mt-1">
                <FieldInput className="flex-1 " />
                <button className="border border-gray-400 bg-white px-1">
                  📅
                </button>
              </div>
            </div>

            <Button
              label="Add Interview"
              variant="color1"
              className="w-full mt-3"
            />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <SectionHeader title="Interviews Search" />

          <div className="p-5 grid grid-cols-2 gap-x-4 gap-y-4 items-center">
            {/* Row 1 */}
            <Label>Name:</Label>
            <FieldInput className="" />

            <Label>Date from:</Label>
            <div className="flex items-center gap-1">
              <FieldInput className=" w-full" />
              <button className="border border-gray-400 bg-white px-1">
                📅
              </button>
            </div>

            <Label>Date to:</Label>
            <div className="flex items-center gap-1">
              <FieldInput className=" w-full" />
              <button className="border border-gray-400 bg-white px-1">
                📅
              </button>
            </div>

            <Label>Type:</Label>
            <Select>
              <option>All</option>
              <option>HR Round</option>
              <option>Technical</option>
              <option>Final</option>
            </Select>

            {/* Buttons */}
            <div className="col-span-full flex gap-4 mt-2">
              <Button label="Search" className="!mx-0" variant="color1" />
              <Button label="Clear" className="!mx-0" variant="color2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSearch;
