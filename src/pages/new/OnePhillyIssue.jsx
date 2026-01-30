import Button from "./../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";

const OnePhillyIssue = () => {
  const handleSave = () => console.log("Save clicked");
  const handleClear = () => console.log("Clear clicked");
  const handleClose = () => console.log("Close clicked");
  return (
    <div className="min-h-screen bg-[#e6edf7] p-4">
      <div className="mx-auto border border-gray-400 bg-white shadow-sm">
        {/* 🔷 Header */}
        <div className="bg-[#1b7398] border-b border-gray-400 px-4 py-2 flex items-center gap-2">
          <span className="text-2xl">🔎</span>
          <h1 className="text-md font-bold text-white">One Philly Issue</h1>
        </div>

        {/* 🔷 Form Section */}
        <div className="bg-white p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-4 gap-x-6 text-sm">
            <label className="font-semibold text-xs text-left">
              Payroll Number:
            </label>
            <FieldInput className="w-[250px]" />

            <label className="font-semibold text-xs text-left">
              First Name:
            </label>
            <FieldInput className="w-[250px]" />

            <label className="font-semibold text-xs text-left">
              Last Name:
            </label>
            <FieldInput className="w-[250px]" />

            <label className="font-semibold text-xs text-left">Date:</label>
            <div className="flex items-center gap-2">
              <FieldInput className="w-[200px]" type="date" />
              <span className="text-lg">📅</span>
            </div>

            <label className="font-semibold text-xs text-left">Issues:</label>
            <textarea className="bg-white resize-none outline-none border border-gray-400 p-2 w-full h-[70px]" />

            <label className="font-semibold text-xs text-left">
              Billable Hours:
            </label>
            <FieldInput className="w-[120px]" />
          </div>
        </div>
      </div>
      {/* 🔷 Attachment Section */}
      <div className="flex-col py-3 flex items-start gap-4">
        {/* 🔷 ACTION BUTTON BAR (ADDED) */}
        <div className="btnBlock py-3 flex gap-3">
          <Button
            label="Save"
            onClick={handleSave}
            variant="color1"
            className="!mx-0"
          />
          <Button
            label="Edit"
            onClick={handleClear}
            variant="color2"
            className="!mx-0"
          />
          <Button
            label="Delete"
            onClick={handleClose}
            variant="color2"
            className="!mx-0"
          />
        </div>

        <Button label="Attachment" className="!mx-0" variant="color1" />
        <span className="text-sm text-red-600 font-medium">
          Please save before adding attachments
        </span>
      </div>
    </div>
  );
};

export default OnePhillyIssue;
