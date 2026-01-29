import { useState } from "react";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const MeetingSearch = () => {
  const [form, setForm] = useState({
    name: "",
    dateFrom: "",
    dateTo: "",
    type: "All",
    newMeetingName: "",
    newMeetingDate: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => console.log("Search", form);
  const handleClear = () =>
    setForm({
      name: "",
      dateFrom: "",
      dateTo: "",
      type: "All",
      newMeetingName: "",
      newMeetingDate: "",
    });

  const handleAddMeeting = () =>
    console.log("Add Meeting", form.newMeetingName, form.newMeetingDate);
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4">
      <div className="max-w-[1300px] mx-auto flex gap-4">
        {/* 🔷 LEFT PANEL — ADD NEW MEETING */}
        <div className="w-[220px] bg-white border border-gray-400 ">
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <h3 className="text-md font-bold text-white">Add New Meeting</h3>
          </div>

          <div className="space-y-3 text-sm p-3">
            <div>
              <label className="text-xs font-semibold">Name:</label>
              <FieldInput
                className="mt-1"
                value={form.newMeetingName}
                onChange={(e) => handleChange("newMeetingName", e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-semibold">Date:</label>
              <div className="flex items-center gap-2 mt-1">
                <FieldInput
                  type="date"
                  value={form.newMeetingDate}
                  onChange={(e) =>
                    handleChange("newMeetingDate", e.target.value)
                  }
                />
                📅
              </div>
            </div>

            <Button
              label="Add Meeting"
              onClick={handleAddMeeting}
              className="!mx-0 w-full"
            />
          </div>
        </div>

        {/* 🔷 MAIN CONTENT */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <h2 className="text-md font-bold text-white">Meetings Search</h2>
          </div>

          {/* Search Filters */}
          <div className="p-6 bg-[#f7f7f7] border-b border-gray-300">
            <div className="grid md:grid-cols-4 gap-6 text-sm items-end">
              <div>
                <label className="text-xs font-semibold">Name:</label>
                <FieldInput
                  className="mt-1"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs font-semibold">Date from:</label>
                <div className="flex items-center gap-2 mt-1">
                  <FieldInput
                    type="date"
                    value={form.dateFrom}
                    onChange={(e) => handleChange("dateFrom", e.target.value)}
                  />
                  📅
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold">Date to:</label>
                <div className="flex items-center gap-2 mt-1">
                  <FieldInput
                    type="date"
                    value={form.dateTo}
                    onChange={(e) => handleChange("dateTo", e.target.value)}
                  />
                  📅
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold">Type:</label>
                <select
                  className="w-full h-[35px] border border-gray-300 mt-1 px-2 bg-white"
                  value={form.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                >
                  <option>All</option>
                  <option>Internal</option>
                  <option>Client</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <Button onClick={handleSearch} label="Search" className="!mx-0" />
              <Button onClick={handleClear} label="Clear" className="!mx-0" />
            </div>
          </div>

          {/* Results Area Placeholder */}
          <div className="p-6 text-sm text-gray-500">
            No meetings to display.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSearch;
