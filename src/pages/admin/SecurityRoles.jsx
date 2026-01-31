import React, { useState } from "react";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const SecurityRoles = () => {
  const [form, setForm] = useState({
    roleName: "",
    description: "",
    active: true,
    cloneRole: "",
  });

  const roles = [
    {
      title: "Administrative",
      description: "Administrative",
      cloned: "RHBJPT Administrator",
      system: false,
      active: true,
    },
    {
      title: "Administrator",
      description: "Full control over entire application except RHBJPT Module",
      cloned: "RHBJPT Administrator",
      system: false,
      active: true,
    },
    {
      title: "Insurance",
      description: "Insurance",
      cloned: "RHBJPT Administrator",
      system: false,
      active: true,
    },
  ];

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto flex flex-col md:flex-row gap-4">
        {/* ================= LEFT LINKS PANEL ================= */}
        <div className="md:w-[180px] border border-gray-300 bg-white h-fit">
          <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
            <h2 className="text-md font-bold text-white">Links</h2>
          </div>

          <div className="p-3 space-y-2">
            <Button label="Role Permissions" className="!mx-0" />
            <Button label="User Search" className="!mx-0" />
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#e6f0ff] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">🔐</span>
            <h2 className="text-lg font-bold text-[#0b3c5d]">
              Manage Security Roles
            </h2>
          </div>

          {/* Top Form Section */}
          <div className="p-4 border-b border-gray-300 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <label className="text-xs font-semibold">Role Name</label>
                <FieldInput
                  value={form.roleName}
                  onChange={(e) => handleChange("roleName", e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold">Active</label>
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={() => handleChange("active", !form.active)}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-2 md:col-span-2">
                <label className="text-xs font-semibold">Description</label>
                <FieldInput
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <label className="text-xs font-semibold">Role to Clone</label>
                <select
                  className="border border-gray-300 p-1 h-[34px] text-xs outline-none"
                  value={form.cloneRole}
                  onChange={(e) => handleChange("cloneRole", e.target.value)}
                >
                  <option value="">Please Specify</option>
                  <option>Administrator</option>
                  <option>Manager</option>
                  <option>User</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button label="Add Role" />
              </div>
            </div>
          </div>

          {/* ================= ROLES TABLE ================= */}
          <div className="w-full max-w-screen overflow-x-auto">
            <table className=" w-full text-xs border-collapse">
              <thead className="bg-blue-100 border-b border-gray-300 font-semibold px-4 ">
                <tr>
                  <th className="p-2 text-left "></th>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Role Cloned</th>
                  <th className="p-2 text-center">System Role</th>
                  <th className="p-2 text-center">Active</th>
                </tr>
              </thead>

              <tbody>
                {roles.map((role, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-200 ${
                      i % 2 === 0 ? "bg-white" : "bg-blue-50"
                    }`}
                  >
                    <td className="p-2 text-center">🔍</td>
                    <td className="p-2 text-blue-700">{role.title}</td>
                    <td className="p-2">{role.description}</td>
                    <td className="p-2">{role.cloned}</td>
                    <td className="p-2 text-center">
                      {role.system ? "True" : "False"}
                    </td>
                    <td className="p-2 text-center">
                      {role.active ? "True" : "False"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityRoles;
