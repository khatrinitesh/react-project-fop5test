import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// layout
import DashboardLayout from "./../layout/DashboardLayout";
// old pages
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

// ✅ Module pages
import CateringCalendar from "../pages/modules/CateringCalendar";
import ChangeFile from "../pages/modules/ChangeFile";
import AddPayment from "../pages/modules/AddPayment";
import GenerateExceptions from "../pages/modules/GenerateExceptions";
import AddOrderPayment from "../pages/modules/AddOrderPayment";
import AddEnrollment from "../pages/modules/AddEnrollment";
import ChangeRateCode from "../pages/modules/ChangeRateCode";
import ImportModule from "../pages/modules/ImportModule";
import ChangeEnrollments from "../pages/modules/ChangeEnrollments";
import SearchBooster from "../pages/modules/SearchBooster";
import MembersModule from "../pages/modules/Members";
import GenerateChecks from "../pages/modules/GenerateChecks";
import RHBJPTReconciliation from "../pages/modules/RHBJPTReconciliation";
import ClearFlags from "../pages/modules/ClearFlags";
import CityExportFile from "../pages/modules/CityExportFile";

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

        {/* ✅ Module Pages */}
        <Route
          path="/modules/catering-calendar"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <CateringCalendar />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/change-file"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ChangeFile />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/add-payment"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AddPayment />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/generate-exceptions"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <GenerateExceptions />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/add-order-payment"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AddOrderPayment />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/add-enrollment"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AddEnrollment />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/change-rate-code"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ChangeRateCode />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/import-modules"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ImportModule />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/change-enrollments"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ChangeEnrollments />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/search-booster-member"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <SearchBooster />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/members"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <MembersModule />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/generate-checks"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <GenerateChecks />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/rhbjpt-reconciliation"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <RHBJPTReconciliation />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/clear-flags"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ClearFlags />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/modules/city-export-file"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <CityExportFile />
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
