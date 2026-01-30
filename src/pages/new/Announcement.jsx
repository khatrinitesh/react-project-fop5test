import { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const Announcement = () => {
  const [form, setForm] = useState({
    title: "",
    expiration: "",
    content: "",
    visibility: "everyone",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => console.log("Saved Announcement", form);
  const handleSearch = () => console.log("Search Announcement");
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4">
      <div className=" mx-auto flex gap-4">
        {/* 🔷 MAIN CONTENT */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">📢</span>
            <h2 className="text-md font-bold text-white">Announcement</h2>
          </div>

          {/* Form Body */}
          <div className="p-6 text-sm space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold mb-1">Title:</label>
              <FieldInput
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full max-w-[600px]"
              />
            </div>

            {/* Expiration Date */}
            <div>
              <label className="block text-xs font-semibold mb-1">
                Expiration:
              </label>
              <div className="flex items-center gap-2 max-w-[250px]">
                <FieldInput
                  type="date"
                  value={form.expiration}
                  onChange={(e) => handleChange("expiration", e.target.value)}
                />
                <span className="text-lg">📅</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="block text-xs font-semibold mb-1">
                Content:
              </label>
              <textarea
                className="w-full h-[180px] border border-gray-300 p-2 resize-none outline-none"
                value={form.content}
                onChange={(e) => handleChange("content", e.target.value)}
              />
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-xs font-semibold mb-2">
                Enable viewing by:
              </label>

              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    checked={form.visibility === "admin"}
                    onChange={() => handleChange("visibility", "admin")}
                  />
                  Administrators Only
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    checked={form.visibility === "everyone"}
                    onChange={() => handleChange("visibility", "everyone")}
                  />
                  Everyone
                </label>
              </div>
              <div className="pt-5 flex  gap-3">
                <Button label="Save" onClick={handleSave} className=" !mx-0" />
                <Button
                  label="Search"
                  onClick={handleSearch}
                  className=" !mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
