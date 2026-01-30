import { useNavigate } from "react-router-dom";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import { useEffect } from "react";

const Label = ({ children }) => (
  <label className="text-[12px] font-semibold text-gray-700 mb-1">
    {children}
  </label>
);

const Select = ({ children }) => (
  <select className="h-[35px] w-full border border-gray-400 bg-white px-2 text-sm">
    {children}
  </select>
);

const TaskSearch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) navigate("/login");
  }, [navigate]);

  const handleSearch = () => console.log("Search clicked");
  return (
    <div className="min-h-screen bg-[#dbe7f5] p-6">
      {/* ===== Header ===== */}
      <div className="bg-[#1b7398] border border-gray-300 px-4 py-2 flex items-center gap-2">
        <span className="text-2xl text-green-600">✔</span>
        <h1 className="text-md font-bold text-white">Tasks Search</h1>
      </div>

      {/* ===== Search Panel ===== */}
      <div className="border border-gray-300 bg-white  p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {/* Row 1 */}
          <div>
            <Label>Title:</Label>
            <FieldInput className="w-full" />
          </div>

          <div>
            <Label>Type:</Label>
            <Select>
              <option>All</option>
            </Select>
          </div>

          <div>
            <Label>Owner:</Label>
            <Select>
              <option>All</option>
              <option>Velarium Pm</option>
            </Select>
          </div>

          <div className="flex items-end justify-end">
            <Button
              label="Search"
              onClick={handleSearch}
              variant="color1"
              className="px-8 !mx-0"
            />
          </div>

          {/* Row 2 */}
          <div>
            <Label>Priority:</Label>
            <Select>
              <option>All</option>
            </Select>
          </div>

          <div>
            <Label>Status:</Label>
            <Select>
              <option>OPEN</option>
              <option>CLOSED</option>
            </Select>
          </div>

          <div>
            <Label>Close Date:</Label>
            <FieldInput type="date" className="w-full" />
          </div>

          <div></div>

          {/* Row 3 */}
          <div>
            <Label>Create Date:</Label>
            <FieldInput type="date" className="w-full" />
          </div>

          <div>
            <Label>Due Date:</Label>
            <FieldInput type="date" className="w-full" />
          </div>

          <div>
            <Label>Payroll Number:</Label>
            <FieldInput className="w-full" />
          </div>
        </div>

        {/* No Records Message */}
        <div className="mt-4 text-sm text-black">
          No records found, try another search criteria
        </div>
      </div>
    </div>
  );
};

export default TaskSearch;
