import { VarietyText } from "../../components/formSectionLayout";
import { BottomTextContainer } from "../../components/pageLayout";

const BottomText = () => {
	return (
		<BottomTextContainer>
			<VarietyText weight={400} fontColor={"#B3B3B3"} fontSize={14}>
				By using our service, you agree to our
			</VarietyText>
			&nbsp;
			<VarietyText
				isClickAble={true}
				weight={800}
				fontColor={"#B3B3B3"}
				fontSize={14}
			>
				Terms of Use
			</VarietyText>
			&nbsp;
			<VarietyText weight={400} fontColor={"#B3B3B3"} fontSize={14}>
				and
			</VarietyText>
			&nbsp;
			<VarietyText
				isClickAble={true}
				weight={800}
				fontColor={"#B3B3B3"}
				fontSize={14}
			>
				Privacy Policy
			</VarietyText>
		</BottomTextContainer>
	);
};
export default BottomText;
