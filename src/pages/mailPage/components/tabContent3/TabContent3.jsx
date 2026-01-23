import { useState } from "react";
import { emailList, signatureOptions } from "../../data";
import FieldInput from "./../../../../components/fieldInput/FieldInput";
import FieldTextAreaComponent from "./../../../../components/fieldTextAreaComponent/FieldTextAreaComponent";
import FieldDropdown from "./../../../../components/fieldDropdown/FieldDropdown";
import Button from "./../../../../components/button/Button";

export default function TabContent3() {
  const [editorContent, setEditorContent] = useState("");
  const [subject, setSubject] = useState("");
  const [externalTo, setExternalTo] = useState("");
  const [externalCC, setExternalCC] = useState("");
  const [externalBCC, setExternalBCC] = useState("");
  const [signature, setSignature] = useState("");

  const renderSelectBox = (label, list) => (
    <div>
      <label className="block text-sm mb-1 text-extraSmallDescription montserrat-semibold text-[var(--color1)]">
        {label}
        <br />
        <span className="text-[10px] text-[#1b7398] montserrat-regular italic">
          CTL - Select for multiple
        </span>
      </label>
      <select
        multiple
        className="w-full h-[75px] border border-[#1b7398] rounded px-2 text-[10px] montserrat-medium text-[#010d4a] py-1 text-sm overflow-y-auto vertical-scrollbar"
      >
        {list.map((email) => (
          <option key={email} value={email}>
            {email}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="p-4 border mt-3 border-[#1b7398] rounded-[15px] mx-auto bg-white font-sans text-[10px] text-[#1a1a1a]">
      {/* Top recipient selects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
        {renderSelectBox("Internal Recipients", emailList)}
        {renderSelectBox("Internal CC Recipients", emailList)}
        {renderSelectBox("Internal BCC Recipients", emailList)}
      </div>

      {/* External inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-[var(--color1)] text-extraSmallDescription montserrat-semibold mb-1">
            External Recipients
          </label>
          <FieldTextAreaComponent
            value={externalTo}
            onChange={(e) => setExternalTo(e.target.value)}
            className="!rounded-[0] !border-[#1b7398]"
          />
        </div>
        <div>
          <label className="block text-[var(--color1)] text-extraSmallDescription montserrat-semibold mb-1">
            External CC Recipients
          </label>
          <FieldTextAreaComponent
            value={externalCC}
            onChange={(e) => setExternalCC(e.target.value)}
            className="!rounded-[0] !border-[#1b7398]"
          />
        </div>
        <div>
          <label className="block text-[var(--color1)] text-extraSmallDescription montserrat-semibold mb-1">
            External BCC Recipients
          </label>
          <FieldTextAreaComponent
            value={externalBCC}
            onChange={(e) => setExternalBCC(e.target.value)}
            className="!rounded-[0] !border-[#1b7398]"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-4 flex items-start md:items-center gap-[10px] border-b-[#1b7398] border-b-[1px] pb-[10px]">
        <label className="block text-[var(--color1)] text-extraSmallDescription montserrat-regular ">
          Subject:
        </label>
        <FieldInput
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* From and Signature */}
      <div className="flex flex-col md:flex-row gap-[10px] items-start md:items-center justify-between mb-2 text-extraSmallDescription montserrat-regular text-[#010d4a] border-b-[#1b7398] border-b-[1px] pb-[10px]">
        <div>
          <span className=" ">From:</span>{" "}
          <span className="montserrat-medium">
            Joel Rosen - joel@velarium.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <label className="">Signature:</label>
          <FieldDropdown
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            options={signatureOptions}
            className="text-sm p-1 text-[#6570a9]"
            disabled={true}
          />
        </div>
      </div>

      {/* Toolbar look (static) */}
      <div className="mb-1 flex items-center  verticalgap-2 border border-gray-300 rounded-t px-2 py-1 bg-gray-100 text-sm">
        <button className="font-bold">B</button>
        <button className="italic">I</button>
        <button className="underline">U</button>
        <button className="text-gray-700">&bull; List</button>
        <button className="text-gray-700">1. List</button>
        <button className="text-gray-700">🔗</button>
        <button className="text-gray-700">📎</button>
      </div>

      {/* Message Text Area */}
      <FieldTextAreaComponent
        value={editorContent}
        onChange={(e) => setEditorContent(e.target.value)}
        placeholder="Type your message here..."
        className="w-full h-[200px] resize-none border border-gray-300 rounded-b px-3 py-2 text-sm focus:outline-none focus:ring"
      />

      {/* Action Buttons */}
      <div className="btnBlock mt-3 flex gap-[10px]">
        <Button className="!mx-0" label="Save Draft" />
        <Button className="!mx-0" label="Send" />
        <Button className="!mx-0" label="Cancel" />
      </div>
    </div>
  );
}
