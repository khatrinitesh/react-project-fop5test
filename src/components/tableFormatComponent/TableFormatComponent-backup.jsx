import React from "react";
import { colors } from "../../constants/constants";

const TableFormatComponent = ({
  caption,
  rows,
  colorKey = "color1",
  thead = {},
  showScrollbar = true, // 👈 new prop to control scrollbar
}) => {
  const {
    fieldCol1 = "Column 1",
    fieldCol2 = "Column 2",
    fieldCol3 = "Column 3",
  } = thead;

  const theme = colors[colorKey] || colors.color1;
  const { caption: captionStyle } = colors;
  const { rowAlt, headerBg, headerText, borderRight } = theme;

  const verticalBorder = `1px solid ${borderRight || "#b1bcc6"}`;

  return (
    <div className="w-full border-[1px] border-[#b1bcc6] rounded overflow-hidden">
      {/* Caption */}
      <div
        className="text-left px-4 py-[5px] montserrat-semibold text-extraSmallDescription"
        style={{ backgroundColor: captionStyle.bg, color: captionStyle.text }}
      >
        {caption}
      </div>

      <div className="tableHeaderBody">
        {/* Table Header */}
        <div className="table-header w-full overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <thead className="montserrat-regular text-extraSmallDescription">
              <tr>
                {[fieldCol1, fieldCol2, fieldCol3].map((col, index) => (
                  <th
                    key={index}
                    className="md:w-[33.33%] text-left px-4 py-[8px] text-smallDescription montserrat-bold"
                    style={{
                      borderRight: index !== 2 ? verticalBorder : undefined,
                      backgroundColor: headerBg,
                      color: headerText,
                      position: "sticky",
                      top: 0,
                      zIndex: 10,
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        {/* ✅ Conditional Scrollbar Section */}
        <div
          className={`vertical-scrollbar ${
            showScrollbar ? "overflow-y-auto" : "overflow-y-hidden"
          }`}
          style={{ borderTop: verticalBorder, maxHeight: "200px" }}
        >
          <table className="w-full border-collapse table-fixed text-sm">
            <tbody className="montserrat-regular text-extraSmallDescription montserrat-bold">
              {rows.map((member, rowIndex) => {
                const bgColor = rowIndex % 2 === 0 ? "#ffffff" : rowAlt;
                return (
                  <tr key={rowIndex} style={{ backgroundColor: bgColor }}>
                    <td
                      className="md:w-[33.33%] px-4 py-[8px] text-[#010d4a] montserrat-semibold text-extraSmallDescription"
                      style={{ borderRight: verticalBorder }}
                    >
                      {member.field1}
                    </td>
                    <td
                      className="md:w-[33.33%] px-4 py-[8px] text-[#000] montserrat-medium text-extraSmallDescription"
                      style={{ borderRight: verticalBorder }}
                    >
                      {member.field2}
                    </td>
                    <td className="md:w-[33.33%] px-4 py-[8px] text-[#000] montserrat-medium text-extraSmallDescription">
                      {member.field3}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableFormatComponent;
