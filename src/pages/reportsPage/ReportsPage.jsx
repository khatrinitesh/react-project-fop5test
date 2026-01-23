import { FaBook, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import {
  querySelectedData,
  reportsSelectedData,
  reportsTabsData,
} from "./components/reportsData";
import { useState } from "react";
import Button from "../../components/button/Button";
import FieldDropdown from "../../components/fieldDropdown/FieldDropdown";
import TableSavedQueries from "./components/TableSavedQueries";
import TableSavedTemplates from "./components/TableSavedTemplates";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("finance"); // default active
  return (
    <div className="reportPage">
      <SectionTitleComponent>
        <FaBook className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          Reports
        </h2>
      </SectionTitleComponent>
      <div className="innerContent grid gap-[20px] w-full p-[20px]">
        <div className="tabbedBlock w-full grid gap-[20px] ">
          <ul className="listTab flex flex-col md:flex-row ">
            {reportsTabsData.map((tab, index) => (
              <li key={tab.id} className="w-auto">
                <a
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full md:w-auto block cursor-pointer px-4 py-[7px] 
                border border-[#010d4a] text-[14px] 
                text-extraSmallDescription montserrat-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-[#1b7398] text-white"
                    : "bg-[#f2f5ff] text-[#010d4a]"
                }
                ${index < reportsTabsData.length - 1 ? "border-r-0" : ""} 
              `}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 🔹 Example Tab Content Section */}
          <div className="mt-4">
            {activeTab === "finance" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Finance Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[8%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox  flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[8%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
            {activeTab === "member" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Member Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
            {activeTab === "grievance" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Grievance Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
            {activeTab === "dispatch" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Dispatch Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox  mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
            {activeTab === "apprenticeship" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Apprenticeship Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
            {activeTab === "misc" && (
              <>
                <div className="grid gap-[10px]">
                  {/* <h3 className="montserrat-semibold text-smallSubTitle">
                    Misc. Reports
                  </h3> */}
                  <TableSavedTemplates />
                  <div className="flex lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Template"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Template" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox mb-[20px] flex flex-col md:flex-row md:items-center gap-[10px]">
                    <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Report:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={reportsSelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <TableSavedQueries />
                  <div className="flex  lg:flex-row flex-col gap-[10px] justify-between lg:items-center">
                    <div className="btnBlock lg:flex-row flex-col flex gap-[10px] items-start justify-start">
                      <Button
                        label="Add New Query"
                        className="max-w-auto !mx-0"
                      />
                      <Button label="Request New Query" className="!mx-0" />
                      <Button label="Edit/View Selected" className="!mx-0" />
                      <Button label="Delete Selected" className="!mx-0" />
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
                  <div className="fieldBox flex flex-col lg:flex-row md:items-center gap-[10px]">
                    <span className="lg:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                      Selected Query:
                    </span>
                    <div className="box">
                      <FieldDropdown
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={querySelectedData}
                        maxLength={10}
                        disabled={true}
                        className="md:w-64"
                      />
                    </div>
                  </div>
                  <div className="btnBlock">
                    <Button
                      label="RUN REPORT"
                      className="bg-[#e28351] border-[#1b7398] border-[1px] w-[200px]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
