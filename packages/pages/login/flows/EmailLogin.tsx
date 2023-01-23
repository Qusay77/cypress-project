/* eslint-disable no-console */
import {
	FillButton,
	ForgotPasswordBetweenContainer,
	HeaderIcon,
	HeaderText,
	LoginText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import { FormSectionContent } from "../components/pageLayout";
import ForgotPassword from "./blocks/ForgotPassword";
import { useLinkedIn } from "react-linkedin-login-oauth2";
const EmailLogin = ({ handleFlow }: { handleFlow: (flow: string) => void }) => {
	const { linkedInLogin } = useLinkedIn({
		clientId: "77o33uwe8hz2do",
		redirectUri: "https://portal.webeyez.com/auth/social-login", // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
		onSuccess: (code) => {
			console.log(code);
		},
		onError: (error) => {
			console.log(error);
		},
	});
	return (
		<FormSectionContent maxWidth={390}>
			<HeaderIcon />
			<HeaderText>Welcome Back!</HeaderText>
			<LoginText>
				You can sign in to webeyez using email and password, linked in account
				or using your organization single sign on account.
			</LoginText>
			<InputController type="email" />
			<InputController type="password" />
			<ForgotPassword handleFlow={handleFlow} />
			<FillButton invert={false} width={"100%"}>
				Login
			</FillButton>
			<ForgotPasswordBetweenContainer>
				<FillButton onClick={linkedInLogin} invert={true} width={"45%"}>
					Linkedin
				</FillButton>
				<FillButton invert={true} width={"45%"}>
					SSO
				</FillButton>
			</ForgotPasswordBetweenContainer>
		</FormSectionContent>
	);
};

export default EmailLogin;
