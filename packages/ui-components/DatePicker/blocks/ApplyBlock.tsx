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

import { useEffect } from "react";
import moment from "moment";

const ApplyBlock = () => {
	const { startDate, endDate, fromRange, toRange } =
		useSelector(
			({ sessionListState }: { sessionListState: DatePickerStateTypes }) =>
				sessionListState,
		) || {};

	const [getSessionList] = useGetSessionListMutation();
	useEffect(() => {
		console.log(
			{
				domain: "shop.super-pharm.co.il",
				date: {
					from:
						startDate?.format("YYYY-MM-DD HH:mm:ss") ||
						moment().format("YYYY-MM-DD HH:mm:ss"),
					to:
						endDate?.format("YYYY-MM-DD HH:mm:ss") ||
						moment().format("YYYY-MM-DD HH:mm:ss"),
				},
			},
			fromRange,
			toRange,
		);
		getSessionList({
			domain: "shop.super-pharm.co.il",
			date: {
				from:
					startDate?.format("YYYY-MM-DD HH:mm:ss") ||
					moment().format("YYYY-MM-DD HH:mm:ss"),
				to:
					endDate?.format("YYYY-MM-DD HH:mm:ss") ||
					moment().format("YYYY-MM-DD HH:mm:ss"),
			},
		});
	}, [startDate, endDate]);
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
				<ControlButton apply>Apply</ControlButton>
			</ControlBlock>
		</ApplyBlockContainer>
	);
};

export default ApplyBlock;
