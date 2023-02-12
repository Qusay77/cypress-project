import {
	ApplyBlockContainer,
	FrameContainer,
	FrameText,
	FrameRangeText,
	ControlBlock,
	ControlButton,
} from "../components/ApplyBlock";

const ApplyBlock = () => {
	return (
		<ApplyBlockContainer>
			<FrameContainer>
				<FrameText>Selected Time Frame</FrameText>
				<FrameRangeText>11.08.2022 - 04.09.2022</FrameRangeText>
			</FrameContainer>
			<ControlBlock>
				<ControlButton>Cancel</ControlButton>
				<ControlButton apply>Apply</ControlButton>
			</ControlBlock>
		</ApplyBlockContainer>
	);
};

export default ApplyBlock;
