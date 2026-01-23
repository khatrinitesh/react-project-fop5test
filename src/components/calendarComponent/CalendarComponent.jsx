import { useState } from "react";
import "./calendar-style.css";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

const CalendarComponent = () => {
  const today = new Date();

  // Default view: June 2025
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1));

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = endOfMonth.getDate();
  const startDay = startOfMonth.getDay(); // Sunday = 0

  // Navigation
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToFirstMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), 0, 1)); // January
  };

  const goToLastMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), 11, 1)); // December
  };

  // Render Days
  const renderDays = () => {
    const days = [];

    // Highlighted dates
    const yellowDates = [2, 10, 13, 26, 30]; // 🟡 Yellow
    const greenDates = [9, 11, 16]; // 🟢 Green

    // Empty slots before 1st day
    for (let i = 0; i < startDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // Fill actual dates
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      // Determine background color
      let backgroundColor = "";
      if (yellowDates.includes(i)) {
        backgroundColor = "#ffdfaf"; // Yellow
      } else if (greenDates.includes(i)) {
        backgroundColor = "#e3fadf"; // Green
      }

      days.push(
        <div
          key={i}
          className={`calendar-day ${isToday ? "today" : ""}`}
          style={{ backgroundColor }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  return (
    <div className="calendarWRapper overflow-hidden">
      <div className="calendar-container overflow-hidden max-w-[95%] md:max-w-[60%] mx-auto">
        {/* Calendar Header */}
        <div className="calendar-header flex justify-between items-center">
          <button className="btnLeft" onClick={goToFirstMonth}>
            <FaAngleDoubleLeft />
          </button>
          <div className="middleBlock flex items-center gap-2 justify-center">
            <button onClick={prevMonth}>
              <FaCaretLeft />
            </button>
            <span className="uppercase whitespace-nowrap text-[var(--color6)] montserrat-regular text-smallSubTitle montserrat-semibold">
              {monthName} {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth}>
              <FaCaretRight />
            </button>
          </div>
          <button className="btnRight" onClick={goToLastMonth}>
            <FaAngleDoubleRight />
          </button>
        </div>

        {/* Days Grid */}
        <div className="calendar-grid !text-center flex items-center justify-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="calendar-day !text-center header montserrat-regular text-extraSmallDescription"
            >
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
