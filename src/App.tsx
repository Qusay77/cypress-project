/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { useRefreshTokenMutation } from "src/services/auth";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MainRouter from "src/router";

const isTokenValid = (expirationDate: string) => {
	const currentDate = new Date();
	const expDate = new Date(expirationDate);
	return currentDate < expDate;
};
const App = () => {
	const [refreshToken] = useRefreshTokenMutation();

	const [cookies, setCookie] = useCookies(["rememberMe"]);
	const { rememberMe } = cookies;
	const check = rememberMe ? rememberMe === "true" : true;
	const handleRefreshToken = async (token: string) => {
		const { data }: any = await refreshToken(token);
		localStorage.setItem("accessToken", JSON.stringify(data.access));
		localStorage.setItem("refreshToken", JSON.stringify(data.refresh));
		window.dispatchEvent(new Event("storage"));
	};

	const local = () => {
		const access = localStorage.getItem("accessToken");
		const refresh = localStorage.getItem("refreshToken");
		let isAccessValid = false;
		let isRefreshValid = false;

		if (access) {
			const { expires } = JSON.parse(access);
			isAccessValid = isTokenValid(expires);
		}
		if (refresh) {
			const { expires, token } = JSON.parse(refresh);
			isRefreshValid = isTokenValid(expires);
			if (!isAccessValid && isRefreshValid) {
				handleRefreshToken(token);
			}
			if (!isRefreshValid) {
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
			}
		}
		return isAccessValid;
	};
	const [isIn, setIsIn] = useState(local());

	useEffect(() => {
		window.addEventListener("storage", () => {
			setIsIn(local());
		});
	}, []);
	return (
		<BrowserRouter>
			<MainRouter isAccessValid={isIn} />
		</BrowserRouter>
	);
};
export default App;
