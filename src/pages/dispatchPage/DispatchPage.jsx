import {
  FaCaretLeft,
  FaCaretRight,
  FaCloudDownloadAlt,
  FaPrint,
  FaRegUser,
} from "react-icons/fa";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import DispatcHTable from "./components/DispatcHTable";
import Button from "./../../components/button/Button";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";

const DispatchPage = () => {
  return (
    <div className="dispatchPage">
      <div className="innerContent grid gap-[10px] w-full">
        <SectionTitleComponent>
          <FaRegUser className={` text-[var(--color6)]`} />
          <h2
            className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            Dispatch
          </h2>
        </SectionTitleComponent>
        <div className="m-[20px] grid gap-[10px] ">
          <div className="toolbar flex justify-end gap-[10px] items-center">
            <SearchComponent
              className="md:max-w-[30%] rounded-full"
              placeholder="Project Lookup"
            />
            <div className="optionBlock flex gap-[10px]">
              <FaCloudDownloadAlt className="text-[var(--color5)]" />
              <FaPrint className="text-[var(--color5)]" />
            </div>
          </div>

          <DispatcHTable />
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
      </div>
    </div>
  );
};

export default DispatchPage;
