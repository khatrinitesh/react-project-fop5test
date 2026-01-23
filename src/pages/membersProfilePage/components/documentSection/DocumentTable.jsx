import { useState } from "react";
import { borderRight, initialUploads } from "./documentData";
import { FaThumbtack, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const DocumentTable = () => {
  const [uploads, setUploads] = useState(initialUploads);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-[12px]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              "File Name",
              "Upload date & Time",
              "Uploaded By",
              "Is Pinned",
              "Action",
            ].map((label, idx, arr) => (
              <th
                key={idx}
                className={`px-3 py-[6px] montserrat-semibold ${
                  idx < arr.length - 1 ? borderRight : ""
                } ${label === "Is Pinned" ? "text-center" : "text-left"}`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {uploads.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.fileName}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.uploadedAt}
              </td>
              <td
                className={`px-3 py-[5px] montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.uploadedBy}
              </td>
              <td
                className={`px-3 py-[5px]  montserrat-medium text-extraSmallDescription ${borderRight}`}
              >
                {row.isPinned && (
                  <div className="flex items-center justify-center ">
                    <FaThumbtack
                      className="text-[#d9534f] rotate-45 "
                      title="Pinned"
                    />
                  </div>
                )}
              </td>
              <td className="px-3 py-[5px] flex items-center space-x-2 justify-center">
                <button title="View">
                  <FaRegEye className="text-[#1b7398]" />
                </button>
                <button title="Edit">
                  <FaEdit className="text-[#1b7398]" />
                </button>
                <button title="Delete">
                  <FaRegTrashAlt className="text-[#1b7398]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
