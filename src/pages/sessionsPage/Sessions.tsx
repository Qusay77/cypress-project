import AppLayout from "src/layout/AppLayout";
import { SessionsBody } from "./Theme";
import DatePickerComponent from "@qusay77/date-picker";
const Sessions = () => {
	return (
		<AppLayout>
			<SessionsBody>Session Analytics</SessionsBody>;
			<DatePickerComponent />
		</AppLayout>
	);
};

export default Sessions;
