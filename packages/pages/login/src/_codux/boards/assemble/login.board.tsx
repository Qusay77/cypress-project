import { createBoard } from "@wixc3/react-board";
import Login from "../../../../assemble";

export default createBoard({
	name: "Login",
	Board: () => <Login />,
	environmentProps: {
		canvasWidth: 1860,
		canvasHeight: 1094,
		windowWidth: 1920,
		windowHeight: 1080
	}
});
