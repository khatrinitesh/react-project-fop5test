import { FaCloudDownloadAlt, FaPlus, FaPrint, FaUserAlt } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import TableFormat from "./TableFormat";

const SettingsPage = () => {
  return (
    <div className="settingPage">
      <SectionTitleComponent>
        <FaUserAlt className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          Users
        </h2>
      </SectionTitleComponent>
      <div className="UsersContent p-[30px] grid gap-[10px]">
        <div className="titleBlock flex items-center justify-between">
          <SearchComponent
            placeholder="Quick User Search"
            maxLength={50}
            disabled={false}
            className="w-full md:max-w-[20%] rounded-full"
          />
          <div className="optionBlock cursor-pointer flex gap-[10px]">
            <a href="javascript:void()">
              <img
                src="/img/icons/icon-plus.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </a>
            <a href="javascript:void()">
              <img
                src="/img/icons/icon-cloud-computing.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </a>
            <a href="javascript:void()">
              <img
                src="/img/icons/icon-printer.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>
        <TableFormat />
      </div>
    </div>
  );
};

export default SettingsPage;
