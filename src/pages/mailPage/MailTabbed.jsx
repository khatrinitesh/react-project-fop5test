import { useState } from "react";
import { tabsData } from "./data";
import TabContent1 from "./components/tabContent1/TabContent1";
import TabContent2 from "./components/tabContent2/TabContent2";
import TabContent3 from "./components/tabContent3/TabContent3";

const MailTabbed = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <TabContent1 />;
      case "tab2":
        return <TabContent2 />;
      case "tab3":
        return <TabContent3 />;
      default:
        return null;
    }
  };
  return (
    <div>
      {/* Tabs Navigation */}
      <ul className="listTab flex flex-col md:flex-row  border-b border-gray-200">
        {tabsData.map((tab) => (
          <li key={tab.id} className="">
            <a
              onClick={() => setActiveTab(tab.id)}
              className={`block px-4 py-[7px] border border-[#010d4a]  text-extraSmallDescription montserrat-medium cursor-pointer transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-[#1b7398] text-white"
                    : "bg-[#f2f5ff] text-[#010d4a]"
                }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default MailTabbed;
