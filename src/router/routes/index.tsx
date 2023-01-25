import Home from "../../Home";
import LoginPage from "../../pages/Login";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Login from "@qusay77/login-page";
import { Routes, Route, Navigate } from "react-router-dom";

const MainRouter = ({ isAccessValid }: { isAccessValid: boolean }) => {
	return (
		<Routes>
			{isAccessValid ? (
				<>
					<Route index path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</>
			) : (
				<>
					<Route path="recovery" element={<Login isNewPassword={true} />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="auth/linkedin/callback" element={<LinkedInCallback />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</>
			)}
		</Routes>
	);
};

export default MainRouter;
