import { useSelector } from "react-redux";
import {
	FillButton,
	HeaderIcon,
	HeaderText,
	LoginText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import { FormSectionContent } from "../components/pageLayout";
import PasswordStrength from "../components/PasswordStrength";
import { LoginStateTypes } from "../types";
import TextWrapper from "./blocks/TextWrapper";

const SetYourNewPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const { grade } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);
	return (
		<FormSectionContent maxWidth={470}>
			<HeaderIcon />
			<HeaderText>Set Your New Password</HeaderText>
			<LoginText>
				Please enter a strong password that you&apos;ll remember.
				<br />
				But even if you dont - you can always reset it again.
			</LoginText>
			<InputController type="newPassword" />
			<PasswordStrength />
			<FillButton disabled={grade < 3} invert={false} width={"100%"}>
				Set New Password
			</FillButton>
			<TextWrapper handleFlow={handleFlow} />
		</FormSectionContent>
	);
};

export default SetYourNewPassword;
