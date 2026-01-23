import Button from "../../../../components/button/Button";
import BeneficiariesTableSection from "../beneficiariesTableSection/BeneficiariesTableSection";
import CoverageTableSection from "./coverageTableSection/CoverageTableSection";

const InsuranceSection = () => {
  return (
    <div className="insuranceSection grid gap-[30px]">
      <div className="boxDetails grid gap-[10px]">
        <CoverageTableSection />
        <div className="btnBlock flex gap-[10px]">
          <Button className="!mx-0" label="Add" />
          <Button className="!mx-0" label="Save" />
          <Button className="!mx-0" label="Cancel" />
        </div>
      </div>
      <div className="boxDetails grid gap-[10px]">
        <BeneficiariesTableSection />
        <div className="btnBlock flex gap-[10px]">
          <Button className="!mx-0" label="Add" />
          <Button className="!mx-0" label="Save" />
          <Button className="!mx-0" label="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default InsuranceSection;
