import {
	FillButton,
	HeaderIcon,
	HeaderText,
	LoginText,
	VarietyText,
} from "../components/formSectionLayout";
import InputController from "../components/InputController";
import {
	FormSectionContent,
	TextWrapperContainer,
} from "../components/pageLayout";
import { theme } from "src/Globals/global";
const { BluePrimary } = theme.colors;
const SSOLogin = () => {
	return (
		<FormSectionContent maxWidth={460}>
			<HeaderIcon />
			<HeaderText>SSO Login</HeaderText>
			<LoginText>
				Please enter your email so we can log you in via SSO, using your
				organization&apos;s credentials.
			</LoginText>
			<InputController type="orgName" />
			<FillButton invert={false} width={"100%"}>
				Continue to SSO
			</FillButton>
			<TextWrapperContainer>
				<VarietyText
					isClickAble={true}
					weight={800}
					fontColor={BluePrimary}
					fontSize={14}
				>
					Back to Login
				</VarietyText>
			</TextWrapperContainer>
		</FormSectionContent>
	);
};

export default SSOLogin;
