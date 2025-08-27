type EditorSettings = {
	code: string;
	language: string;

	theme: string;
	background: string;
	backgroundType: "solid" | "gradient";
	gradientDirection: string;

	padding: number;

	fontFamily: string;
	fontSize: number;

	lineNumbers: boolean;

	windowControls: boolean;
};

type AvailableFont = {
	id: string;
	name: string;
};

type AvailableTheme = {
	id: string;
	name: string;
};

type AvailableLanguage = {
	id: string;
	name: string;
};

type AvailableBackground = {
	id: string;
	name: string;
	value: string;

	type: "solid" | "gradient";
	gradientDirection?: string;
};

export type {
	EditorSettings,
	// ? Actual Editor Settings
	AvailableFont,
	AvailableTheme,
	AvailableLanguage,
	AvailableBackground,
};
