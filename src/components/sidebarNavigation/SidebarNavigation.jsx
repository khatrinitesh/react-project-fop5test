import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarNavigation } from "../../constants/constants";
import { FaChevronDown } from "react-icons/fa";

const SidebarNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label, path, hasChildren) => {
    if (hasChildren) {
      setOpenDropdowns((prev) => ({
        ...prev,
        [label]: !prev[label],
      }));
    }

    if (path && !hasChildren) {
      navigate(path);
    }
  };

  const isActive = (path) => location.pathname === path;

  // Recursive render function to handle nested dropdowns
  const renderNavItems = (items) => {
    return items.map((item, index) => {
      const Icon = item.icon;
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = openDropdowns[item.label];
      const isParentActive =
        isActive(item.path) ||
        (hasChildren &&
          item.children.some(
            (child) =>
              isActive(child.path) ||
              (child.children && child.children.some((c) => isActive(c.path))),
          ));

      return (
        <li key={index} className="mb-1">
          {hasChildren ? (
            <>
              <button
                onClick={() => toggleDropdown(item.label, item.path, true)}
                className={`cursor-pointer flex w-full items-center justify-between px-2 py-1 rounded-md transition montserrat-medium text-extraSmallDescription ${
                  isParentActive ? "text-[#b5f5f8]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {Icon && (
                    <Icon
                      className="text-base"
                      style={{
                        color: isParentActive ? "#eb973a" : "inherit",
                      }}
                    />
                  )}
                  <span>{item.label}</span>
                </div>

                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <ul
                className={`pl-6 transition-all duration-300 overflow-hidden space-y-1 ${
                  isOpen ? "opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {renderNavItems(item.children)}
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
    });
  };

  return (
    <nav
      aria-label="Sidebar Navigation"
      className="p-2 sidebarNavigation overflow-y-auto h-screen verticalScrollbar"
    >
      <ul>{renderNavItems(sidebarNavigation)}</ul>
    </nav>
  );
};

export default SidebarNavigation;
