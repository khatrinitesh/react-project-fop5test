import { FaRegEnvelope } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import MailTabbed from "./mailTabbed";

const MailPage = () => {
  return (
    <div className="mailPage ">
      <div className="innerContent grid gap-[10px] w-full ">
        <SectionTitleComponent>
          <FaRegEnvelope className={` text-[20px] text-[var(--color6)]`} />
          <h2
            className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            Mail
          </h2>
        </SectionTitleComponent>
        <div className="py-[20px] px-[20px] md:px-[50px] grid gap-[20px]">
          <MailTabbed />
        </div>
      </div>
    </div>
  );
};

export default MailPage;
