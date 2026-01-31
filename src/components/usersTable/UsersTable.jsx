const UsersTable = ({ users }) => {
  return (
    <section className="border border-gray-300 bg-white">
      {/* Record Count */}
      <div className="flex justify-end px-3 py-1 text-xs text-gray-600">
        {users.length} user record(s)
      </div>

      {/* Table Wrapper (scroll only on small screens) */}
      <section className="w-full max-w-screen px-4 overflow-x-auto md:overflow-visible">
        <table className="md:min-w-full text-xs border-collapse">
          {/* Table Head */}
          <thead className="bg-blue-100 font-semibold border-t border-b border-gray-300">
            <tr>
              <th className="p-2 text-left"></th>
              <th className="p-2 text-left">First Name</th>
              <th className="p-2 text-left">Last Name</th>
              <th className="p-2 text-left">Email / Login</th>
              <th className="p-2 text-left">User Role</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className={`border-b border-gray-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-blue-50"
                }`}
              >
                <td className="p-2 text-center">🔍</td>
                <td className="p-2">{user.first}</td>
                <td className="p-2">{user.last}</td>
                <td className="p-2 text-blue-700">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-[2px] rounded text-[11px] font-semibold ${
                      user.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default UsersTable;
