import { useSelector } from "react-redux";
import { useForgotPasswordMutation } from "@qusay77/auth";
import {
	FillButton,
	HeaderIcon,
	HeaderText,
	LoginText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import { FormSectionContent } from "../components/pageLayout";
import { LoginStateTypes } from "../types";
import TextWrapper from "./blocks/TextWrapper";

const ForgotYourPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const { email } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
	const handleForgotPassword = async () => {
		await forgotPassword(email);
		handleFlow("checkYourEmail");
	};
	return (
		<FormSectionContent maxWidth={460}>
			<HeaderIcon />
			<HeaderText>Forgot Your Password?</HeaderText>
			<LoginText>
				Don&apos;t worry, we&apos;ll get it back in a moment. <br />
				First we need to verify you via email.
			</LoginText>
			<InputController type="email" />
			<FillButton
				disabled={isLoading}
				onClick={handleForgotPassword}
				invert={false}
				width={"100%"}
			>
				Reset Password
			</FillButton>
			<TextWrapper handleFlow={handleFlow} />
		</FormSectionContent>
	);
};

export default ForgotYourPassword;
