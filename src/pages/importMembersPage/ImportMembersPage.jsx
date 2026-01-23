import { FaFileDownload } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import {
  DROPDOWN_OPTIONS_1,
  DROPDOWN_OPTIONS_2,
  DROPDOWN_OPTIONS_4,
} from "../../constants/constants";
import FieldDropdown from "../../components/fieldDropdown/FieldDropdown";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import PriorImages from "./components/priorImages/PriorImages";

const ImportMembersPage = () => {
  return (
    <div className="importingPage">
      <div className="innerContent grid gap-[10px] w-full">
        <SectionTitleComponent>
          <FaFileDownload className={` text-[20px] text-[var(--color6)]`} />
          <h2
            className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            Import: <span className="text-white">Members</span>
          </h2>
        </SectionTitleComponent>
        <div className="m-[20px]">
          <div className="flex flex-col grid-cols-1 md:grid-cols-2 gap-[10px]">
            <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
              <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                Select Import Layout:
              </span>
              <div className="box">
                <FieldDropdown
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  options={DROPDOWN_OPTIONS_1}
                  maxLength={10}
                  disabled={true}
                  className="md:w-64 text-[#6570a9]"
                />
              </div>
            </div>
            <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
              <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                Select Import File:
              </span>
              <div className="box flex flex-col md:flex-row md:items-center gap-[10px]">
                <FieldDropdown
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  options={DROPDOWN_OPTIONS_2}
                  maxLength={10}
                  disabled={true}
                  className="w-64 text-[#6570a9]"
                />
                <div className="btnBlock">
                  <Button className="!mx-0" label="Browse" />
                </div>
              </div>
            </div>
            <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
              <span className="md:w-[15%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
                Pay Period:
              </span>
              <div className="box flex flex-col md:flex-row md:items-center gap-[10px]">
                <FieldDropdown
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  options={DROPDOWN_OPTIONS_4}
                  maxLength={10}
                  disabled={true}
                  className="w-64 text-[#6570a9]"
                />
                <div className="btnBlock">
                  <Button
                    className="whitespace-nowrap !mx-0"
                    label="Import File"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="summaryBlock py-[12px] grid gap-[5px]">
            <div className="boxSummary">
              <p className="desc text-[#e28351] text-extraSmallDescription montserrat-medium leading-normal">
                View appropriate template below before import and ensure headers
                match.
              </p>
              <p className="desc text-[#f66641] text-extraSmallDescription montserrat-medium leading-normal">
                New Import layout? Contact{" "}
                <Link className="underline montserrat-bold">VUE Support</Link>{" "}
                for new custom import template.
              </p>
            </div>
            <div className="boxSummary">
              <p className="desc text-[#010d4a] text-extraSmallDescription montserrat-medium leading-normal">
                Members Import HQ Template:{" "}
                <a href="" className="underline  text-[#1b7398]">
                  YourLocalMemberImportTemplate1.xls
                </a>
              </p>
              <p className="desc text-[#010d4a] text-extraSmallDescription montserrat-medium leading-normal">
                Members Import Local Template:{" "}
                <a
                  href="javascript:void(0)"
                  className="underline  text-[#1b7398]"
                >
                  YourLocalMemberImportTemplate2.xls
                </a>
              </p>
            </div>
          </div>
          <PriorImages />
        </div>
      </div>
    </div>
  );
};

export default ImportMembersPage;
