import { useState } from "react";
import CalendarComponent from "../../components/calendarComponent/CalendarComponent";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import TableFormatComponent from "../../components/tableFormatComponent/TableFormatComponent";
import Button from "./../../components/button/Button";
import {
  deadlinesData2,
  tableHeaders,
  tasksData2,
} from "../../constants/constants";
import { FaCalendarAlt } from "react-icons/fa";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="calendarPage">
      <div className="innerContent">
        <SectionTitleComponent>
          <FaCalendarAlt className={` text-[var(--color6)]`} />
          <h2
            className={`whitespace-nowrap  text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
          >
            Calendar
          </h2>
        </SectionTitleComponent>
        <br />
        <CalendarComponent onChange={setDate} value={date} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] p-[10px]">
          <div className="boxGrid grid gap-[10px]">
            <TableFormatComponent
              caption="Upcoming Grievance Tasks"
              colorKey="color2"
              thead={tableHeaders.tasks}
              rows={tasksData2}
              showScrollbar={true}
            />
            <div className="btnBlock flex items-start  w-full">
              <Button
                label="Open Grievances"
                className="!mx-0"
                onClick={handleClick}
                variant="color2"
              />
            </div>
          </div>
          <div className="boxGrid grid gap-[10px]">
            <TableFormatComponent
              caption="Upcoming Dates & Deadlines"
              colorKey="color3"
              thead={tableHeaders.deadlines}
              rows={deadlinesData2}
            />
            <div className="btnBlock flex items-start  w-full">
              <Button
                label="Open Calendar"
                className="!mx-0"
                onClick={handleClick}
                variant="color3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
