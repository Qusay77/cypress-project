import { useNavigate } from "react-router-dom";
export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="App">
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
		</div>
	);
}
