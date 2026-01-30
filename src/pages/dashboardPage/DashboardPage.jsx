import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../components/cardComponent/CardComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import MemberComponent from "../../components/memberComponent/MemberComponent";
import Button from "../../components/button/Button";
import TableFormatComponent from "../../components/tableFormatComponent/TableFormatComponent";
import {
  announcementsData,
  deadlinesData,
  membersData,
  tableHeaders,
  tasksData,
  tasksSummaryData,
} from "../../constants/constants";
import FieldInput from "../../components/fieldInput/FieldInput";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => {
    console.log("Search clicked");
  };
  return (
    <>
      <div className="p-5 bg-[#e6edf7] h-full">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* LEFT SIDEBAR */}
          <div className="space-y-4">
            {/* Messages Box */}
            <div className=" bg-white">
              <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
                <h2 className="text-md font-bold text-white">
                  📬 You have no new messages
                </h2>
              </div>
            </div>

            {/* Recent Announcements */}
            <div className=" bg-white">
              <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
                <h2 className="text-md font-bold text-white">
                  Recent Announcements
                </h2>
              </div>
              <TableFormatComponent
                thead={["Title", "Posted"]}
                rows={announcementsData}
                variant="classic"
              />
            </div>

            {/* Tasks */}
            <div className=" bg-white">
              <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
                <h2 className="text-md font-bold text-white">Tasks</h2>
              </div>
              <TableFormatComponent
                thead={["Status", "Tasks"]}
                rows={tasksSummaryData}
                variant="classic"
              />
            </div>
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className=" bg-white border border-gray-300">
            <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
              <h2 className="text-md font-bold text-white">Members</h2>
            </div>

            <div className="p-6 flex flex-col  gap-x-10 gap-y-4 max-w-xl">
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  First Name:
                </label>
                <FieldInput className="w-full" label="First Name:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  Last Name:
                </label>
                <FieldInput className="w-full" label="Last Name:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  SSN:
                </label>
                <FieldInput className="w-full" label="SSN:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  Payroll Number:
                </label>
                <FieldInput className="w-full" label="Payroll Number:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  National Number:
                </label>
                <FieldInput className="w-full" label="National Number:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  Badge #:
                </label>
                <FieldInput className="w-full" label="Badge #:" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-start">
                {/* Label */}
                <label className="w-full md:w-[60%] text-xs font-semibold text-[#010d4a] whitespace-nowrap">
                  Emblem #:
                </label>
                <FieldInput className="w-full" label="Emblem #:" />
              </div>

              <div className="md:col-span-2 mt-2">
                <Button
                  label="Search"
                  onClick={handleSearch}
                  variant="color1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
