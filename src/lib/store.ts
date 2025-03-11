import { create } from "zustand";

import { EditorSettings } from "@/types";

import {
	DEFAULT_BACKGROUND,
	DEFAULT_CODE_SAMPLE,
	DEFAULT_FONT_FAMILY,
	DEFAULT_FONT_SIZE,
	DEFAULT_GRADIENT_DIRECTION,
	DEFAULT_LANGUAGE,
	DEFAULT_LINE_NUMBERS,
	DEFAULT_PADDING,
	DEFAULT_THEME,
	DEFAULT_WINDOW_CONTROLS,
} from "@/constants";

interface EditorStore {
	settings: EditorSettings;

	resetSettings: () => void;
	updateSettings: (settings: Partial<EditorSettings>) => void;
}

const defaultSettings: EditorSettings = {
	code: DEFAULT_CODE_SAMPLE,
	language: DEFAULT_LANGUAGE,

	theme: DEFAULT_THEME,
	background: DEFAULT_BACKGROUND.id,
	backgroundType: DEFAULT_BACKGROUND.type,
	gradientDirection: DEFAULT_GRADIENT_DIRECTION,

	padding: DEFAULT_PADDING,

	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: DEFAULT_FONT_SIZE,

	lineNumbers: DEFAULT_LINE_NUMBERS,

	windowControls: DEFAULT_WINDOW_CONTROLS,
};

export const useEditorStore = create<EditorStore>((set) => ({
	settings: defaultSettings,

	resetSettings: () => set({ settings: defaultSettings }),
	updateSettings: (newSettings) =>
		set((state) => ({
			settings: { ...state.settings, ...newSettings },
		})),
}));
