import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import {
  borderRight,
  initialMeetings,
  meetingHeadData,
} from "./meetingsTableData";

const MeetingsTableSection = () => {
  const [meetings, setMeetings] = useState(initialMeetings);

  const updateMeetingField = (id, field, value) => {
    setMeetings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-[1px] border-[#b2bcc7] text-[12px]">
        <thead style={{ backgroundColor: "#1b7398", color: "white" }}>
          <tr>
            {meetingHeadData.map((label, idx) => (
              <th
                key={idx}
                className={`text-left px-3 py-[6px] montserrat-semibold ${
                  idx < meetingHeadData.length - 1 ? borderRight : ""
                }`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meetings.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-[#f3f8fa]" : "bg-[#d1e3ea]"}
            >
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.name}
              </td>

              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                <DatePicker
                  selected={row.date}
                  onChange={(date) => updateMeetingField(row.id, "date", date)}
                  dateFormat="MM/dd/yyyy"
                  className="text-[12px] w-[100px] rounded px-2 py-[2px]"
                />
              </td>

              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.time}
              </td>

              {/* ✅ Meeting Type as plain text */}
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.type}
              </td>

              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.page}
              </td>
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.line}
              </td>

              {/* ✅ Verified as plain text */}
              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.verified}
              </td>

              <td className={`px-3 py-[5px] montserrat-medium ${borderRight}`}>
                {row.by}
              </td>

              <td className="px-3 py-[5px] flex items-center justify-center space-x-2">
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

export default MeetingsTableSection;
