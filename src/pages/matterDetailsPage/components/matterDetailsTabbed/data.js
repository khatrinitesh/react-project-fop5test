export const CASE_NUMBER = "003-2025";

export const matterDetailsData = [
  { id: "matter", label: "Matter", placeholder: "Search Matter..." },
  {
    id: "grievance",
    label: "Grievance Initiation",
    placeholder: "Search Grievance...",
  },
  { id: "step1", label: "Step 1", placeholder: "Search Step 1..." },
  { id: "tasks", label: "Tasks", placeholder: "Search Tasks..." },
  {
    id: "linkedNames",
    label: "Linked Names",
    placeholder: "Search Linked Names...",
  },
  { id: "notes", label: "Notes", placeholder: "Search Notes..." },
  {
    id: "attachments",
    label: "Attachments",
    placeholder: "Search Attachments...",
  },
];

export const tabHeaderText = {
  tab1: {
    display: "Matter Details",
    main: "GRIEVANCES:",
    span: `Matter Details - Case # ${CASE_NUMBER}`,
  },
  grievance: {
    display: "Grievance Initiation",
    main: "GRIEVANCES:",
    span: `Initiation - Case # ${CASE_NUMBER}`,
  },
  step1: {
    display: "Step 1",
    main: "GRIEVANCES:",
    span: `Step 1 - Case # ${CASE_NUMBER}`,
  },
  tasks: {
    display: "Tasks",
    main: "GRIEVANCES:",
    span: `Tasks - Case # ${CASE_NUMBER}`,
  },
  notes: {
    display: "Notes",
    main: "GRIEVANCES:",
    span: `Notes - Case # ${CASE_NUMBER}`,
  },
  linkedNames: {
    display: "Linked Names",
    main: "GRIEVANCES:",
    span: `Linked Names`, // no case number
  },
  attachments: {
    display: "Attachments",
    main: "GRIEVANCES:",
    span: `Attachments - Case # ${CASE_NUMBER}`,
  },
};
