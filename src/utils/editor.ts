import {
	AVAILABLE_BACKGROUNDS,
	AVAILABLE_FONTS,
	AVAILABLE_LANGUAGES,
	AVAILABLE_THEMES,
} from "@/constants";

const getThemeById = (id: string) => {
	return AVAILABLE_THEMES.find((theme) => theme.id === id) || AVAILABLE_THEMES[0];
};

const getLanguageById = (id: string) => {
	return AVAILABLE_LANGUAGES.find((language) => language.id === id) || AVAILABLE_LANGUAGES[0];
};

const getFontById = (id: string) => {
	return AVAILABLE_FONTS.find((font) => font.id === id) || AVAILABLE_FONTS[0];
};

const getBackgroundById = (id: string) => {
	return AVAILABLE_BACKGROUNDS.find((bg) => bg.id === id) || AVAILABLE_BACKGROUNDS[0];
};

const getBackgroundValue = (id: string): string => {
	const background = getBackgroundById(id);
	return background.value;
};

const formatFileName = (fileName: string) => {
	// Replace spaces and special characters
	return fileName
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "")
		.concat(".png");
};

export {
	getThemeById,
	getLanguageById,
	getFontById,
	getBackgroundById,
	getBackgroundValue,
	formatFileName,
};
