import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarNavigation } from "../constants/constants";
import { FiMenu } from "react-icons/fi";
import FooterSection from "./footerSection/FooterSection";
import SidebarNavigation from "../components/sidebarNavigation/SidebarNavigation";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen lg:h-screen flex desktop:overflow-hidden">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-[200px] min-h-[100dvh] bg-color1 text-white p-[5px] bg-[var(--color1)]">
          <div className="logoBlock">
            <img
              src="/img/logo-dashboard.png"
              alt=""
              className="max-w-[120px]  block"
            />
          </div>
          <SidebarNavigation />
        </aside>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* Header */}
        <header className="bg-[var(--color1)] text-white p-[10px] shadow-md flex items-center justify-between">
          {/* Left Side: Hamburger + Title */}
          <div className="flex items-center gap-[5px]">
            <button
              onClick={toggleSidebar}
              className="text-[#17668e] focus:outline-none cursor-pointer"
            >
              <FiMenu size={24} />
            </button>
            {/* <h1 className="text-subTitle montserrat-medium">Dashboard</h1> */}
          </div>

          {/* Right Side: Logo */}
          <div className="flex items-center gap-[10px]">
            <div className="profileBlock  items-center gap-[10px] hidden sm:flex">
              <span className="subtitle ext-smallDescription montserrat-regular ">
                Welcome
              </span>
              <span className="text-[var(--color6)] text-smallDescription montserrat-regular">
                Joel Rosen
              </span>
            </div>
            <img
              src="/img/logo.png" // adjust path as needed
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </div>
        </header>
        {/* Main Page Content */}
        <main className="flex-1 bg-color2 md:min-h-[calc(100dvh-200px)] overflow-y-auto">
          {children}
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default DashboardLayout;
