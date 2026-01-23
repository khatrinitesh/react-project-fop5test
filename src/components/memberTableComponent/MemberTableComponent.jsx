import { members } from "../../constants/constants";

const MemberTableComponent = () => {
  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-6">
      <table className="w-full border-collapse text-sm">
        <caption className="bg-[#1b7398] text-white text-left px-4 py-2 font-semibold rounded-t-md">
          Recently Accessed Members
        </caption>
        <thead>
          <tr className="bg-[#8fbacd] text-[#122159]">
            <th className="text-left px-4 py-2 border-r-[1px] border-[#6ca0b7]">
              Name
            </th>
            <th className="text-left px-4 py-2 border-r-[1px] border-[#6ca0b7]">
              Email
            </th>
            <th className="text-left px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#d1e3ea]"
              } border-b last:border-none`}
            >
              <td className="px-4 py-2 border-r-[1px] border-[#6ca0b7]">
                {member.name}
              </td>
              <td className="px-4 py-2 border-r-[1px] border-[#6ca0b7]">
                {member.email}
              </td>
              <td className="px-4 py-2">{member.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTableComponent;
