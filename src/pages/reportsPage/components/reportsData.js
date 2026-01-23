export const reportsTabsData = [
  { id: "finance", label: "Finance Reports" },
  { id: "member", label: "Member Reports" },
  { id: "grievance", label: "Grievance Reports" },
  { id: "dispatch", label: "Dispatch Reports" },
  { id: "apprenticeship", label: "Apprenticeship Reports" },
  { id: "misc", label: "Misc. Reports" },
];

export const savedTemplatesData = [
  {
    id: 1,
    reportName: "Monthly Dues Statement",
    description: "Mail Merge Monthly Dues Statement",
    type: ".docx",
    dateCreated: "12/20/2020",
    createdBy: "Admin Acctg",
  },
  {
    id: 2,
    reportName: "Reconciliation Report",
    description: "expected vs received dues spreadsheet",
    type: ".xsls",
    dateCreated: "03/14/2025",
    createdBy: "Admin Acctg",
  },
  {
    id: 3,
    reportName: "Past Due Reminder",
    description: "Mail Merge Member Reminder",
    type: ".docx",
    dateCreated: "01/09/2025",
    createdBy: "Admin Acctg",
  },
  {
    id: 4,
    reportName: "Year End Report",
    description: "Yearly category totals;",
    type: ".xsls",
    dateCreated: "01/10/2024",
    createdBy: "Admin Acctg",
  },
];

export const reportsSelectedData = [
  { value: "", label: "No Report Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const querySelectedData = [
  { value: "", label: "No Query Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

export const savedQueriesData = [
  {
    id: 1,
    reportName: "2024 Year-End Received Dues",
    description: "All 2024 Received Payments",
    type: "PostedDate",
    dateCreated: "12/20/2020",
    createdBy: "Admin Acctg",
    selected: false,
  },
  {
    id: 2,
    reportName: "Feb 2025 Delinquent Accts.",
    description: "All unpaid february dues",
    type: "DueDate, IsPaid",
    dateCreated: "03/14/2025",
    createdBy: "Admin Acctg",
    selected: false,
  },
  {
    id: 3,
    reportName: "February 2025 Invoicing",
    description: "Statements for Feb 2025 Dues",
    type: "DueDate, MemberStatus",
    dateCreated: "01/09/2025",
    createdBy: "Admin Acctg",
    selected: false,
  },
  {
    id: 4,
    reportName: "2023 Year End - Rosen Dues.pdf",
    description: "01/10/2024",
    type: "HQ Template",
    dateCreated: "01/10/2024",
    createdBy: "Admin Acctg",
    selected: false,
  },
];
