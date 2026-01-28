import Button from "../../../components/button/Button";

const ComposeTab = () => {
  return (
    <div className="text-sm space-y-4">
      {/* Buttons */}
      <div className="flex gap-3">
        <Button label="Send" className="!mx-0" />
        <Button label="Save Draft" className="!mx-0" />
      </div>

      {/* Recipients */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold mb-1">Internal Recipients</p>
          <select multiple className="border border-gray-500 w-full h-[90px]">
            <option>Admin</option>
            <option>Support</option>
          </select>
        </div>

        <div>
          <p className="font-semibold mb-1">Internal Recipients CC</p>
          <select multiple className="border border-gray-500 w-full h-[90px]">
            <option>Manager</option>
          </select>
        </div>
      </div>

      {/* External */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="font-semibold">TO:</label>
          <textarea className="border border-gray-500 w-full h-[60px]" />
        </div>
        <div>
          <label className="font-semibold">CC:</label>
          <textarea className="border border-gray-500 w-full h-[60px]" />
        </div>
        <div>
          <label className="font-semibold">BCC:</label>
          <textarea className="border border-gray-500 w-full h-[60px]" />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="font-semibold">Subject:</label>
        <input className="border border-gray-500 w-full py-1 px-2" />
      </div>

      {/* Message */}
      <div>
        <label className="font-semibold">Message:</label>
        <textarea className="border border-gray-500 w-full h-[120px]" />
      </div>

      <div className="flex gap-3">
        <Button label="Send" className="!mx-0" />
        <Button label="Save Draft" className="!mx-0" />
      </div>
    </div>
  );
};

export default ComposeTab;
