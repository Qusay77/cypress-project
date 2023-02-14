import { useDispatch, useSelector } from "react-redux";
import { LoginStateTypes } from "../types";
import { InputCore } from "@qusay77/core-input";
import { actions } from "../state";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { InputStyles } from "./InputStyles";

const InputController = ({ type }: { type: string }) => {
	const {
		email,
		password,
		newPassword,
		orgName,
		emailValidation,
		passwordValidation,
		isEmailErrorActive,
		isPasswordErrorActive,
	} = useSelector(({ login }: { login: LoginStateTypes }) => login) || {};
	const { setEmail, setPassword, setNewPassword, setOrgName } = actions;
	const typeObj: {
		[key: string]: {
			value: string;
			setter: ActionCreatorWithPayload<string>;
			error?: boolean | null;
		};
	} = {
		email: {
			value: email,
			setter: setEmail,
			error:
				(isEmailErrorActive && emailValidation) ||
				(isEmailErrorActive && !email.length),
		},
		password: {
			value: password,
			setter: setPassword,
			error:
				(isPasswordErrorActive && passwordValidation) ||
				(isPasswordErrorActive && !password.length),
		},
		newPassword: {
			value: newPassword,
			setter: setNewPassword,
		},
		orgName: {
			value: orgName,
			setter: setOrgName,
		},
	};

	const dispatch = useDispatch();
	const action = (payload: string) => {
		dispatch(typeObj[type].setter(payload));
	};
	return (
		<InputCore
			type={type === "password" ? "password" : "text"}
			value={typeObj[type].value}
			setValue={action}
			error={typeObj[type].error}
			{...InputStyles[type]}
		/>
	);
};

export default InputController;
