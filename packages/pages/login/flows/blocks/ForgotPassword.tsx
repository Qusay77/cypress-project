import Checkbox from "@qusay77/checkbox";
import { ChangeEvent } from "react";
import {
	ForgotPasswordBetweenContainer,
	RememberMeBlock,
	VarietyText,
} from "../../components/formSectionLayout";
import { useCookies } from "react-cookie";
import { theme } from "src/Globals/global";
const { TextSecondary, BluePrimary } = theme.colors;
const ForgotPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const [cookies, setCookie] = useCookies(["rememberMe"]);
	const { rememberMe } = cookies;

	const handleRememberMe = (event: ChangeEvent<Element>) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + 2629800000);
		setCookie("rememberMe", (event.target as HTMLInputElement).checked, {
			path: "/",
			expires,
		});
	};
	return (
		<ForgotPasswordBetweenContainer>
			<RememberMeBlock>
				<Checkbox
					checked={rememberMe ? rememberMe === "true" : true}
					onChange={(e) => handleRememberMe(e)}
				></Checkbox>
				<VarietyText weight={400} fontColor={TextSecondary} fontSize={14}>
					Remember Me
				</VarietyText>
			</RememberMeBlock>
			<VarietyText
				isClickAble={true}
				onClick={() => handleFlow("forgotPassword")}
				weight={400}
				fontColor={BluePrimary}
				fontSize={14}
			>
				I Forgot my Password
			</VarietyText>
		</ForgotPasswordBetweenContainer>
	);
};
export default ForgotPassword;
