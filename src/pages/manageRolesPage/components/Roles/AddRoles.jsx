import React, { useState } from "react";
import TableAddRoles from "./TableAddRoles";

const AddRoles = () => {
  const [formData, setFormData] = useState({
    roleName: "",
    roleClone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    console.log("Add clicked:", formData);
  };

  const handleSave = () => {
    console.log("Save clicked:", formData);
  };

  const handleClear = () => {
    setFormData({ roleName: "", roleClone: "", description: "" });
  };

  return (
    <div className="grid gap-[20px]">
      <div className="w-full max-w-full xl:max-w-1/2 grid gap-[20px]">
        <div className="innerContent border-[#ccc] bg-[#d1e3ea] border">
          <div className="bg-[#1b7398] text-white px-4 py-2 text-sm font-medium">
            Add Role
          </div>

          <div className="p-4 space-y-3">
            {/* Row 1: Role Name + Role Clone */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:w-1/2 gap-[10px]">
                <label className="text-[#010d4a] w-1/2 montserrat-semibold text-smallDescription">
                  Role Name:
                </label>
                <input
                  type="text"
                  name="roleName"
                  value={formData.roleName}
                  onChange={handleChange}
                  className="bg-white border border-[#1b7398] rounded px-2 py-1 w-full focus:outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:w-1/2">
                <label className="text-[#010d4a] w-1/2 montserrat-semibold text-smallDescription">
                  Role Clone:
                </label>
                <select
                  name="roleClone"
                  value={formData.roleClone}
                  onChange={handleChange}
                  className="bg-white border border-[#1b7398] rounded px-2 py-1 w-full focus:outline-none"
                >
                  <option value=""></option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            {/* Row 2: Description */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="text-[#010d4a] w-[19%] montserrat-semibold text-smallDescription">
                Description:
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-white border border-[#1b7398] rounded px-2 py-1 w-full focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-2 ">
          <button
            onClick={handleAdd}
            className="bg-[#1b7398] text-white montserrat-medium text-smallDescription px-4 py-1  hover:bg-[#16627f]"
          >
            Add
          </button>
          <button
            onClick={handleSave}
            className="bg-[#1b7398] text-white montserrat-medium text-smallDescription px-4 py-1  hover:bg-[#16627f]"
          >
            Save
          </button>
          <button
            onClick={handleClear}
            className="bg-[#1b7398] text-white montserrat-medium text-smallDescription px-4 py-1  hover:bg-[#16627f]"
          >
            Clear
          </button>
        </div>
      </div>
      <TableAddRoles />
    </div>
  );
};

export default AddRoles;
