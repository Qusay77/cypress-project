import {
	FillButton,
	HeaderIcon,
	HeaderText,
	LoginText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import { FormSectionContent } from "../components/pageLayout";
import TextWrapper from "./blocks/TextWrapper";

const ForgotYourPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
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
				onClick={() => handleFlow("checkYourEmail")}
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
