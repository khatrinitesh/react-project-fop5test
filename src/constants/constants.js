import {
  FaHome,
  FaPlusCircle,
  FaSearch,
  FaUser,
  FaCity,
  FaBriefcase,
  FaTasks,
  FaBox,
  FaHandshake,
  FaMicrophone,
  FaBullhorn,
  FaUserShield,
  FaUserCog,
  FaUsers,
  FaUserPlus,
  FaUserAlt,
  FaLock,
  FaKey,
  FaMobileAlt,
  FaPaperPlane,
  FaCogs,
  FaTruck,
  FaGraduationCap,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  FaFileAlt,
  FaMoneyCheckAlt,
  FaExclamationTriangle,
  FaCreditCard,
  FaExchangeAlt,
  FaUpload,
  FaUserFriends,
  FaPrint,
  FaBalanceScale,
  FaFlag,
} from "react-icons/fa";

export const sidebarNavigation = [
  {
    label: "Home",
    icon: FaHome,
    path: "/dashboard",
    children: [
      {
        label: "Email",
        icon: FaBullhorn,
        path: "/dashboard/email",
      },
    ],
  },

  {
    label: "New",
    icon: FaPlusCircle,
    children: [
      { label: "Member", icon: FaUser, path: "/new/member" },
      { label: "One Philly", icon: FaCity, path: "/new/one-philly-issue" },
      { label: "Matter", icon: FaBriefcase, path: "/new/legal-matters-search" },
      { label: "Task", icon: FaTasks, path: "/new/task" },
      { label: "Product", icon: FaBox, path: "/new/product" },
      { label: "Meeting", icon: FaHandshake, path: "/new/meeting" },
      { label: "Interview", icon: FaMicrophone, path: "/new/interview" },
      { label: "Announcement", icon: FaBullhorn, path: "/new/announcement" },
    ],
  },

  {
    label: "Search",
    icon: FaSearch,
    children: [
      { label: "Member", icon: FaUserAlt, path: "/search/member" },
      { label: "One Philly", icon: FaCity, path: "/search/one-philly" },
      { label: "Matter", icon: FaBriefcase, path: "/search/matter" },
      { label: "Task", icon: FaTasks, path: "/search/task" },
      { label: "Product", icon: FaBox, path: "/search/product" },
      { label: "Meeting", icon: FaHandshake, path: "/search/meeting" },
      { label: "Interview", icon: FaMicrophone, path: "/search/interview" },
      { label: "Announcement", icon: FaBullhorn, path: "/search/announcement" },
    ],
  },

  {
    label: "Admin",
    icon: FaUserShield,
    children: [
      {
        label: "My Settings",
        icon: FaUserCog,
        path: "/admin/my-settings",
      },

      {
        label: "Users",
        icon: FaUsers,
        children: [
          {
            label: "Add User",
            icon: FaUserPlus,
            path: "/admin/users/add",
          },
          {
            label: "Search Users",
            icon: FaUserAlt,
            path: "/admin/users/search",
          },
        ],
      },

      {
        label: "Security Roles",
        icon: FaLock,
        path: "/admin/security-roles",
      },

      {
        label: "Role Permissions",
        icon: FaKey,
        path: "/admin/role-permissions",
      },

      {
        label: "Flags",
        icon: FaFlag,
        path: "/admin/flags",
      },

      {
        label: "MFA Settings",
        icon: FaMobileAlt,
        path: "/admin/mfa-settings",
      },

      {
        label: "Send to City",
        icon: FaPaperPlane,
        path: "/admin/send-to-city",
      },
    ],
  },

  {
    label: "Modules",
    icon: FaCalendarAlt,
    children: [
      {
        label: "Catering Calendar",
        icon: FaCalendarAlt,
        path: "/modules/catering-calendar",
      },
      {
        label: "Change File",
        icon: FaFileAlt,
        path: "/modules/change-file",
      },
      {
        label: "Add Payment",
        icon: FaMoneyCheckAlt,
        path: "/modules/add-payment",
      },
      {
        label: "Generate Exceptions",
        icon: FaExclamationTriangle,
        path: "/modules/generate-exceptions",
      },
      {
        label: "Add Order Payment",
        icon: FaCreditCard,
        path: "/modules/add-order-payment",
      },
      {
        label: "Add Enrollment",
        icon: FaUserPlus,
        path: "/modules/add-enrollment",
      },
      {
        label: "Change Rate Code",
        icon: FaExchangeAlt,
        path: "/modules/change-rate-code",
      },
      {
        label: "Import Modules",
        icon: FaUpload,
        path: "/modules/import-modules",
      },
      {
        label: "Change Enrollments",
        icon: FaUsers,
        path: "/modules/change-enrollments",
      },
      {
        label: "Search Booster",
        icon: FaSearch,
        path: "/modules/search-booster-member",
      },
      // {
      //   label: "Members",
      //   icon: FaUserFriends,
      //   path: "/modules/members",
      // },
      {
        label: "Generate Checks",
        icon: FaPrint,
        path: "/modules/generate-checks",
      },
      {
        label: "RHBJPT Reconciliation",
        icon: FaBalanceScale,
        path: "/modules/rhbjpt-reconciliation",
      },
      {
        label: "Clear Flags",
        icon: FaFlag,
        path: "/modules/clear-flags",
      },
      {
        label: "City Export File",
        icon: FaCity,
        path: "/modules/city-export-file",
      },
    ],
  },
];

