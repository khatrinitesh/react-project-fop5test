import { useState } from "react";
import MessagesTab from "./components/MessagesTab";
import ComposeTab from "./components/ComposeTab";
import SettingsTab from "./components/SettingsTab";

const MailTabbed = () => {
  const [activeTab, setActiveTab] = useState("messages");

  const tabs = [
    { id: "messages", label: "Messages" },
    { id: "compose", label: "Compose" },
    { id: "settings", label: "Settings" },
  ];

  const renderTab = () => {
    if (activeTab === "messages") return <MessagesTab />;
    if (activeTab === "compose") return <ComposeTab />;
    if (activeTab === "settings") return <SettingsTab />;
  };

  return (
    <div className="bg-[#e6edf7]  h-full p-5 ">
      <div className="shadow-md rounded-md overflow-hidden border border-[#0b2c6b]">
        {/* Tabs */}
        <ul className="flex border-b  border-[#0b2c6b] bg-[#f2f5ff]">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer text-black font-semibold px-4 py-2 text-xs border-r border-[#0b2c6b]
                ${activeTab === tab.id ? "bg-[#1b7398] text-white" : "bg-[#f2f5ff] text-black"}
              `}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="p-4 bg-white">{renderTab()}</div>
      </div>
    </div>
  );
};

export default MailTabbed;
