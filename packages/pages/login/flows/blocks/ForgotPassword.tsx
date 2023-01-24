import Checkbox from "@qusay77/checkbox";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ForgotPasswordBetweenContainer,
	RememberMeBlock,
	VarietyText,
} from "../../components/formSectionLayout";
import { actions, AuthStateTypes } from "@qusay77/auth";

const ForgotPassword = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	const { rememberMe } = useSelector(
		({ auth }: { auth: AuthStateTypes }) => auth,
	);
	const { setRememberMe } = actions;

	const dispatch = useDispatch();
	const handleRememberMe = (event: ChangeEvent<Element>) => {
		dispatch(setRememberMe((event.target as HTMLInputElement).checked));
	};
	return (
		<ForgotPasswordBetweenContainer>
			<RememberMeBlock>
				<Checkbox
					checked={rememberMe}
					onChange={(e) => handleRememberMe(e)}
				></Checkbox>
				<VarietyText weight={400} fontColor={"#808080"} fontSize={14}>
					Remember Me
				</VarietyText>
			</RememberMeBlock>
			<VarietyText
				isClickAble={true}
				onClick={() => handleFlow("forgotPassword")}
				weight={400}
				fontColor={"#1D99FF"}
				fontSize={14}
			>
				I Forgot my Password
			</VarietyText>
		</ForgotPasswordBetweenContainer>
	);
};
export default ForgotPassword;
