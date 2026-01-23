import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { priorImports } from "./priorImagesData";
import "./style.css";

const PriorImages = () => {
  return (
    <div className="overflow-x-auto max-w-[95vw] md:max-w-4xl">
      <table className="prior-imports-table w-full  overflow-x-auto border-collapse border-[1px]  border-[#b1bcc6] ">
        <thead className="bg-[#8fbacd]  text-extraSmallDescription montserrat-semibold">
          <tr>
            <th
              colspan="6"
              className=" p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription w-full text-start"
            >
              Prior Imports
            </th>
          </tr>
          <tr className="bg-[#8fbacd] text-[#010d4a] whitespace-nowrap">
            <th className="">File Name</th>
            <th className="">Pay Period</th>
            <th className="">Layout Template</th>
            <th className="">Upload date & Time</th>
            <th className="">Uploaded By</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {priorImports.map((item, index) => (
            <tr
              key={index}
              className="text-extraSmallDescription montserrat-medium"
            >
              <td className="montserrat-semibold">
                <a href="javascript:void(0)">{item.fileName}</a>
              </td>
              <td>{item.payPeriod}</td>
              <td>{item.layoutTemplate}</td>
              <td>{item.uploadDateTime}</td>
              <td>{item.uploadedBy}</td>
              <td className="action-icons flex gap-[8px]">
                <button className="cursor-pointer" title="View">
                  <FaRegEye className="text-[15px] text-[#1b7398] " />
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
