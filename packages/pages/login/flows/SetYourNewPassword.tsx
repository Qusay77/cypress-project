import { useSelector } from "react-redux";
import { useResetPasswordMutation } from "src/services/auth";
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
import { useNavigate, useLocation } from "react-router-dom";

const SetYourNewPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const { grade, newPassword } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);
	const navigate = useNavigate();
	const location = useLocation();
	const token = location.search.split("=")[1];
	const [resetPassword, { isLoading }] = useResetPasswordMutation();
	const handleResetPassword = async () => {
		const res = await resetPassword({ password: newPassword, token });
		if ("data" in res) {
			navigate("/login");
		}
	};
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
			<FillButton
				onClick={handleResetPassword}
				disabled={grade < 3 || isLoading}
				invert={false}
				width={"100%"}
			>
				Set New Password
			</FillButton>
			<TextWrapper handleFlow={handleFlow} />
		</FormSectionContent>
	);
};

export default SetYourNewPassword;
