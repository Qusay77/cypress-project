interface VarietyTextProps {
	weight: number | string;
	fontColor: string;
	fontSize: number;
	isClickAble?: boolean;
}

interface FillButtonProps {
	invert?: boolean;
	width: string;
	forceInvertMargin?: boolean;
	disabled?: boolean;
}

export type { VarietyTextProps, FillButtonProps };
