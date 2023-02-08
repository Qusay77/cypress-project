import "@emotion/react";
import { fontClampType } from "src/Globals/global";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			[key: string]: string;
		};
		helpers: {
			fontClamp: fontClampType;
		};
	}
}
