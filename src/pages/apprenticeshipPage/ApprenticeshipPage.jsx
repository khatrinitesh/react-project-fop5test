import {
  FaCaretLeft,
  FaCaretRight,
  FaCloudDownloadAlt,
  FaPrint,
  FaUserAstronaut,
} from "react-icons/fa";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "./../../components/searchComponent/SearchComponent";
import { useState } from "react";
import { tabsData } from "./components/apprenticeshipData";
import TabContentClassList from "./components/TabContentClassList";
import Button from "./../../components/button/Button";
import TabContentTrainingCourseList from "./components/TabContentTrainingCourseList";
import TabContentInstructorList from "./components/TabContentInstructorList";

const ApprenticeshipPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="apprenticeshipPage">
      {/* Title */}
      <SectionTitleComponent>
        <FaUserAstronaut className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          Apprenticeship
        </h2>
      </SectionTitleComponent>

      <div className="innerContent grid gap-[10px] w-full p-[20px]">
        {/* Toolbar with Tabs + Search */}
        <div className="w-full toolbarBlock border-b-[1px] border-[#697d98] flex-col md:flex-row  flex justify-between md:items-center gap-[10px]">
          {/* Tabs */}
          <div className="leftContent md:w-[60%]">
            <div className="tabbedBlock">
              <ul className="listTab flex flex-col md:flex-row ">
                {tabsData.map((tab) => (
                  <li key={tab.id} className="w-auto">
                    <a
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full md:w-auto block cursor-pointer px-4 py-[9px] border border-[#010d4a] border-b-0 text-[14px] text-extraSmallDescription montserrat-semibold transition-colors !last:border-r-[1px]
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
            </div>
          </div>

          {/* Search + Icons */}
          <div className="rightContent mb-[2px] md:w-[calc(100%-60%)] justify-end flex gap-[10px] items-center">
            <SearchComponent
              className="rounded-full"
              placeholder={
                tabsData.find((t) => t.id === activeTab)?.placeholder
              }
            />
            <div className="optionBlock flex gap-[10px]">
              <FaCloudDownloadAlt className="text-[var(--color5)] cursor-pointer" />
              <FaPrint className="text-[var(--color5)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tabContent  mt-2">
          {activeTab === "tab1" && (
            <>
              <div className="grid gap-[10px]">
                <TabContentClassList />
                <div className="flex justify-between items-center">
                  <div className="btnBlock flex gap-[10px] items-start justify-start">
                    <Button label="Add" className="max-w-auto !mx-0" />
                    <Button label="Cancel" className="!mx-0" />
                  </div>
                  <div className="btnBlock">
                    <button className="cursor-pointer">
                      <FaCaretLeft className="text-[var(--color5)] text-[30px]" />
                    </button>
                    <button className="cursor-pointer">
                      <FaCaretRight className="text-[var(--color5)] text-[30px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <div className="grid gap-[10px]">
                <TabContentTrainingCourseList />
                <div className="flex justify-between items-center">
                  <div className="btnBlock flex gap-[10px] items-start justify-start">
                    <Button label="Add" className="max-w-auto !mx-0" />
                    <Button label="Cancel" className="!mx-0" />
                  </div>
                  <div className="btnBlock">
                    <button className="cursor-pointer">
                      <FaCaretLeft className="text-[var(--color5)] text-[30px]" />
                    </button>
                    <button className="cursor-pointer">
                      <FaCaretRight className="text-[var(--color5)] text-[30px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "tab3" && (
            <>
              <div className="grid gap-[10px]">
                <TabContentInstructorList />
                <div className="flex justify-between items-center">
                  <div className="btnBlock flex gap-[10px] items-start justify-start">
                    <Button label="Add" className="max-w-auto !mx-0" />
                    <Button label="Save" className="!mx-0" />
                    <Button label="Cancel" className="!mx-0" />
                  </div>
                  <div className="btnBlock">
                    <button className="cursor-pointer">
                      <FaCaretLeft className="text-[var(--color5)] text-[30px]" />
                    </button>
                    <button className="cursor-pointer">
                      <FaCaretRight className="text-[var(--color5)] text-[30px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprenticeshipPage;
