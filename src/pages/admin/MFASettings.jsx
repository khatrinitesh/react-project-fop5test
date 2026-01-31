import React, { useState } from "react";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const MFASettings = () => {
  const [settings, setSettings] = useState({
    authenticatorApp: false,
    emailCode: false,
    resetDays: "180",
  });

  const handleChange = (key, value) =>
    setSettings((prev) => ({ ...prev, [key]: value }));
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4 ">
      <div className="mx-auto border border-gray-300 bg-white">
        {/* ===== PAGE TITLE ===== */}
        <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
          <img src="/img/user_headset.gif" alt="security" className="w-5 h-5" />
          <h1 className="text-lg font-bold text-white">MFA Settings</h1>
        </div>

        {/* ===== INNER CONTENT BOX ===== */}
        <div className="border border-gray-300 bg-white">
          {/* Section Header */}
          <div className="bg-gray-300 text-center font-semibold py-2 border-b border-gray-300">
            Multifactor Authentication Settings
          </div>

          <div className="p-6 space-y-4 text-[13px] text-black">
            <p>
              When you enable 2-Step Verification, you add an extra layer of
              security to your account.
            </p>

            <p>You sign in with something you know (your current password)</p>

            <p>
              and something you have (a code in your Authenticator App or an OTP
              sent to your email).
            </p>

            {/* ===== CHECKBOX OPTIONS ===== */}
            <div className="space-y-3 pt-2">
              <div className="flex-col md:flex-row flex items-start gap-3">
                <label className="font-semibold min-w-[260px]">
                  Enable MFA using Authenticator APP:
                </label>
                <input
                  type="checkbox"
                  checked={settings.authenticatorApp}
                  onChange={(e) =>
                    handleChange("authenticatorApp", e.target.checked)
                  }
                  className="w-4 h-4"
                />
              </div>

              <div className="flex-col md:flex-row flex items-start gap-3">
                <label className="font-semibold min-w-[260px]">
                  Enable MFA Using Email Code :
                </label>
                <input
                  type="checkbox"
                  checked={settings.emailCode}
                  onChange={(e) => handleChange("emailCode", e.target.checked)}
                  className="w-4 h-4"
                />
              </div>

              <div className="flex-col md:flex-row flex items-start gap-3 pt-2">
                <label className="font-semibold min-w-[260px]">
                  Reset Multifactor Authentication Keys after days:
                </label>

                <div className="w-[120px]">
                  <FieldInput
                    value={settings.resetDays}
                    onChange={(e) => handleChange("resetDays", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* ===== SAVE BUTTON ===== */}
            <div className="pt-6 flex justify-center">
              <Button label="Save" className="px-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFASettings;
