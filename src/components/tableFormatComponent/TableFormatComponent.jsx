const TableFormatComponent = ({ thead, rows, variant }) => {
  if (variant === "classic") {
    return (
      <table className="w-full border-collapse text-sm text-center">
        <thead>
          <tr className="bg-[#dbe7ff] text-[#0b2c6b]">
            {thead.map((head, i) => (
              <th
                key={i}
                className="border border-[#9db4e0] py-1 text-xs font-semibold"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f3f6ff]"}>
              {row.map((cell, j) => (
                <td key={j} className="border border-[#c5d3f5] py-1 text-xs">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
};

export default TableFormatComponent;
