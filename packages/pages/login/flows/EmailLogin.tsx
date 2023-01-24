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
import { useLoginMutation } from "@qusay77/auth";
import { useSelector } from "react-redux";
import { LoginStateTypes } from "../types";
// import axios from "axios";

const EmailLogin = ({ handleFlow }: { handleFlow: (flow: string) => void }) => {
	const { email, password } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);

	const { linkedInLogin } = useLinkedIn({
		clientId: "787nmmwpr0rfku",
		redirectUri: "http://localhost:1234/linkedin",
		onSuccess: async (code) => {
			console.log(code);
			// 	const result = await axios.post(
			// 		`${process.env.REACT_APP_API_KEY}v2/auth/social-login`,
			// 		{
			// 			type: "LINKEDIN",
			// 			token: code,
			// 		},
			// 	);
			// 	console.log(result);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const [login, { isLoading }] = useLoginMutation();
	const handleEmailLogin = async () => {
		const user = await login({
			email,
			password,
		}).unwrap();
		console.log(user, "lol");
	};

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
			<FillButton
				disabled={isLoading}
				onClick={handleEmailLogin}
				invert={false}
				width={"100%"}
			>
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
