import Button from "../../../components/button/Button";

const MessagesTab = () => {
  return (
    <div className="text-sm">
      {/* Folder */}
      <div className="mb-3">
        <label className="mr-2 font-semibold">Folder</label>
        <select className="border border-gray-500 px-2 py-1">
          <option>Inbox</option>
          <option>Sent</option>
          <option>Trash</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#1b7398] text-[#0b2c6b]">
            <th className="border border-[#1b7398] py-1 text-white text-xs">
              Status
            </th>
            <th className="border border-[#1b7398] py-1 text-white text-xs">
              Sent
            </th>
            <th className="border border-[#1b7398] py-1 text-white text-xs">
              From
            </th>
            <th className="border border-[#1b7398] py-1 text-white text-xs">
              Subject
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-[#c5d3f5] py-1 text-cs">📩</td>
            <td className="border border-[#c5d3f5] py-1 text-cs">Jan 25</td>
            <td className="border border-[#c5d3f5] py-1 text-cs">Admin</td>
            <td className="border border-[#c5d3f5] py-1 text-cs">
              Welcome Message
            </td>
          </tr>
        </tbody>
      </table>

      {/* Actions */}
      <div className="flex justify-between items-center mt-3">
        <div>
          Move Selected Message to{" "}
          <select className="border border-gray-500 px-1 py-[2px] mx-2">
            <option>Inbox</option>
            <option>Trash</option>
          </select>
          <Button label="Move" className="!mx-0" />
        </div>

        <Button label="Delete Selected" className="!mx-0" />
      </div>
    </div>
  );
};

export default MessagesTab;
