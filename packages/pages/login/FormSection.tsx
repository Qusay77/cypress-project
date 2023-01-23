import { useState } from "react";
import { FormSectionContainer } from "./components/pageLayout";
import BottomText from "./flows/blocks/BottomText";
import CheckYourEmail from "./flows/CheckYourEmail";
import EmailLogin from "./flows/EmailLogin";
import ForgotYourPassword from "./flows/ForgotYourPassword";
import SetYourNewPassword from "./flows/SetYourNewPassword";
import SSOLogin from "./flows/SSOLogin";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginStateTypes } from "./types";

const FormSection = ({ isNewPassword }: { isNewPassword: boolean }) => {
	// const { login } = useSelector(
	// 	({ login }: { login: LoginStateTypes }) => login,
	// );
	// const { email, password, newPassword, orgName } = login || {};
	// const dispatch = useDispatch();
	const [flow, setFlow] = useState(isNewPassword ? "newPassword" : "email");
	const handleFlow = (flow: string) => {
		setFlow(flow);
	};
	const flowObj: {
		[key: string]: unknown;
	} = {
		email: <EmailLogin handleFlow={handleFlow} />,
		newPassword: <SetYourNewPassword handleFlow={handleFlow} />,
		forgotPassword: <ForgotYourPassword handleFlow={handleFlow} />,
		checkYourEmail: <CheckYourEmail handleFlow={handleFlow} />,
		sso: <SSOLogin />,
	};
	return (
		<FormSectionContainer>
			<>
				{flowObj[flow]}
				<BottomText />
			</>
		</FormSectionContainer>
	);
};

export default FormSection;
