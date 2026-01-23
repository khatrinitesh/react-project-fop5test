import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { priorImports } from "./priorImagesData";
import "./style.css";

const PriorImages = () => {
  return (
    <div className="overflow-x-auto max-w-[95vw] md:max-w-4xl">
      <table className="prior-imports-table min-w-[800px] border-collapse border border-[#b1bcc6] w-full">
        <thead className="text-extraSmallDescription montserrat-semibold">
          <tr>
            <th
              colSpan="6"
              className="p-[5px] bg-[#1b7398] text-white text-left"
            >
              Prior Imports
            </th>
          </tr>
          <tr className="bg-[#8fbacd] text-[#010d4a] whitespace-nowrap">
            <th>File Name</th>
            <th>Import Source</th>
            <th>Layout Template</th>
            <th>Upload date & Time</th>
            <th>Uploaded By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {priorImports.map((item, index) => (
            <tr
              key={index}
              className="text-extraSmallDescription montserrat-medium"
            >
              <td className="montserrat-semibold">
                <a href="javascript:void(0)">{item.fileName}</a>
              </td>
              <td>{item.importSource}</td>
              <td>{item.layoutTemplate}</td>
              <td>{item.uploadDateTime}</td>
              <td>{item.uploadedBy}</td>
              <td className="flex gap-[8px]">
                <button className="cursor-pointer" title="View">
                  <FaRegEye className="text-[#1b7398] text-[15px]" />
                </button>
                <button className="cursor-pointer" title="Delete">
                  <FaRegTrashAlt className="text-[#1b7398] text-[15px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriorImages;
