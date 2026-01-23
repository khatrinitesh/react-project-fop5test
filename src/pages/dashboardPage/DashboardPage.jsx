import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../components/cardComponent/CardComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import MemberComponent from "../../components/memberComponent/MemberComponent";
import Button from "../../components/button/Button";
import TableFormatComponent from "../../components/tableFormatComponent/TableFormatComponent";
import {
  deadlinesData,
  membersData,
  tableHeaders,
  tasksData,
} from "../../constants/constants";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="dashboardPage m-[20px]">
        <div className="innerContent grid gap-[30px] w-full">
          <CardComponent />
          <div className="grid gap-[20px] grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-start">
            <div className="leftBox grid  gap-[10px]">
              <SearchComponent
                placeholder="Quick Name Lookup"
                maxLength={50}
                disabled={false}
                className="w-full md:max-w-[50%] 2xl:max-w-[40%] rounded-full"
              />

              <MemberComponent />
              <div className="btnBlock flex items-start  w-full">
                <Button
                  label="Search"
                  className="!mx-0"
                  onClick={handleClick}
                  variant="color1"
                />
              </div>
            </div>
            <div className="rightBox">
              <span className="mt-[8px] block"></span>
              <TableFormatComponent
                caption="Recently Accessed Members"
                colorKey="color1"
                thead={tableHeaders.members}
                rows={membersData}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div className="boxGrid grid gap-[10px]">
              <TableFormatComponent
                caption="Upcoming Grievance Tasks"
                colorKey="color2"
                thead={tableHeaders.tasks}
                rows={tasksData}
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
                rows={deadlinesData}
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
    </>
  );
};

export default DashboardPage;
