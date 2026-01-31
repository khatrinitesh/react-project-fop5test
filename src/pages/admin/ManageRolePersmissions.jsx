import React, { useState } from "react";
import Button from "../../components/button/Button";

const ManageRolePersmissions = () => {
  const [activeTab, setActiveTab] = useState("modules");
  const [selectedRole, setSelectedRole] = useState("");

  const roles = ["Administrator", "Manager", "User"];
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto flex flex-col md:flex-row gap-4">
        {/* ================= LEFT LINKS PANEL ================= */}
        <div className="md:w-[180px] border border-gray-300 bg-white h-fit">
          <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
            <h2 className="text-md font-bold text-white">Links</h2>
          </div>

          <div className="p-3 space-y-2">
            <Button label="Add New Role" className="!mx-0" />
            <Button label="User Search" className="!mx-0" />
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">🔐</span>
            <h2 className="text-lg font-bold text-white">
              Manage Role Permissions
            </h2>
          </div>

          {/* Role Selector */}
          <div className="p-4 border-b border-gray-300 flex items-center gap-4">
            <label className="text-xs font-semibold">Role:</label>
            <select
              className="border border-gray-300 p-1 text-xs h-[30px] w-[220px]"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Please Specify</option>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Tabs */}
          <div className="px-4 pt-3">
            <div className="flex gap-2 border-b border-gray-300">
              {[
                { key: "modules", label: "Modules" },
                { key: "forms", label: "Forms" },
                { key: "controls", label: "Controls" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`cursor-pointer px-3 py-1 text-xs border border-b-0 rounded-t ${
                    activeTab === tab.key
                      ? "bg-[#1b7398] font-semibold text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Panel */}
          <div className="mx-4 mb-4 border-t-0 border border-gray-300 bg-white p-4 min-h-[250px]">
            {activeTab === "modules" && (
              <div>
                <h3 className="font-semibold mb-2">Module Permissions</h3>
                <p className="text-gray-600 text-xs">
                  Select which modules this role can access.
                </p>
              </div>
            )}

            {activeTab === "forms" && (
              <div>
                <h3 className="font-semibold mb-2">Form Permissions</h3>
                <p className="text-gray-600 text-xs">
                  Control which forms are visible to this role.
                </p>
              </div>
            )}

            {activeTab === "controls" && (
              <div>
                <h3 className="font-semibold mb-2">Control Permissions</h3>
                <p className="text-gray-600 text-xs">
                  Enable or disable specific controls for the role.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRolePersmissions;
