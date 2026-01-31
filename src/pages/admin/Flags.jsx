import { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const Flags = () => {
  const [form, setForm] = useState({
    code: "",
    description: "",
    type: "General",
  });

  const flags = [
    { code: "1", description: "Watch", type: "General" },
    { code: "2", description: "Bad address", type: "General" },
    { code: "3", description: "Address adjustment", type: "General" },
    { code: "4", description: "Address change", type: "General" },
    { code: "5", description: "Phone number change", type: "General" },
    { code: "6", description: "DOB change", type: "General" },
    { code: "7", description: "Signed address change form", type: "General" },
    { code: "8", description: "Name change", type: "General" },
    { code: "9", description: "Vote mem", type: "General" },
    { code: "10", description: "Hipaa form on record", type: "General" },
    { code: "11", description: "Marital status change", type: "General" },
    { code: "12", description: "ML", type: "General" },
    { code: "13", description: "ML City", type: "General" },
    { code: "14", description: "Director", type: "General" },
    { code: "001", description: "Appropriations", type: "General" },
    { code: "999", description: "Delegates", type: "General" },
    {
      code: "15",
      description: "Need to Send Associate Cards and Thank You Letter",
      type: "General",
    },
    { code: "16", description: "Family Leave", type: "General" },
    { code: "17", description: "Maternity Leave", type: "General" },
    { code: "18", description: "Personal Leave", type: "General" },
    { code: "19", description: "Dismissals", type: "General" },
    { code: "20", description: "Military Leave", type: "General" },
  ];

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto flex flex-col md:flex-row gap-4">
        {/* ================= LEFT ADD FLAG PANEL ================= */}
        <div className="md:w-[200px] border border-gray-300 bg-white h-fit">
          <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
            <h2 className="text-md font-bold text-white">Add Flag</h2>
          </div>

          <div className="p-3 space-y-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Code:</label>
              <FieldInput
                value={form.code}
                onChange={(e) => handleChange("code", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Description:
              </label>
              <FieldInput
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Flag Type:
              </label>
              <select
                className="w-full border border-gray-300 p-1 text-xs h-[30px]"
                value={form.type}
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option>General</option>
                <option>Warning</option>
                <option>Critical</option>
              </select>
            </div>

            <Button label="Add Flag" className="!mx-0 w-full" />
          </div>
        </div>

        {/* ================= MAIN FLAGS TABLE ================= */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2">
            <h2 className="text-lg font-bold text-white">Flags</h2>
          </div>

          {/* Record Count */}
          <div className="px-4 py-2 text-xs font-semibold">
            {flags.length} Flag record(s) returned
          </div>

          {/* Table */}
          <div className="overflow-x-auto md:overflow-visible px-4 pb-4">
            <table className="min-w-[600px] md:min-w-full text-xs border-collapse">
              <thead className="bg-blue-100 border-t border-b border-gray-300">
                <tr>
                  <th className="p-2 text-left">Code</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {flags.map((flag, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-200 ${
                      i % 2 === 0 ? "bg-white" : "bg-blue-50"
                    }`}
                  >
                    <td className="p-2">{flag.code}</td>
                    <td className="p-2">{flag.description}</td>
                    <td className="p-2">{flag.type}</td>
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

export default Flags;
