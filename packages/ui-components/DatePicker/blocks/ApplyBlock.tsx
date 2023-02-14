import { useSelector } from "react-redux";
import {
	DatePickerStateTypes,
	useGetSessionListMutation,
} from "src/services/SessionsList";
import {
	ApplyBlockContainer,
	FrameContainer,
	FrameText,
	FrameRangeText,
	ControlBlock,
	ControlButton,
} from "../components/ApplyBlock";
import moment from "moment";

const ApplyBlock = () => {
	const { startDate, endDate, fromRange, toRange } =
		useSelector(
			({ sessionListState }: { sessionListState: DatePickerStateTypes }) =>
				sessionListState,
		) || {};
	const { orgId, selectedDomain } =
		useSelector(({ orgslice }: { orgslice: any }) => orgslice) || {};
	const [getSessionList] = useGetSessionListMutation();
	const onApply = () => {
		getSessionList({
			filterObj: {
				domain: selectedDomain,
				date: {
					from:
						(startDate &&
							`${startDate.format("YYYY-MM-DD")} ${moment(
								fromRange,
								"HH:mm:ss",
							).format("HH:mm:ss")}`) ||
						moment().format("YYYY-MM-DD HH:mm:ss"),
					to:
						(endDate &&
							`${endDate.format("YYYY-MM-DD")} ${moment(
								toRange,
								"HH:mm:ss",
							).format("HH:mm:ss")}`) ||
						moment().format("YYYY-MM-DD HH:mm:ss"),
				},
			},
			orgId,
		});
	};

	return (
		<ApplyBlockContainer>
			<FrameContainer>
				<FrameText>Selected Time Frame</FrameText>
				<FrameRangeText>
					<>
						{startDate?.format("YYYY-MM-DD")} - {endDate?.format("YYYY-MM-DD")}
					</>
				</FrameRangeText>
			</FrameContainer>
			<ControlBlock>
				<ControlButton>Cancel</ControlButton>
				<ControlButton onClick={onApply} apply>
					Apply
				</ControlButton>
			</ControlBlock>
		</ApplyBlockContainer>
	);
};

export default ApplyBlock;
