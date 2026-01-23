import ContactPhoneNumbersTableSection from "./components/contactPhoneNumbersTableSection/ContactPhoneNumbersTableSection";
import EmploymentInfoSection from "./components/employmentInfoSection/EmploymentInfoSection";
import UploadProfileSection from "./components/uploadProfileSection/components/UploadProfileSection";

const MembersSection = () => {
  return (
    <div className="membersSection grid gap-[10px]">
      <UploadProfileSection />
      <EmploymentInfoSection />
      <ContactPhoneNumbersTableSection />
    </div>
  );
};

export default MembersSection;
