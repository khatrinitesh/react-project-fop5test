import {
  FaCaretLeft,
  FaCaretRight,
  FaCloudDownloadAlt,
  FaPlus,
  FaPrint,
  FaRegUser,
} from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import MembersTable from "./components/membersTable";
import { useNavigate } from "react-router-dom";

const MembersPage = () => {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator("/members-profile");
  };
  return (
    <div className="membersPage ">
      <SectionTitleComponent>
        <FaRegUser className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          MEMBERS LIST
        </h2>
      </SectionTitleComponent>
      <div className="innerContent grid gap-[5px] w-full p-[20px]">
        <div className="toolbar flex justify-between gap-[10px] items-center">
          <SearchComponent
            className="md:max-w-[30%] rounded-full"
            placeholder="Quick Member Search"
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
        <div onClick={handleClick}>
          <MembersTable />
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
  );
};

export default MembersPage;
