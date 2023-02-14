import { useNavigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
export default function Home() {
	const navigate = useNavigate();
	return (
		<AppLayout>
			<button
				onClick={async () => {
					localStorage.removeItem("accessToken");
					localStorage.removeItem("refreshToken");
					window.dispatchEvent(new Event("storage"));
					navigate("/login");
				}}
			>
				logout
			</button>
		</AppLayout>
	);
}
