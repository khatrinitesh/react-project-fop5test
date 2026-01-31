import React, { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import UsersTable from "../../components/usersTable/UsersTable";

const SearchUser = () => {
  const [search, setSearch] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const users = [
    {
      first: "Admin",
      last: "Admin",
      email: "admin@velarium.com",
      role: "RHBJPT Administrator",
      active: true,
    },
    {
      first: "Shristi",
      last: "BA",
      email: "shristi@velarium.com",
      role: "Membership Manager",
      active: true,
    },
    {
      first: "Debbie",
      last: "Barbado",
      email: "debbie@fop5.org",
      role: "RHBJPT Administrator with Restricted access",
      active: false,
    },
    {
      first: "Mia",
      last: "Borderie",
      email: "mia@velarium.com",
      role: "Administrator",
      active: true,
    },
    {
      first: "Scott",
      last: "Bradley",
      email: "sbradley@fop5.org",
      role: "Legal",
      active: false,
    },
  ];
  return (
    <div className="min-h-full bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto">
        {/* PAGE TITLE */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👥</span>
          <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
            <h2 className="text-md font-bold text-white">Add User</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* ================= LEFT ADD USER PANEL ================= */}
          <div className="md:w-[200px] border border-gray-300 bg-white h-fit">
            <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
              <h2 className="text-md font-bold text-white">Add User</h2>
            </div>

            <div className="p-3 space-y-2">
              <div>
                <label className="text-xs font-semibold">First Name</label>
                <FieldInput className="w-full" />
              </div>
              <div>
                <label className="text-xs font-semibold">Last Name</label>
                <FieldInput className="w-full" />
              </div>
              <div>
                <label className="text-xs font-semibold">Email</label>
                <FieldInput className="w-full" />
              </div>

              <Button label="Add User" className="!mx-0 mt-2" />
            </div>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="flex-1 space-y-4">
            {/* 🔍 SEARCH CRITERIA */}
            <div className="border border-gray-300 bg-white">
              <div className="bg-[#1b7398]  px-3 py-2 font-semibold border-b border-gray-300">
                <h2 className="text-md font-bold text-white">
                  Search Criteria
                </h2>
              </div>

              <div className="p-4 flex flex-col md:flex-row gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    First Name
                  </label>
                  <FieldInput
                    value={search.firstName}
                    onChange={(e) =>
                      setSearch({ ...search, firstName: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Last Name
                  </label>
                  <FieldInput
                    value={search.lastName}
                    onChange={(e) =>
                      setSearch({ ...search, lastName: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Email
                  </label>
                  <FieldInput
                    value={search.email}
                    onChange={(e) =>
                      setSearch({ ...search, email: e.target.value })
                    }
                    className="w-[220px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    &nbsp;
                  </label>
                  <Button label="Search" className="!mx-0 h-[34px]" />
                </div>
              </div>
            </div>

            <UsersTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
