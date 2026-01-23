import { useState } from "react";
import { CASE_NUMBER, matterDetailsData, tabHeaderText } from "./data";
import {
  FaCloudDownloadAlt,
  FaExclamationCircle,
  FaPrint,
} from "react-icons/fa";
import MatterTabbed from "../matterTabbed/MatterTabbed";
import GrievanceInvestigationDetailsTabbed from "../grievanceInvestigationDetailsTabbed/GrievanceInvestigationDetailsTabbed";
import MemberDetailsContactInfoSection from "./components/memberDetailsContactInfoSection/MemberDetailsContactInfoSection";
import MatterDates from "./components/matterDates/MatterDates";
import Button from "./../../../../components/button/Button";
import StepOneTabbed from "../stepOneTabbed/StepOneTabbed";
import TasksTabbed from "../tasksTabbed/TasksTabbed";
import LinkedNamesTabbed from "./components/linkedNamesTabbed/LinkedNamesTabbed";
import NotesTabbed from "./components/notesTabbed/NotesTabbed";
import AttachmentsTabbed from "../attachmentsTabbed/AttachmentsTabbed";
import { DROPDOWN_OPTIONS_2 } from "./../../../../constants/constants";
import FieldDropdown from "./../../../../components/fieldDropdown/FieldDropdown";
import SectionTitleComponent from "./../../../../components/sectionTitleComponent/SectionTitleComponent";
import FieldCheckbox from "../../../../components/fieldCheckbox/FieldCheckbox";
import FieldInput from "../../../../components/fieldInput/FieldInput";

const MatterDetailsTabbed = () => {
  const [activeTab, setActiveTab] = useState("matter"); // default tab
  const [status, setStatus] = useState("");

  return (
    <>
      <SectionTitleComponent>
        <FaExclamationCircle className={` text-[var(--color6)]`} />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-semibold">
          {tabHeaderText[activeTab]?.main || "GRIEVANCES:"}{" "}
          <span className="text-white">
            {tabHeaderText[activeTab]?.span ||
              `Matter Details - Case # ${CASE_NUMBER}`}
          </span>
        </h2>
      </SectionTitleComponent>
      <div className="grid p-[20px] ">
        <div className="w-full toolbarBlock border-b-[1px] border-[#697d98] flex-col md:flex-row flex justify-between md:items-center gap-[10px]">
          {/* Tabs Section */}
          <div className="leftContent md:w-[60%]">
            <div className="tabbedBlock">
              <ul className="listTab flex flex-col md:flex-row gap-0">
                {matterDetailsData.map((tab, index) => (
                  <li key={tab.id} className="w-auto">
                    <a
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full md:w-auto block cursor-pointer px-4 py-[7px] border border-[#010d4a] border-b-0 text-extraSmallDescription montserrat-medium transition-colors whitespace-nowrap
                      ${
                        activeTab === tab.id
                          ? "bg-[#1b7398] text-white"
                          : "bg-[#f2f5ff] text-[#010d4a]"
                      }
                      ${
                        index !== matterDetailsData.length - 1
                          ? "border-r-0"
                          : ""
                      }
                    `}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Search & Icons */}
          <div className="rightContent mb-[2px] md:w-[calc(100%-60%)] justify-end flex gap-[10px] items-center">
            <div className="optionBlock flex gap-[10px]">
              <FaCloudDownloadAlt className="text-[var(--color5)] cursor-pointer" />
              <FaPrint className="text-[var(--color5)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="tab-content w-full">
          {activeTab === "matter" && (
            <div className="matterBlock grid gap-[20px]">
              <MatterTabbed />
              <div className="grid gap-[20px]">
                <div className="grid md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] gap-[20px]">
                  <MemberDetailsContactInfoSection />
                  <MatterDates />
                </div>
                <div className="btnBlock flex gap-[10px]">
                  <Button className="!mx-0" label="Edit" />
                  <Button className="!mx-0" label="Save" />
                  <Button className="!mx-0" label="Cancel" />
                </div>
              </div>
            </div>
          )}
          {activeTab === "grievance" && (
            <div className="grievanceBlock grid gap-[20px]">
              <GrievanceInvestigationDetailsTabbed />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Edit" />
                <Button className="!mx-0" label="Save" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "step1" && (
            <div className="stepOneBlock grid gap-[20px]">
              <StepOneTabbed />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Edit" />
                <Button className="!mx-0" label="Save" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "tasks" && (
            <div className="tasksBlock mt-5 grid gap-[20px]">
              <TasksTabbed />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Add" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "linkedNames" && (
            <div className="linkedNamesBlock mt-5 grid gap-[20px]">
              <LinkedNamesTabbed />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Add" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "notes" && (
            <div className="linkedNamesBlock mt-5 grid gap-[20px]">
              <NotesTabbed />
              <div className="btnBlock flex gap-[10px]">
                <Button className="!mx-0" label="Add" />
                <Button className="!mx-0" label="Save" />
                <Button className="!mx-0" label="Cancel" />
              </div>
            </div>
          )}
          {activeTab === "attachments" && (
            <div className="attachmentBlock mt-5 grid gap-[20px]">
              <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
                <span className="md:w-[6%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                  Select File:
                </span>
                <div className="box flex flex-col md:flex-row md:items-center gap-[10px]">
                  <FieldInput
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    options={DROPDOWN_OPTIONS_2}
                    maxLength={10}
                    disable={true}
                    className="!w-full bg-[#f2f5ff] border-[1px]  text-[#6570a9] border-[#8c95c1] text-extraSmallDescription rounded-[5px] montserrat-semibold"
                    placeholder="No File Selected"
                  />
                  <div className="btnBlock flex gap-[10px]">
                    <Button className="!mx-0" label="Browse" />
                    <Button className="!mx-0" label="Upload" />
                  </div>
                </div>
              </div>
              <FieldCheckbox label="Pin?" />

              <AttachmentsTabbed />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MatterDetailsTabbed;
