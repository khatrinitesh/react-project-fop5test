import { colors, members } from "../../constants/constants";

const UpComingGrievanceTableComponent = () => {
  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-6">
      <table className="w-full border-collapse text-sm">
        <caption
          className={`text-left px-4 py-2 font-semibold rounded-t-md`}
          style={{
            backgroundColor: colors.color2.bg,
            color: colors.color2.text,
          }}
        >
          Upcoming Grievance Tasks
        </caption>
        <thead>
          <tr
            style={{
              backgroundColor: colors.headerBg,
              color: colors.headerText,
            }}
          >
            <th
              className="text-left px-4 py-2 border-r-[1px]"
              style={{ borderColor: colors.borderRight }}
            >
              Name
            </th>
            <th
              className="text-left px-4 py-2 border-r-[1px]"
              style={{ borderColor: colors.borderRight }}
            >
              Email
            </th>
            <th className="text-left px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              className="border-b last:border-none"
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : colors.rowAlt,
              }}
            >
              <td
                className="px-4 py-2 border-r-[1px]"
                style={{ borderColor: colors.borderRight }}
              >
                {member.name}
              </td>
              <td
                className="px-4 py-2 border-r-[1px]"
                style={{ borderColor: colors.borderRight }}
              >
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

export default UpComingGrievanceTableComponent;
