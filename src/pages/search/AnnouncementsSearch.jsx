import { useNavigate } from "react-router-dom";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import { useEffect } from "react";

const SectionHeader = ({ title }) => (
  <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
    <span className="text-[20px]">📢</span>
    <h2 className="text-md font-bold text-white">{title}</h2>
  </div>
);

const Label = ({ children }) => (
  <label className="text-[12px] font-semibold text-gray-700 whitespace-nowrap">
    {children}
  </label>
);

const AnnouncementsSearch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);
  return (
    <div className="min-h-screen bg-[#e6effd] p-4">
      <div className="mx-auto grid md:grid-cols-[240px_1fr] gap-4">
        {/* ================= LEFT PANEL ================= */}
        <div className="border border-gray-300 bg-white shadow-sm">
          <div className="px-4  bg-[#1b7398] py-2 font-bold text-[14px] text-gray-800">
            <h2 className="text-md font-bold text-white">Add Announcement</h2>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <Label>Title:</Label>
              <FieldInput className="w-full mt-1 " />
            </div>

            <div>
              <Label>Expiration Date:</Label>
              <div className="flex items-center gap-2 mt-1">
                <FieldInput className="flex-1 " />
                <button className="border border-gray-400 bg-white px-1">
                  📅
                </button>
              </div>
            </div>

            <Button label="Add" variant="color1" className="w-full mt-3" />
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-gray-400 bg-white shadow-sm">
          <SectionHeader title="Announcements Search" />

          <div className="p-5 grid  md:grid-cols-[auto_200px_auto_200px_auto] gap-x-4 gap-y-4 items-center">
            {/* Row 1 */}
            <Label>From Date:</Label>
            <div className="flex items-center gap-1">
              <FieldInput className=" w-full" />
              <button className="border border-gray-400 bg-white px-1">
                📅
              </button>
            </div>

            <Label>To Date:</Label>
            <div className="flex items-center gap-1">
              <FieldInput className=" w-full" />
              <button className="border border-gray-400 bg-white px-1">
                📅
              </button>
            </div>

            <div className="flex gap-4 justify-end">
              <Button label="Search" className="!mx-0" variant="color1" />
              <Button label="Clear" className="!mx-0" variant="color2" />
            </div>

            {/* Row 2 */}
            <Label>Title:</Label>
            <FieldInput className=" w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsSearch;
