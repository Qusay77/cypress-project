import LeftArrow from "../assets/chevron_left.svg";
import { MonthCaption, NavIcon } from "../components/RenderMonthComponents";

const PickerIcon = ({ action, left }: any) => (
	<NavIcon onClick={action} className={left ? "prev" : "next"}>
		<img src={LeftArrow} />
	</NavIcon>
);

const RenderMonth = (props: any) => {
	const { month } = props;
	return (
		<MonthCaption>
			<span>{month.locale("en").format("MMMM")}</span>,&nbsp;
			<span>{month.locale("en").format("YYYY")}</span>
		</MonthCaption>
	);
};

export { RenderMonth, PickerIcon };
