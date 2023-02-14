import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormSectionContainer } from "./components/pageLayout";
import BottomText from "./flows/blocks/BottomText";
import CheckYourEmail from "./flows/CheckYourEmail";
import EmailLogin from "./flows/EmailLogin";
import ForgotYourPassword from "./flows/ForgotYourPassword";
import SetYourNewPassword from "./flows/SetYourNewPassword";
import SSOLogin from "./flows/SSOLogin";
import { actions } from "./state";

const FormSection = ({ isNewPassword }: { isNewPassword: boolean }) => {
	const [flow, setFlow] = useState(isNewPassword ? "newPassword" : "email");
	const dispatch = useDispatch();
	const { setIsPasswordErrorActive, setIsEmailErrorActive } = actions;
	const handleFlow = (flow: string) => {
		dispatch(setIsPasswordErrorActive(false));
		dispatch(setIsEmailErrorActive(false));
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