export const cardData = [
  {
    number: "710",
    headtitle: "Members",
    leftColor: "#4bcc70",
    rightIcon: "FaUserFriends",
    rightColor: "#00bf63",
    path: "/members", // ✅ Add this
  },
  {
    number: "14",
    headtitle: "Open Grievance Tasks",
    leftColor: "#f49c14",
    rightIcon: "FaExclamationCircle",
    rightColor: "#d08716",
    path: "/grievances", // ✅ Add this
  },
  {
    number: "$56,575",
    headtitle: "Monthly Dues",
    leftColor: "#44b7e4",
    rightIcon: "FaHandHoldingUsd",
    rightColor: "#3f9fc5",
    path: "/payments", // ✅ Add this
  },
];

export const membersData = [
  {
    field1: "Joel Rosen",
    field2: "joel@velarium.com",
    field3: "(310) 995-8653",
  },
  {
    field1: "Jessie O'donnell",
    field2: "jesse@youremail.net",
    field3: "(310) 555-1123",
  },
  {
    field1: "Steve Brooks",
    field2: "steve@yourlocal.com",
    field3: "(310) 555-4454",
  },
  {
    field1: "Kevin Adams",
    field2: "kevin@yourlocal.com",
    field3: "(310) 555-1111",
  },
];
export const tasksData = [
  {
    field1: "001-2025",
    field2: "04/13/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "05/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "04/01/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "04/18/2025",
    field3: "Follow-up interviews",
  },
];
export const tasksData2 = [
  {
    field1: "001-2025",
    field2: "06/02/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "06/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "06/13/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "06/30/2025",
    field3: "Follow-up interviews",
  },
  {
    field1: "001-2025",
    field2: "06/02/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "06/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "06/13/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "06/30/2025",
    field3: "Follow-up interviews",
  },
];

// ✅ Upcoming Dates & Deadlines (Color 3)
export const deadlinesData = [
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/23/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "04/15/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "04/13/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
];
export const deadlinesData2 = [
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/11/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "06/16/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "06/30/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/11/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "06/16/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "06/30/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
];
export const tableHeaders = {
  members: {
    fieldCol1: "Name",
    fieldCol2: "Email",
    fieldCol3: "Phone",
  },
  tasks: {
    fieldCol1: "Case #",
    fieldCol2: "Due Date",
    fieldCol3: "Task",
  },
  deadlines: {
    fieldCol1: "Date",
    fieldCol2: "Time",
    fieldCol3: "Description",
  },
};

export const colors = {
  caption: {
    bg: "#1b7398",
    text: "#ffffff",
  },
  color1: {
    rowAlt: "#d1e3ea",
    headerBg: "#8fbacd",
    headerText: "#122159",
    borderRight: "#1b7398",
  },
  color2: {
    rowAlt: "#fff1d6",
    headerBg: "#ffdfae",
    headerText: "#122159",
    borderRight: "#1f285e",
  },
  color3: {
    rowAlt: "#e3f3e0",
    headerBg: "#d7ebd4",
    headerText: "#122159",
    borderRight: "#418ba9",
  },
};

