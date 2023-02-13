import Home from "../../Home";
import LoginPage from "../../pages/Login";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Login from "@qusay77/login-page";
import { Routes, Route, Navigate } from "react-router-dom";
import Organization from "src/pages/orgnisatoinsPage/Organization";
import Sessions from "src/pages/sessionsPage/Sessions";
import Business from "src/pages/businessPage/Business";
import Dashboard from "src/pages/dashboardPage/Dashboard";
import Technology from "src/pages/technologyPage/Technology";
import Alerts from "src/pages/alertsPage/Alerts";
import Implementation from "src/pages/implementationPage/Implementation";
import Updates from "src/pages/updatesPage/Updates";
import Register from "@qusay77/register-page";
import SSO from "@qusay77/sso-page";

const MainRouter = ({ isAccessValid }: { isAccessValid: boolean }) => {
	return (
		<Routes>
			{isAccessValid ? (
				<>
					<Route index path="/" element={<Organization />} />
					<Route path="/Sessions" element={<Sessions />} />
					<Route path="/Business" element={<Business />} />
					<Route path="/Dashboard" element={<Dashboard />} />
					<Route path="/Technology" element={<Technology />} />
					<Route path="/Alerts" element={<Alerts />} />
					<Route path="/Implementation" element={<Implementation />} />
					<Route path="/Updates" element={<Updates />} />

					<Route path="/home" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</>
			) : (
				<>
					<Route path="recovery" element={<Login isNewPassword={true} />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="auth/linkedin/callback" element={<LinkedInCallback />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
					<Route path="sso" element={<SSO />} />
					<Route path="register" element={<Register />} />
				</>
			)}
		</Routes>
	);
};

export default MainRouter;
