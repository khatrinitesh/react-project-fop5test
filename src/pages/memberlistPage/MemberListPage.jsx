import { FaCloudDownloadAlt, FaPlus, FaPrint, FaUsers } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "./../../components/searchComponent/SearchComponent";

const MemberListPage = () => {
  return (
    <div className="memberListPage">
      <div className="innerContent">
        <SectionTitleComponent>
          <FaUsers className={` text-[var(--color6)]`} />
          <h2
            className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            MEMBERS LIST
          </h2>
        </SectionTitleComponent>
        <div className="memberListContent p-[10px]">
          <div className="titleBlock flex items-center justify-between">
            <SearchComponent
              placeholder="Quick Member Search"
              maxLength={50}
              disabled={false}
              className="w-full md:max-w-[20%] rounded-full"
            />
            <div className="toolbar flex gap-[5px]">
              <FaPlus className="text-[var(--color5)]" />
              <FaCloudDownloadAlt className="text-[var(--color5)]" />
              <FaPrint className="text-[var(--color5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberListPage;
