import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarNavigation } from "../../constants/constants";
import {
  FaFileAlt,
  FaRegUserCircle,
  FaSearchPlus,
  FaUser,
} from "react-icons/fa";

const SidebarNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openDropdowns, setOpenDropdowns] = useState({});
  const [showMemberProfile, setShowMemberProfile] = useState(false);
  const [showMatterDetails, setShowMatterDetails] = useState(false);

  // Detect route change to show dynamic submenus
  useEffect(() => {
    if (location.pathname === "/members") {
      setShowMemberProfile(true);
      setOpenDropdowns((prev) => ({ ...prev, Members: true }));
    } else if (location.pathname === "/grievances") {
      setShowMatterDetails(true);
      setOpenDropdowns((prev) => ({ ...prev, Grievances: true }));
    }
  }, [location.pathname]);

  const toggleDropdown = (label, path) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav aria-label="Sidebar Navigation" className="p-2">
      <ul>
        {sidebarNavigation.map((item, index) => {
          const Icon = item.icon;
          const isOpen = openDropdowns[item.label];
          const isParentActive =
            isActive(item.path) ||
            (item.children &&
              item.children.some((child) => isActive(child.path)));

          // Handle custom dynamic children for Members and Grievances
          const customChildren = [];
          if (item.label === "Members" && showMemberProfile) {
            customChildren.push({
              label: "Member Profile",
              path: "/members-profile",
              icon: FaRegUserCircle,
            });
          }
          if (item.label === "Grievances" && showMatterDetails) {
            customChildren.push({
              label: "Matter Details",
              path: "/matter-details",
              icon: FaSearchPlus,
            });
          }

          const children = [...(item.children || []), ...customChildren];

          return (
            <li key={index} className="mb-1">
              {children.length > 0 ? (
                <>
                  {/* Dropdown button */}
                  <button
                    onClick={() => toggleDropdown(item.label, item.path || "#")}
                    className={`flex w-full items-center gap-2 px-2 py-1 rounded-md transition montserrat-medium text-extraSmallDescription ${
                      isParentActive ? "text-[#b5f5f8]" : ""
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className="text-base"
                        style={{
                          color: isParentActive ? "#eb973a" : "inherit",
                        }}
                      />
                    )}
                    {item.label}
                  </button>

                  {/* Dropdown children */}
                  <ul
                    className={`pl-6 transition-all duration-300 overflow-hidden space-y-1 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {children.map((child, childIndex) => {
                      const ChildIcon = child.icon;
                      const childIsActive = isActive(child.path);
                      return (
                        <li key={childIndex}>
                          <Link
                            to={child.path}
                            className={`flex items-center gap-2 px-2 py-1 rounded-md transition text-extraSmallDescription ${
                              childIsActive ? "text-[#b5f5f8]" : ""
                            }`}
                          >
                            {ChildIcon && (
                              <ChildIcon
                                className="text-base"
                                style={{
                                  color: childIsActive ? "#eb973a" : "inherit",
                                }}
                              />
                            )}
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-2 py-1 rounded-md transition montserrat-medium text-extraSmallDescription ${
                    isParentActive ? "text-[#b5f5f8]" : ""
                  }`}
                >
                  {Icon && (
                    <Icon
                      className="text-base"
                      style={{
                        color: isParentActive ? "#eb973a" : "inherit",
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
