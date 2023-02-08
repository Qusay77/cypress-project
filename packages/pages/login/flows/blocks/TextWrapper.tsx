import { VarietyText } from "../../components/formSectionLayout";
import { TextWrapperContainer } from "../../components/pageLayout";
import { theme } from "src/Globals/global";
const { TextSub, BluePrimary } = theme.colors;
const TextWrapper = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	return (
		<TextWrapperContainer>
			<VarietyText weight={400} fontColor={TextSub} fontSize={14}>
				Remembered your Password?
			</VarietyText>
			&nbsp;
			<VarietyText
				isClickAble={true}
				onClick={() => {
					handleFlow("email");
				}}
				weight={800}
				fontColor={BluePrimary}
				fontSize={14}
			>
				Sign In!
			</VarietyText>
		</TextWrapperContainer>
	);
};
export default TextWrapper;
