import { useDispatch, useSelector } from "react-redux";
import { useForgotPasswordMutation } from "src/services/auth";
import {
	FillButton,
	HeaderIcon,
	HeaderText,
	LoginText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import { FormSectionContent } from "../components/pageLayout";
import { actions } from "../state";
import { LoginStateTypes } from "../types";
import TextWrapper from "./blocks/TextWrapper";

const CheckYourEmail = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const { email, emailValidation } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);
	const { setIsEmailErrorActive } = actions;
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
	const dispatch = useDispatch();
	const handleForgotPassword = async () => {
		if (email.length && !emailValidation) {
			await forgotPassword(email);
			handleFlow("checkYourEmail");
		} else {
			dispatch(setIsEmailErrorActive(true));
		}
	};
	return (
		<FormSectionContent maxWidth={460}>
			<HeaderIcon />
			<HeaderText>Check Your Email</HeaderText>
			<LoginText>
				We&apos;ve sent you an email to verify you.
				<br /> In the Email you&apos;ll find a link to set up your you new
				password and instructions.
			</LoginText>
			<InputController type="email" />
			<FillButton
				disabled={isLoading}
				onClick={handleForgotPassword}
				forceInvertMargin={true}
				invert={true}
				width={"100%"}
			>
				Send Email Again
			</FillButton>
			<TextWrapper handleFlow={handleFlow} />
		</FormSectionContent>
	);
};

export default CheckYourEmail;
