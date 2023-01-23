import { createBoard } from "@wixc3/react-board";
import Checkbox from "../../../..";

export default createBoard({
	name: "Checkbox",
	Board: () => <Checkbox />,
	environmentProps: {
		canvasHeight: 24,
		canvasWidth: 385
	}
});
