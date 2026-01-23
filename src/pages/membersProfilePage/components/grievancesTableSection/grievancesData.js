export const statusOptions = ["Open", "Completed", "Pending"];

export const taskHeadData = [
  "Case Number",
  "Internal #",
  "Task / Description",
  "Due Date",
  "Status",
  "Action",
];

export const initialTasks = [
  {
    id: 1,
    caseNumber: "003-2025",
    internalNumber: "002",
    task: "Initiate",
    dueDate: new Date("2025-05-20"),
    status: "Completed",
  },
  {
    id: 2,
    caseNumber: "003-2025",
    internalNumber: "003",
    task: "Interview witness",
    dueDate: new Date("2025-05-20"),
    status: "Open",
  },
  {
    id: 3,
    caseNumber: "003-2025",
    internalNumber: "004",
    task: "Investigate body cam footage",
    dueDate: new Date("2025-05-20"),
    status: "Open",
  },
  {
    id: 4,
    caseNumber: "003-2025",
    internalNumber: "005",
    task: "Submit supporting files",
    dueDate: new Date("2025-05-20"),
    status: "Open",
  },
];
