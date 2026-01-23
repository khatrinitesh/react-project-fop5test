import { FaUserShield } from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import AddRoles from "./components/Roles/AddRoles";

const ManageRolesPage = () => {
  return (
    <div className="settingPage">
      <SectionTitleComponent>
        <FaUserShield className={` text-[var(--color6)] text-[30px]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          Manage Roles
        </h2>
      </SectionTitleComponent>
      <div className="UsersContent p-[30px] grid gap-[10px]">
        <AddRoles />
      </div>
    </div>
  );
};

export default ManageRolesPage;
