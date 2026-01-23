import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// layout
import DashboardLayout from "./../layout/DashboardLayout";
// pages
import LoginPage from "../pages/loginPage/LoginPage";
import DashboardPage from "./../pages/dashboardPage/DashboardPage";
import CalendarPage from "../pages/calendarPage/CalendarPage";
import MemberListPage from "./../pages/memberlistPage/MemberListPage";
import DispatchPage from "../pages/dispatchPage/DispatchPage";
import ImportMembersPage from "./../pages/importMembersPage/ImportMembersPage";
import DuesPage from "../pages/duesPage/DuesPage";
import PaymentsPage from "../pages/paymentsPage/PaymentsPage";
import GrievancesPage from "../pages/grievancesPage/GrievancesPage";
import BatchPage from "../pages/batchPage/BatchPage";
import MembersPage from "../pages/membersPage/MembersPage";
import ReportsPage from "../pages/reportsPage/ReportsPage";
import ApprenticeshipPage from "../pages/apprenticeshipPage/ApprenticeshipPage";
import MailPage from "../pages/mailPage/MailPage";
import SettingsPage from "../pages/settingsPage/SettingsPage";
import MatterDetailsPage from "./../pages/matterDetailsPage/MatterDetailsPage";
import MembersProfilePage from "../pages/membersProfilePage/MembersProfilePage";
import ManageRolesPage from "../pages/manageRolesPage/ManageRolesPage";
import RoleAccess from "../pages/manageRolesPage/components/RolesAccess/RoleAccess";

// ✅ Helper component for protected routes
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        {/* Root redirect */}
        <Route
          path="/"
          element={
            localStorage.getItem("isAuthenticated") === "true" ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* Members parent + child */}
        <Route
          path="/members"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MembersPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/members-profile"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MembersProfilePage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/member-list"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MemberListPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* Grievances parent + child */}
        <Route
          path="/grievances"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <GrievancesPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/matter-details"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MatterDetailsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* Other standalone routes */}
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ReportsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/apprenticeship"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ApprenticeshipPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/mail"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MailPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <SettingsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/manage-roles"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ManageRolesPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/role-access"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <RoleAccess />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <PaymentsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/batch"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <BatchPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/import-dues"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <DuesPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/import-members"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ImportMembersPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dispatch"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <DispatchPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <CalendarPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* 404 fallback */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default RoutesPath;
