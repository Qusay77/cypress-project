import { LoginStateTypes } from "@qusay77/login-page";
import { TableStateTypes } from "@packages/Table";
import { AuthStateTypes } from "@qusay77/auth";
export interface RootState {
	login: LoginStateTypes;
	auth: AuthStateTypes;
	table: TableStateTypes;
}
