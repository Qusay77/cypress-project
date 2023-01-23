import { VarietyText } from "../../components/formSectionLayout";
import { TextWrapperContainer } from "../../components/pageLayout";

const TextWrapper = ({
	handleFlow,
}: {
	handleFlow: (flow: string) => void;
}) => {
	return (
		<TextWrapperContainer>
			<VarietyText weight={400} fontColor={"#B3B3B3"} fontSize={14}>
				Remembered your Password?
			</VarietyText>
			&nbsp;
			<VarietyText
				isClickAble={true}
				onClick={() => handleFlow("email")}
				weight={800}
				fontColor={"#1D99FF"}
				fontSize={14}
			>
				Sign In!
			</VarietyText>
		</TextWrapperContainer>
	);
};
export default TextWrapper;
