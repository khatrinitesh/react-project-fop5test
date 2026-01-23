import { coverageData } from "./data";
import { FaEdit, FaTrash } from "react-icons/fa";

const CoverageTableSection = () => {
  return (
    <div className="w-full overflow-x-auto border border-[#ccc]">
      <table className="w-full text-left border-collapse text-extraSmallDescription montserrat-regular">
        <thead>
          <tr>
            <th
              colspan="13"
              className=" p-[5px] bg-[#1b7398] text-white montserrat-semibold text-extraSmallDescription w-full text-start"
            >
              Coverage Details
            </th>
          </tr>
          <tr className="bg-[#8db9cb] text-black montserrat-semibold text-extraSmallDescription">
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Plan Name
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[15%]">
              Group#
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[15%]">
              Member ID#
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Effective Date
            </th>
            <th className="p-2 border-r-[#1b7398] border-r-[1px] w-[20%]">
              Notes
            </th>
            <th className="p-2 w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {coverageData.map((item, index) => {
            const isLifeInsurance =
              item.planName === "Life Insurance (Optional)";
            return (
              <tr
                key={index}
                className={
                  isLifeInsurance
                    ? "bg-[#8db9cb] text-[#010d4a]"
                    : index % 2 === 0
                    ? "bg-[#f2f9ff] text-black"
                    : "bg-[#d3e6f5] text-black"
                }
              >
                <td className="p-2 border-r-[1px] border-r-[#1b7398] montserrat-semibold text-extraSmallDescription">
                  {item.planName}
                </td>
                <td className="p-2 border-r-[1px] border-r-[#1b7398] montserrat-medium text-extraSmallDescription">
                  {item.groupNumber}
                </td>
                <td className="p-2 border-r-[1px] border-r-[#1b7398] montserrat-medium text-extraSmallDescription">
                  {item.memberId}
                </td>
                <td className="p-2 border-r-[1px] border-r-[#1b7398] montserrat-medium text-extraSmallDescription">
                  {item.effectiveDate || ""}
                </td>
                <td className="p-2 border-r-[1px] border-r-[#1b7398] w-[20%]">
                  {item.notes || ""}
                </td>

                {/* Action column */}
                <td
                  className={
                    "p-2 border-r-[1px] border-r-[#8db9cb] flex gap-2 items-center " +
                    (isLifeInsurance ? "bg-[#8db9cb] text-[#010d4a]" : "")
                  }
                >
                  {/* Only show icons if NOT Life Insurance */}
                  {!isLifeInsurance && (
                    <>
                      <button title="Edit">
                        <FaEdit className="text-[#1b7398] text-extraSmallDescription" />
                      </button>
                      <button title="Delete">
                        <FaTrash className="text-[#1b7398] text-extraSmallDescription" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoverageTableSection;
