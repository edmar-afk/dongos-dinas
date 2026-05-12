/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
// Assume these icons are imported from an icon library
import { ChevronDownIcon, HorizontaLDots } from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";
import logo from "../assets/image/logo.jpg";
import {
  VenusAndMars,
  Road,
  University,
  Church,
  Users,
  Factory,
  House,
  GraduationCap,
  HousePlus,
  BriefcaseBusiness,
  Briefcase,
  BanknoteArrowUp,
  TentTree,
} from "lucide-react";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ChurchIcon from "@mui/icons-material/Church";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import SchoolIcon from "@mui/icons-material/School";

const navSections = [
  {
    label: null,
    items: [
      {
        icon: <DashboardCustomizeIcon />,
        name: "Dashboard",
        path: "/",
      },

      {
        icon: <PeopleAltIcon />,
        name: "Brgy Profile",
        path: "/brgy-info",
      },
    ],
  },
  {
    label: "Population distribution",
    items: [
      {
        icon: <House />,
        name: "Household Population",
        path: "/household-population",
      },
      {
        icon: <VenusAndMars size={16} />,
        name: "Age & Sex Distribution",
        path: "/age-sex-distribution",
      },
      {
        icon: <Factory />,
        name: "Population by Sector",
        path: "/population-sector",
      },
      {
        icon: <Users />,
        name: "Population by Ethnic Group",
        path: "/population-ethnic-group",
      },
      {
        icon: <Church />,
        name: "Population by Religious Affiliation",
        path: "/population-religious",
      },
    ],
  },
  {
    label: "Education",
    items: [
      {
        icon: <EscalatorWarningIcon />,
        name: "School - Age Distribution",
        path: "/school-age-distribution",
      },
      {
        icon: <GraduationCap />,
        name: "Elementary School Data by School Year",
        path: "/elementary-school-data",
      },

      {
        icon: <Road />,
        name: "Distance from Community to School",
        path: "/distance-from-school",
      },
    ],
  },
  {
    label: "Social Welfare",
    items: [
      // {
      //   icon: <University />,
      //   name: "Pre-School Children",
      //   path: "/age-sex",
      // },
      {
        icon: <HousePlus />,
        name: "No. of Household by Tenure Status",
        path: "/household-tenure",
      },
    ],
  },
  {
    label: "Puberty by Purok",
    items: [
      // {
      //   icon: <BriefcaseBusiness />,
      //   name: "Employment",
      //   path: "/age-sex",
      // },
      {
        icon: <Briefcase />,
        name: "Household with Income poverty threshold",
        path: "/purok-puberty",
      },
      {
        icon: <BanknoteArrowUp />,
        name: "Household with Income and Food threshold, by Purok",
        path: "/household-with-income",
      },
    ],
  },
  {
    label: "Agriculture",
    items: [
      {
        icon: <TentTree />,
        name: "Agricultural Land Use",
        path: "/agriculture",
      },
    ],
  },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef({});

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname],
  );

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index, menuType) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items, menuType) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size  ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
              ? "w-[290px]"
              : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <p className="dark:hidden flex items-center gap-3">
                <img
                  className="w-12 rounded-full"
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={40}
                />

                <span className="flex flex-col leading-tight">
                  <span className="font-semibold dark:text-white">
                    Brgy. Dongos
                  </span>
                  <span className="text-xs uppercase text-gray-500">
                    Dinas, Zamboanga del Sur
                  </span>
                </span>
              </p>

              <p className="hidden dark:flex items-center gap-3">
                <img
                  className="w-12 rounded-full"
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={40}
                />

                <span className="flex flex-col leading-tight">
                  <span className="font-semibold dark:text-white">
                    Brgy. Dongos
                  </span>
                  <span className="text-xs uppercase text-gray-400">
                    Dinas, Zamboanga del Sur
                  </span>
                </span>
              </p>
            </>
          ) : (
            <img
              className="w-12 rounded-full"
              src={logo}
              alt="Logo"
              width={150}
              height={40}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>
              {navSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6">
                  {section.label && (
                    <h3 className="mb-3 text-xs uppercase text-gray-400 font-semibold tracking-wider px-2">
                      {section.label}
                    </h3>
                  )}

                  {renderMenuItems(section.items, "main")}
                </div>
              ))}
            </div>
            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              ></h2>
            </div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;
