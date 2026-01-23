import React from "react";
import FieldDropdown from "../../../../components/fieldDropdown/FieldDropdown";
import { DROPDOWN_OPTIONS_2 } from "../../../../constants/constants";
import Button from "../../../../components/button/Button";
import DocumentTable from "./DocumentTable";
import FieldCheckbox from "./../../../../components/fieldCheckbox/FieldCheckbox";
import FieldInput from "../../../../components/fieldInput/FieldInput";

const DocumentSection = () => {
  return (
    <div className="grid gap-[10px]">
      <div className="fieldBox flex flex-col md:flex-row md:items-center gap-[10px]">
        <span className="md:w-[6%] fieldLbl text-extraSmallDescription text-[#010d4a] montserrat-semibold">
          Select File:
        </span>
        <div className="box flex flex-col md:flex-row md:items-center gap-[10px]">
          <FieldInput
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={DROPDOWN_OPTIONS_2}
            maxLength={10}
            disable={true}
            readonly={true}
            className="w-64 text-[#6570a9] rounded-[5px] border-[1px] border-[#acb2d1] montserrat-bold"
            placeholder="No File Selected"
          />
          <div className="btnBlock flex gap-[10px]">
            <Button className="!mx-0" label="Browse" />
            <Button className="!mx-0" label="Upload" />
          </div>
        </div>
      </div>
      <FieldCheckbox label="Pin?" />
      <DocumentTable />
    </div>
  );
};

export default DocumentSection;
