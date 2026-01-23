import { FaCaretLeft, FaCaretRight, FaRegUserCircle } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { membersProfileData } from "./components/membersProfileData";
import { useState } from "react";
import AddressTableSection from "./components/addressTableSection/AddressTableSection";
import Button from "./../../components/button/Button";
import NotesTableSection from "./components/notesTableSection/NotesTableSection";
import HistoryTableSection from "./components/historyTableSection/HistoryTableSection";
import GrievancesTableSection from "./components/grievancesTableSection/GrievancesTableSection";
import MeetingsTableSection from "./components/meetingsTableSection/MeetingsTableSection";
import HistoryTableLastSection from "./components/historyTableLastSection/HistoryTableLastSection";
import DocumentSection from "./components/documentSection/DocumentSection";
import DuesSection from "./components/duesSection/DuesSection";
import MembersSection from "./components/memberSection/MembersSection";
import InsuranceSection from "./components/insuranceSection/InsuranceSection";

const MembersProfilePage = () => {
  const [activeTab, setActiveTab] = useState("member"); // default active
  // get current tab object
  const currentTab = membersProfileData.find((tab) => tab.id === activeTab);
  return (
    <div className="membersProfilePage">
      <div className="innerContent grid gap-[10px] w-full">
        <SectionTitleComponent>
          <FaRegUserCircle className={` text-[25px] text-[var(--color6)]`} />
          {/* <h2
            className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            MEMBER PROFILE: <span className="text-white">Joel Rosen</span>
          </h2> */}
          <h2 className="whitespace-nowrap text-[var(--color6)]  md:text-smallSubTitle montserrat-regular">
            MEMBER <span className="uppercase">{currentTab?.label}: </span>
            <span className="text-white">Joel Rosen</span>
          </h2>
        </SectionTitleComponent>
        <div className="m-[20px] 2xl:m-[30px] grid gap-[10px] ">
          <ul className="listTab flex flex-col md:flex-row border-b-[1px] border-b-[#697d98]">
            {membersProfileData.map((tab, index) => (
              <li key={tab.id} className="w-full text-center">
                <a
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex-1 md:w-auto block cursor-pointer px-4 py-[7px] 
          border-b-0 border border-[#010d4a] text-[14px] 
          text-extraSmallDescription montserrat-medium transition-colors
          ${
            activeTab === tab.id
              ? "bg-[#1b7398] text-white"
              : "bg-[#f2f5ff] text-[#010d4a]"
          }
          ${index < membersProfileData.length - 1 ? "border-r-0" : ""}
        `}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          {activeTab === "member" && (
            <>
              <div className="grid gap-[10px]">
                <MembersSection />
                <div className="btnBlock flex gap-[10px]">
                  {/* <Button className="!mx-0" label="Add" /> */}
                  <Button className="!mx-0" label="Save" />
                  <Button className="!mx-0" label="Cancel" />
                  <Button className="!mx-0" label="Return to Members" />
                </div>
              </div>
            </>
          )}
          {activeTab === "address" && (
            <>
              <div className="grid gap-[10px]">
                <AddressTableSection />
                <div className="btnBlock flex gap-[10px]">
                  <Button className="!mx-0" label="Add" />
                  <Button className="!mx-0" label="Save" />
                  <Button className="!mx-0" label="Cancel" />
                </div>
              </div>
            </>
          )}
          {activeTab === "notes" && (
            <>
              <div className="grid gap-[10px]">
                <NotesTableSection />
                <div className="btnBlock flex gap-[10px]">
                  <Button className="!mx-0" label="Add" />
                  <Button className="!mx-0" label="Save" />
                  <Button className="!mx-0" label="Cancel" />
                </div>
              </div>
            </>
          )}
          {activeTab === "dues" && (
            <>
              <DuesSection />
            </>
          )}
          {activeTab === "historyDollar" && (
            <div className="grid gap-[5px]">
              <HistoryTableSection />
              <div className="btnBlock flex justify-end items-center">
                <button className="cursor-pointer">
                  <FaCaretLeft className="text-[var(--color5)] text-[30px]" />
                </button>
                <button className="cursor-pointer">
                  <FaCaretRight className="text-[var(--color5)] text-[30px]" />
                </button>
              </div>
            </div>
          )}
          {activeTab === "insurance" && (
            <div className="grid gap-[10px]">
              <InsuranceSection />
            </div>
          )}
          {activeTab === "grievances" && (
            <div className="grid gap-[10px]">
              <GrievancesTableSection />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Add Matter" />
                <Button className="!mx-0" label="Save" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "meetings" && (
            <>
              <div className="grid gap-[10px]">
                <MeetingsTableSection />
                <div className="flex justify-between items-center">
                  <div className="btnBlock flex gap-[10px] items-start justify-start">
                    <Button label="Add" className="max-w-auto !mx-0" />
                    <Button label="Save" className="!mx-0" />
                    <Button label="Cancel" className="!mx-0" />
                  </div>
                  <div className="btnBlock">
                    <button className="cursor-pointer">
                      <FaCaretLeft className="text-[var(--color5)] text-[20px]" />
                    </button>
                    <button className="cursor-pointer">
                      <FaCaretRight className="text-[var(--color5)] text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "documents" && (
            <>
              <div className="grid gap-[10px]">
                <DocumentSection />
              </div>
            </>
          )}
          {activeTab === "history" && (
            <>
              <div className="grid gap-[10px]">
                <HistoryTableLastSection />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersProfilePage;
