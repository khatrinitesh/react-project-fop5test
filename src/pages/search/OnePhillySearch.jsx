import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FieldInput from "./../../components/fieldInput/FieldInput";
import Button from "./../../components/button/Button";

const OnePhillySearch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => console.log("Search clicked");
  const handleClear = () => console.log("Clear clicked");
  return (
    <div className="min-h-full bg-[#dbe7f5]">
      {/* ======= HEADER ======= */}
      <div className=" p-3">
        <div className="border border-gray-300 bg-white shadow-sm grid">
          <div className="bg-[#1b7398] px-4 py-2 w-full">
            <h2 className="text-[15px] font-bold text-white">
              {" "}
              <span className="text-2xl">🔎</span> One Philly Search
            </h2>
          </div>
          <div className="p-4 grid gap-5">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Last Name */}
              <div className="flex flex-col grow">
                <label className="text-[12px] font-semibold text-gray-700 mb-1">
                  Last Name:
                </label>
                <FieldInput className="w-[220px] h-[28px]" />
              </div>

              {/* First Name */}
              <div className=" grow flex flex-col">
                <label className="text-[12px] font-semibold text-gray-700 mb-1">
                  First Name:
                </label>
                <FieldInput className="w-[220px] h-[28px]" />
              </div>

              {/* Payroll # */}
              <div className=" grow flex flex-col">
                <label className="text-[12px] font-semibold text-gray-700 mb-1">
                  Payroll #:
                </label>
                <FieldInput className="w-[220px] h-[28px]" />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                label="Search"
                onClick={handleSearch}
                variant="color1"
                className="px-6 !mx-0"
              />
              <Button
                label="Clear"
                onClick={handleClear}
                variant="color2"
                className="px-6 !mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======= SEARCH STRIP ======= */}
    </div>
  );
};

export default OnePhillySearch;
