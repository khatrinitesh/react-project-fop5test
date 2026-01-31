import { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const AddUser = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    role: "",
    active: false,
    mfaEmail: false,
    mfaApp: false,
  });

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto md:flex-row flex-col flex gap-4">
        {/* ================= LEFT ACTION PANEL ================= */}
        <div className="md:w-[180px] border border-gray-300 bg-white h-fit">
          <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
            <h2 className="text-md font-bold text-white">Actions</h2>
          </div>

          <div className="p-3 space-y-2">
            <Button label="Save User" className="!mx-0" />
            <Button label="Reset Password" className="!mx-0" />
            <Button label="Reset MFA" className="!mx-0" />
          </div>
        </div>

        {/* ================= MAIN USER FORM ================= */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">👤</span>
            <h2 className="text-md font-bold text-white">User</h2>
          </div>

          <div className="p-6 space-y-4 max-w-[900px]">
            {/* Email */}
            <div className="grid grid-cols-[150px_1fr] items-center gap-3">
              <label className="text-xs font-semibold">Email:</label>
              <FieldInput
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="grid grid-cols-[150px_1fr] items-center gap-3">
              <label className="text-xs font-semibold">Phone:</label>
              <FieldInput
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            {/* First Name */}
            <div className="grid grid-cols-[150px_1fr] items-center gap-3">
              <label className="text-xs font-semibold">First Name:</label>
              <FieldInput
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="grid grid-cols-[150px_1fr] items-center gap-3">
              <label className="text-xs font-semibold">Last Name:</label>
              <FieldInput
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>

            {/* Role Dropdown */}
            <div className="grid grid-cols-[150px_1fr] items-center gap-3">
              <label className="text-xs font-semibold">User Role:</label>
              <select
                className="border border-gray-300 p-1 h-[35px] text-xs outline-none"
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
              >
                <option value="">Please Specify</option>
                <option>Administrator</option>
                <option>Manager</option>
                <option>User</option>
              </select>
            </div>

            {/* Active */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                checked={form.active}
                onChange={() => handleChange("active", !form.active)}
              />
              <label className="text-xs font-semibold">Active</label>
            </div>

            {/* MFA Email */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.mfaEmail}
                onChange={() => handleChange("mfaEmail", !form.mfaEmail)}
              />
              <label className="text-xs">MFA Using Email Code</label>
            </div>

            {/* MFA App */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.mfaApp}
                onChange={() => handleChange("mfaApp", !form.mfaApp)}
              />
              <label className="text-xs">MFA Using Authenticator App</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
