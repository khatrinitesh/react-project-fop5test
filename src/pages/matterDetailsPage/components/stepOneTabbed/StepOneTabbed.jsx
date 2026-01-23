import { useState } from "react";
import FieldTextAreaComponent from "../../../../components/fieldTextAreaComponent/FieldTextAreaComponent";
import FieldInput from "../../../../components/fieldInput/FieldInput";

const StepOneTabbed = () => {
  const [formData, setFormData] = useState({
    step1InitiationDate: "01/02/2025",
    responseDueDate: "01/09/2025",
    step1MeetingDate: "01/02/2025",
    responseReceivedDate: "01/08/2025",
    managementContact: "Lt. Deborah Hall",
    step1Summary:
      "Officer James Lee received a 3-day suspension for alleged insubordination during a post-incident debrief. Disciplinary meeting occurred without union representation, and no formal investigation was conducted.",
    step1Decision: "arbitration", // checkbox selection
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        step1Decision: checked ? value : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <div className="w-full bg-[#edf4f7] p-4 text-[13px] text-[#010d4a] montserrat-medium">
      <div className="grid max-w-[80%]">
        {/* Dates and Contact */}
        <div className="grid grid-cols-1 gap-3 ">
          <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
            <label className="md:w-[20%]">Step 1 Initiation Date:</label>
            <div className="md:w-[20%] w-full">
              <FieldInput
                type="date"
                name="step1InitiationDate"
                value={formData.step1InitiationDate}
                onChange={handleChange}
                className="!border-[#1b7398] rounded w-full"
              />
            </div>
          </div>

          <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
            <label className="md:w-[20%]">Response Due Date:</label>
            <div className="md:w-[20%] w-full">
              <FieldInput
                type="date"
                name="responseDueDate"
                value={formData.responseDueDate}
                onChange={handleChange}
                className="!border-[#1b7398] rounded w-full"
              />
            </div>
          </div>

          <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
            <label className="md:w-[20%] w-full">Step 1 Meeting Date:</label>
            <div className="md:w-[20%]">
              <FieldInput
                type="date"
                name="step1MeetingDate"
                value={formData.step1MeetingDate}
                onChange={handleChange}
                className="!border-[#1b7398] rounded w-full"
              />
            </div>
          </div>

          <div className="flex md:items-center flex-col md:flex-row items-start gap-3">
            <label className="md:w-[20%]">Response Received on:</label>
            <div className="md:w-[20%] w-full">
              <FieldInput
                type="date"
                name="responseReceivedDate"
                value={formData.responseReceivedDate}
                onChange={handleChange}
                className="!border-[#1b7398] rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* Management Contact */}
        <div className="mt-3 flex md:items-center flex-col md:flex-row items-start gap-3">
          <label className="md:w-[20%]">Management Contact:</label>
          <div className="md:w-[20%] w-full">
            <FieldInput
              type="text"
              name="managementContact"
              value={formData.managementContact}
              onChange={handleChange}
              className="!border-[#1b7398] rounded w-full"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 flex md:items-center flex-col md:flex-row items-start gap-3">
          <label className="md:w-[20%] w-full">Step 1 Summary:</label>
          <div className="md:w-[70%]">
            <FieldTextAreaComponent
              name="step1Summary"
              value={formData.step1Summary}
              onChange={handleChange}
              className="resize-none !border-[#1b7398] rounded w-full"
              rows={2}
            />
          </div>
        </div>

        {/* Decision Checkboxes */}
        <div className="mt-4 md:ml-[21%] space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="no-appeal"
              checked={formData.step1Decision === "no-appeal"}
              onChange={handleChange}
              className="!border-[#1b7398] rounded w-4 h-4"
            />
            I agree with the response and will not appeal further
          </label>

          <label className="flex items-center md:items-start text-left gap-2">
            <input
              type="checkbox"
              value="next-level"
              checked={formData.step1Decision === "next-level"}
              onChange={handleChange}
              className="!border-[#1b7398] rounded w-4 h-4"
            />
            I disagree and wish to proceed to the next appeal level
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="arbitration"
              checked={formData.step1Decision === "arbitration"}
              onChange={handleChange}
              className="!border-[#1b7398] rounded w-4 h-4"
            />
            I disagree and request arbitration
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="bypass"
              checked={formData.step1Decision === "bypass"}
              onChange={handleChange}
              className="!border-[#1b7398] rounded w-4 h-4"
            />
            I choose to bypass this step and escalate to the next level
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepOneTabbed;
