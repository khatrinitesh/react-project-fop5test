import { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const Task = () => {
  const [activeTab, setActiveTab] = useState("notes");

  const handleSave = () => console.log("Save clicked");

  const renderTab = () => {
    if (activeTab === "notes") {
      return (
        <div className="text-sm text-red-600 font-medium">
          Please save before adding notes
        </div>
      );
    }

    if (activeTab === "attachments") {
      return (
        <div className="text-sm text-red-600 font-medium">
          Please save before adding attachments
        </div>
      );
    }

    if (activeTab === "email") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 text-sm">
          <label className="text-xs font-semibold">Alert Date:</label>
          <div className="flex items-center gap-2">
            <FieldInput className="w-[200px]" type="date" />
            📅
          </div>

          <label className="text-xs font-semibold">Alert Recipients:</label>
          <FieldInput className="w-full" />

          <label className="text-xs font-semibold">Alert Text:</label>
          <textarea className="border border-gray-300 p-2 h-[80px] resize-none bg-white w-full" />
        </div>
      );
    }
  };
  return (
    <div className="min-h-screen bg-[#e6edf7] p-4">
      <div className="max-w-[1200px] mx-auto border border-gray-300 bg-white">
        {/* 🔷 HEADER */}
        <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
          <span className="text-green-600 text-xl">✔</span>
          <h1 className="text-lg font-bold text-white">Task</h1>
        </div>

        {/* 🔷 MAIN FORM */}
        <div className="p-6 bg-white border-b border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            {/* LEFT SIDE */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold">Title:</label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold">Description:</label>
                <textarea className="w-full h-[110px] outline-none  border border-gray-300 mt-1 p-2 resize-none bg-white" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold">Current Status:</label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div>
                <label className="text-xs font-semibold">Priority:</label>
                <select className="w-full border border-gray-300 mt-1 px-2 py-1 bg-white">
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold">Type:</label>
                <select className="w-full border border-gray-300 mt-1 px-2 py-1 bg-white">
                  <option>To-Do Item</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold">Start Date:</label>
                <div className="flex items-center gap-2 mt-1">
                  <FieldInput className="w-[180px]" type="date" />
                  📅
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold">Due Date:</label>
                <div className="flex items-center gap-2 mt-1">
                  <FieldInput className="w-[180px]" type="date" />
                  📅
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold">
                  Linked Contact (SSN):
                </label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div>
                <label className="text-xs font-semibold">
                  Linked Matter (Number):
                </label>
                <FieldInput className="w-full mt-1" />
              </div>

              <div>
                <label className="text-xs font-semibold">Pay Period:</label>
                <select className="w-full border border-gray-300 mt-1 px-2 py-1 bg-white">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          {/* 🔷 SAVE BUTTON BAR */}
          <div className="p-4 ">
            <Button
              label="Save Task"
              className="!mx-0"
              onClick={handleSave}
              variant="color1"
            />
          </div>
        </div>

        {/* 🔷 TABS */}
        <div className="border-t border-gray-300">
          <ul className="flex bg-[#dbe8fb] border-b border-gray-300">
            <li>
              <button
                onClick={() => setActiveTab("notes")}
                className={`px-4 py-1 text-xs cursor-pointer  font-semibold border-r border-gray-300 ${
                  activeTab === "notes"
                    ? "bg-[#1b7398] text-white"
                    : "bg-[#dbe8fb]"
                }`}
              >
                Notes
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("attachments")}
                className={`px-4 py-1 text-xs cursor-pointer font-semibold border-r border-gray-300 ${
                  activeTab === "attachments"
                    ? "bg-[#1b7398] text-white"
                    : "bg-[#dbe8fb]"
                }`}
              >
                Attachments
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("email")}
                className={`px-4 py-1 text-xs cursor-pointer font-semibold ${
                  activeTab === "email"
                    ? "bg-[#1b7398] text-white"
                    : "bg-[#dbe8fb]"
                }`}
              >
                Email Alert
              </button>
            </li>
          </ul>

          <div className="p-4 bg-white min-h-[140px]">{renderTab()}</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
