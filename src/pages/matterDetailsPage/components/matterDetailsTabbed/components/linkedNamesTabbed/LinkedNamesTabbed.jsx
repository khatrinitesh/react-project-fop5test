import { FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { contactData } from "./data";

const LinkedNamesTabbed = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-[#b2bcc7] text-[12px] montserrat-medium">
        {/* Table Head */}
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {[
              "Full Name",
              "Type",
              "Phone",
              "Email",
              "Notes",
              "Primary",
              "Action",
            ].map((header, index) => (
              <th
                key={index}
                className="text-left px-3 py-[6px] border border-[#b2bcc7] montserrat-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {contactData.map((contact, idx) => (
            <tr
              key={contact.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {contact.fullName}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {contact.type}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {contact.phone}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {contact.email}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7]">
                {contact.notes}
              </td>
              <td className="px-3 py-[6px] border border-[#b2bcc7] text-center">
                <input
                  type="checkbox"
                  checked={contact.isPrimary}
                  readOnly
                  className="form-checkbox accent-[#1b7398]"
                />
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

export default LinkedNamesTabbed;