export const DROPDOWN_OPTIONS_1 = [
  { value: "", label: "No Layout Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const DROPDOWN_OPTIONS_2 = [
  { value: "", label: "No File Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const DROPDOWN_OPTIONS_3 = [
  { value: "", label: "Select Pay Period" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

export const DROPDOWN_OPTIONS_4 = [
  { value: "", label: "Select Source" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const GRIEVANCE_STATUS = [
  { value: "", label: "" },
  { value: "pending", label: "Status 1" },
  { value: "approved", label: "Status 2" },
  { value: "rejected", label: "Status 3" },
];

export const recentlyMatters = [
  {
    caseNumber: "003-2025",
    memberName: "Joel Rosen",
    step: "002",
    task: "Initiate",
    dueDate: "5/20/2025",
    status: "Completed",
  },
  {
    caseNumber: "003-2025",
    memberName: "Joel Rosen",
    step: "003",
    task: "Interview witness",
    dueDate: "5/20/2025",
    status: "Open",
  },
  {
    caseNumber: "003-2025",
    memberName: "Joel Rosen",
    step: "004",
    task: "Investigate body cam footage",
    dueDate: "5/20/2025",
    status: "Open",
  },
  {
    caseNumber: "003-2025",
    memberName: "Joel Rosen",
    step: "005",
    task: "Submit supporting files",
    dueDate: "5/20/2025",
    status: "Open",
  },
];

export const fieldHeadData = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "email", label: "Email" },
  { id: "employeeId", label: "Employee #" },
  { id: "joinDate", label: "Join Date" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Action" },
];

export const fieldCellData = [
  {
    id: 1,
    firstName: "Joel",
    lastName: "Rosen",
    email: "joel@velarium.com",
    employeeId: "12345",
    joinDate: "01/13/2000",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Fynn",
    email: "Mary@youremail.net",
    employeeId: "54321",
    joinDate: "05/07/2021",
    status: "Active",
  },
  {
    id: 3,
    firstName: "Aaron",
    lastName: "Erickson",
    email: "aerickson@youremail.net",
    employeeId: "98765",
    joinDate: "08/09/2019",
    status: "Active",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Smith",
    email: "jsmith@youremail.net",
    employeeId: "90876",
    joinDate: "03/27/2005",
    status: "Retired",
  },
  {
    id: 5,
    firstName: "Carole",
    lastName: "Martin",
    email: "cmartin@youremail.com",
    employeeId: "83981",
    joinDate: "09/18/1999",
    status: "Retired",
  },
  {
    id: 6,
    firstName: "Jessie",
    lastName: "O'Donell",
    email: "jessie@youremail.net",
    employeeId: "41908",
    joinDate: "11/10/2023",
    status: "Active",
  },
  {
    id: 7,
    firstName: "Steve",
    lastName: "Brooks",
    email: "steve@youremail.net",
    employeeId: "88512",
    joinDate: "02/04/2016",
    status: "Active",
  },
  {
    id: 8,
    firstName: "Jeremy",
    lastName: "Jones",
    email: "jeremy@youremail.net",
    employeeId: "92834",
    joinDate: "06/07/2009",
    status: "Active",
  },
  {
    id: 9,
    firstName: "Kevin",
    lastName: "Adams",
    email: "kadams@youremail.com",
    employeeId: "83981",
    joinDate: "09/22/2023",
    status: "Retired",
  },
  {
    id: 10,
    firstName: "Emily",
    lastName: "Taylor",
    email: "emily@youremail.net",
    employeeId: "32153",
    joinDate: "11/10/2023",
    status: "Active",
  },
  {
    id: 11,
    firstName: "Gary",
    lastName: "Lowell",
    email: "gary@youremail.net",
    employeeId: "88512",
    joinDate: "06/14/2016",
    status: "Active",
  },
  {
    id: 12,
    firstName: "Joshua",
    lastName: "Haynes",
    email: "jdhaynes@youremail.net",
    employeeId: "52413",
    joinDate: "09/15/2007",
    status: "Active",
  },
  {
    id: 13,
    firstName: "Bev",
    lastName: "Wells",
    email: "bev@youremail.com",
    employeeId: "82464",
    joinDate: "09/18/1999",
    status: "Retired",
  },
  {
    id: 14,
    firstName: "Mark",
    lastName: "Durkin",
    email: "jmark@youremail.net",
    employeeId: "41908",
    joinDate: "11/10/2023",
    status: "Active",
  },
  {
    id: 15,
    firstName: "Ryan",
    lastName: "Dooley",
    email: "ryan@youremail.net",
    employeeId: "81542",
    joinDate: "03/14/2023",
    status: "Active",
  },
  {
    id: 16,
    firstName: "Taylor",
    lastName: "Lynn",
    email: "taylor@youremail.net",
    employeeId: "911022",
    joinDate: "06/07/2009",
    status: "Active",
  },
];
export const CHECKBOX_OPTIONS = {
  REMEMBER_USER_ID: "Remember User Id",
  REMEMBER_DEVICE: "Remember Device",
};

export const exportTypes = [
  { value: "1", label: "Active Members Dues" },
  { value: "2", label: "Active PAC" },
  { value: "3", label: "A-Life" },
  { value: "4", label: "Canada Life" },
  { value: "5", label: "RHBJPT checks" },
  { value: "6", label: "Refund checks" },
];

export const payPeriodTypes = [
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
];

export const payPeriods = [
  "01/01/2026 - 01/07/2026",
  "01/08/2026 - 01/14/2026",
  "01/15/2026 - 01/21/2026",
  "01/22/2026 - 01/28/2026",
  // Add more as needed
];

export const methods = [
  { value: "check", label: "Check" },
  { value: "cash", label: "Cash" },
  { value: "direct-deposit", label: "Direct Deposit" },
];

export const announcementsData = [
  ["System Maintenance", "Jan 20, 2026"],
  ["Holiday Notice", "Jan 15, 2026"],
];

export const tasksSummaryData = [
  ["Over Due", "0"],
  ["Due Today", "0"],
  ["Due Tomorrow", "0"],
  ["Total", "0"],
];
