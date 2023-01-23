import { createBoard } from "@wixc3/react-board";
import { CoolButton } from "../../../../assemble";

export default createBoard({
	name: "CoolButton",
	Board: () => (
		<CoolButton
			label="large"
			backgroundColor="skyblue"
			extraText="hmm"
			onClick={undefined}
			key={null}
			size="large"
		/>
	),
	environmentProps: {
		windowWidth: 898,
		windowHeight: 648,
	},
});
