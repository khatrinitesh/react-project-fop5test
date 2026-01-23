import { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import SectionTitleComponent from "../../../../components/sectionTitleComponent/SectionTitleComponent";
import TableModules from "./TableModules";
import TableForms from "./TableForms";

const RoleAccess = ({ showTables = false }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [activeTab, setActiveTab] = useState("Modules");

  const handleRoleChange = (e) => setSelectedRole(e.target.value);
  const handleTabClick = (tab) => setActiveTab(tab);

  const tabButtonStyle = (tab) =>
    `px-4 py-1 text-white montserrat-medium text-smallDescription cursor-pointer  ${
      activeTab === tab ? "bg-[#06c0cb]" : "bg-[#1b7398] hover:bg-[#16627f]"
    }`;

  return (
    <div className="settingPage">
      <SectionTitleComponent>
        <FaUserShield className="text-[var(--color6)] text-[30px]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          Role Access
        </h2>
      </SectionTitleComponent>

      <div className="UsersContent xl:max-w-[70%] p-[30px] grid gap-[10px]">
        {/* Dropdown */}
        <div className="innerContent border-[#ccc] bg-[#d1e3ea] border p-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:w-1/2">
              <label className="text-[#010d4a] w-1/2 montserrat-semibold text-smallDescription">
                Role Name:
              </label>
              <select
                name="roleClone"
                value={selectedRole}
                onChange={handleRoleChange}
                className="bg-white border border-[#1b7398] montserrat-medium text-smallDescription rounded px-2 py-1 w-full focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Front Desk">Front Desk</option>
                <option value="Administrator">Administrator</option>
              </select>
            </div>
          </div>
        </div>

        {/* Only show tabs + tables if showTables is true */}
        {showTables && (
          <>
            {/* Tabs */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleTabClick("Modules")}
                className={tabButtonStyle("Modules")}
              >
                Modules
              </button>
              <button
                onClick={() => handleTabClick("Forms")}
                className={tabButtonStyle("Forms")}
              >
                Forms
              </button>
              <button className="bg-[#1b7398] text-white montserrat-medium text-smallDescription px-4 py-1 hover:bg-[#16627f]">
                Control
              </button>
            </div>

            {/* Conditional Table Rendering */}
            {selectedRole ? (
              activeTab === "Modules" ? (
                <TableModules selectedRole={selectedRole} />
              ) : (
                <TableForms selectedRole={selectedRole} />
              )
            ) : (
              <div className="text-red-600 mt-4 font-medium">
                Please select a role to view access tables.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RoleAccess;
