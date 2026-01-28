import Button from "../../../components/button/Button";

const SettingsTab = () => {
  return (
    <div className="text-sm grid md:grid-cols-2 gap-10">
      {/* Signature */}
      <div>
        <p className="font-semibold mb-2">Signature</p>
        <textarea className="border border-gray-500 w-full h-[80px]" />
        <div className="mt-2">
          <Button label=" 💾 Save" className="!mx-0" />
        </div>
      </div>

      {/* Folders */}
      <div>
        <p className="font-semibold mb-2">Folders</p>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-[#1b7398]">
              <th className="border border-[#0b2c6b] py-1 text-xs text-white">
                Edit
              </th>
              <th className="border border-[#0b2c6b] py-1 text-xs text-white">
                Folder Name
              </th>
              <th className="border border-[#0b2c6b] py-1 text-xs text-white">
                Delete
              </th>
            </tr>
          </thead>
        </table>

        <div className="mt-2 flex items-center gap-2">
          <span>Add Folder</span>
          <input className="border border-gray-500 px-2 py-1" />
          <Button label="+" className="!mx-0 !text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
