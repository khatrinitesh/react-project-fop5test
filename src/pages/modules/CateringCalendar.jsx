import { useState, useEffect } from "react";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "../../components/button/Button";

// Helper: Generate days of the month
const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const CateringCalendar = () => {
  const currentYear = new Date().getFullYear();

  // State
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [daysInMonth, setDaysInMonth] = useState([]);

  // Update days whenever month/year changes
  useEffect(() => {
    const days = getDaysInMonth(selectedMonth, selectedYear);
    setDaysInMonth(days);
  }, [selectedMonth, selectedYear]);

  // Handle month/year selection
  const handleMonthChange = (e) => setSelectedMonth(Number(e.target.value));
  const handleYearChange = (e) => setSelectedYear(Number(e.target.value));

  return (
    <div className="cateringCalendar contentBlock ">
      {/* Title */}
      <SectionTitleComponent>
        <FaCalendarAlt className="text-[var(--color6)]" />
        <h2 className="whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular">
          <strong>Catering Calendar</strong>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent p-5">
        {/* Controls */}
        <div className="flex md:flex-row flex-col gap-5 justify-end my-5">
          <Button className="!mx-0" label="Add 7C Lounge Event" />

          {/* Month & Year Filters */}
          <div className="flex gap-2">
            <select
              className="border rounded px-2 py-1"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, idx) => (
                <option key={idx} value={idx}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="border rounded px-2 py-1"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {Array.from({ length: 11 }, (_, i) => currentYear + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 border-t border-b py-2">
          {/* Weekday headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}

          {/* Blank days for offset */}
          {Array(daysInMonth[0]?.getDay())
            .fill(null)
            .map((_, idx) => (
              <div key={`blank-${idx}`} />
            ))}

          {/* Days */}
          {daysInMonth.map((date) => (
            <div
              key={date.toISOString()}
              className="border rounded p-2 text-center hover:bg-[var(--color5)] hover:text-white cursor-pointer"
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CateringCalendar;
