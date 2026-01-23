import { recentlyMatters } from "../../../../constants/constants";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const TableRecently = () => {
  return (
    <div className="overflow-x-auto max-w-[100vw] md:max-w-full">
      <table className="w-full border-collapse border border-[#b1bcc6] text-extraSmallDescription">
        <thead>
          <tr>
            <th
              colSpan="7"
              className="p-[5px]  bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription text-left"
            >
              Recently Accessed Matters
            </th>
          </tr>
          <tr className="bg-[#8fbacd] text-[#010d4a] whitespace-nowrap montserrat-semibold text-extraSmallDescription">
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Case Number
            </th>
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Member Name
            </th>
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Step #
            </th>
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Task / Description
            </th>
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Due Date
            </th>
            <th className="border-r-[1px] border-r-[#1b7398] p-[6px] text-left border border-[#b1bcc6]">
              Status
            </th>
            <th className="p-[6px] text-center border border-[#b1bcc6]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {recentlyMatters.map((item, index) => (
            <tr
              key={index}
              className={`montserrat-medium text-extraSmallDescription  ${
                index % 2 === 0 ? "bg-white" : "bg-[#d1e3ea]"
              }`}
            >
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                {item.caseNumber}
              </td>
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                {item.memberName}
              </td>
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                {item.step}
              </td>
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                {item.task}
              </td>
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                {item.dueDate}
              </td>
              <td
                className={`p-[6px] border-r-[1px] border-r-[#1b7398] ${
                  item.status === "Completed" ? "" : ""
                }`}
              >
                {item.status}
              </td>
              <td className="p-[6px] border-r-[1px] border-r-[#1b7398]">
                <div className="flex items-center justify-center gap-3">
                  <button title="View">
                    <FaRegEye className="text-[#1b7398]" />
                  </button>
                  <button title="Edit">
                    <FaEdit className="text-[#1b7398]" />
                  </button>
                  <button title="Delete">
                    <FaRegTrashAlt className="text-[#1b7398]" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRecently;
