import { useState } from "react";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const MySettings = () => {
  const [workbinName, setWorkbinName] = useState("manish@velarium.co");
  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const [mfa, setMfa] = useState({
    app: false,
    email: false,
  });

  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 text-sm">
      <div className="mx-auto">
        {/* 🔹 PAGE TITLE */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👤</span>
          <h1 className="text-xl font-bold text-[#0b3c5d]">User Settings</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* ================= WORKBINS ================= */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
              <h2 className="text-md font-bold text-white">My Workbins</h2>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Workbin Name:
                </label>
                <FieldInput
                  value={workbinName}
                  onChange={(e) => setWorkbinName(e.target.value)}
                  className="w-full"
                />
              </div>

              <Button label="Add Workbin" className="!mx-0" />

              {/* Table */}
              <div className="border border-gray-300 mt-3">
                <div className="grid grid-cols-3 bg-blue-100 text-xs font-semibold border-b border-gray-300">
                  <div className="p-2">Edit</div>
                  <div className="p-2">Delete</div>
                  <div className="p-2">Name</div>
                </div>

                {["Default", "Test"].map((name, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 border-t border-gray-200 text-xs"
                  >
                    <div className="p-2">✏️</div>
                    <div className="p-2">❌</div>
                    <div className="p-2">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RESET PASSWORD ================= */}
          <div className="border  border-gray-300 bg-white">
            <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
              <h2 className="text-md font-bold text-white">Reset Password</h2>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Old Password:
                </label>
                <FieldInput
                  type="password"
                  value={passwords.old}
                  onChange={(e) =>
                    setPasswords({ ...passwords, old: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  New Password:
                </label>
                <FieldInput
                  type="password"
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords({ ...passwords, new: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Confirm:
                </label>
                <FieldInput
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                />
              </div>

              <Button label="Reset" className="!mx-0" />
            </div>
          </div>

          {/* ================= MFA SETTINGS ================= */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-[#1b7398] px-3 py-2 font-semibold border-b border-gray-300">
              <h2 className="text-md font-bold text-white">MFA Setting</h2>
            </div>

            <div className="p-4 space-y-4">
              <Button label="Reset MFA" className="!mx-0" />

              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={mfa.app}
                  onChange={() => setMfa({ ...mfa, app: !mfa.app })}
                />
                MFA Using Authenticator App
              </label>

              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={mfa.email}
                  onChange={() => setMfa({ ...mfa, email: !mfa.email })}
                />
                MFA Using Email Code
              </label>

              <Button label="Save" className="!mx-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;
