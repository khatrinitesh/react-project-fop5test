import { FaRegEye, FaEdit, FaRegTrashAlt, FaThumbtack } from "react-icons/fa";
import { uploadedFiles } from "./data";

const AttachmentsTabbed = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Header */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              "File Name",
              "Upload date & Time",
              "Uploaded By",
              "Is Pinned",
              "Action",
            ].map((header, idx) => (
              <th
                key={idx}
                className={`px-3 py-[6px] border border-[#b2bcc7] montserrat-semibold ${
                  header === "Is Pinned" ? "text-center" : "text-left"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {uploadedFiles.map((file, idx) => (
            <tr
              key={file.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {file.fileName}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {file.uploadedAt}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {file.uploadedBy}
              </td>
              <td className="px-3 py-[6px]  border border-[#b2bcc7] text-center">
                {file.isPinned && (
                  <FaThumbtack
                    className="text-[#d9534f] rotate-45 inline-block"
                    title="Pinned"
                  />
                )}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                <div className="flex space-x-2 text-[#1b7398] items-center justify-center">
                  <FaRegEye title="View" className="cursor-pointer" />
                  <FaEdit title="Edit" className="cursor-pointer" />
                  <FaRegTrashAlt title="Delete" className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttachmentsTabbed;
