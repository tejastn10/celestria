import type {
	AvailableBackground,
	AvailableFont,
	AvailableLanguage,
	AvailableTheme,
} from "@/types";

const AVAILABLE_FONTS: AvailableFont[] = [
	{ id: "JetBrains Mono", name: "JetBrains Mono" },
	{ id: "Roboto Mono", name: "Roboto Mono" },
	{ id: "Source Code Pro", name: "Source Code Pro" },
	{ id: "monospace", name: "Monospace" },
	{ id: "Outfit", name: "Outfit" },
];

const AVAILABLE_THEMES: AvailableTheme[] = [
	{ id: "github-dark", name: "GitHub Dark" },
	{ id: "github-light", name: "GitHub Light" },
	{ id: "dracula", name: "Dracula" },
	{ id: "monokai", name: "Monokai" },
	{ id: "nord", name: "Nord" },
	{ id: "solarized-dark", name: "Solarized Dark" },
	{ id: "solarized-light", name: "Solarized Light" },
	{ id: "one-dark-pro", name: "One Dark Pro" },
	{ id: "material-theme-ocean", name: "Material Ocean" },
	{ id: "night-owl", name: "Night Owl" },
];

const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
	{ id: "typescript", name: "TypeScript" },
	{ id: "javascript", name: "JavaScript" },
	{ id: "python", name: "Python" },
	{ id: "java", name: "Java" },
	{ id: "go", name: "Go" },
	{ id: "rust", name: "Rust" },
	{ id: "c", name: "C" },
	{ id: "cpp", name: "C++" },
	{ id: "csharp", name: "C#" },
	{ id: "php", name: "PHP" },
	{ id: "ruby", name: "Ruby" },
	{ id: "swift", name: "Swift" },
	{ id: "kotlin", name: "Kotlin" },
	{ id: "html", name: "HTML" },
	{ id: "css", name: "CSS" },
	{ id: "json", name: "JSON" },
	{ id: "sql", name: "SQL" },
	{ id: "markdown", name: "Markdown" },
	{ id: "yaml", name: "YAML" },
	{ id: "bash", name: "Bash" },
];

const AVAILABLE_BACKGROUNDS: AvailableBackground[] = [
	{ id: "black", name: "Black", value: "#000000", type: "solid" },
	{ id: "slate-950", name: "Slate Black", value: "#020617", type: "solid" },
	{ id: "slate-900", name: "Slate Dark", value: "#0f172a", type: "solid" },
	{ id: "gray-900", name: "Gray Dark", value: "#111827", type: "solid" },
	{ id: "zinc-900", name: "Zinc Dark", value: "#18181b", type: "solid" },
	{ id: "neutral-900", name: "Neutral Dark", value: "#171717", type: "solid" },
	{ id: "stone-900", name: "Stone Dark", value: "#1c1917", type: "solid" },
	{ id: "red-900", name: "Red Dark", value: "#7f1d1d", type: "solid" },
	{ id: "orange-900", name: "Orange Dark", value: "#7c2d12", type: "solid" },
	{ id: "amber-900", name: "Amber Dark", value: "#78350f", type: "solid" },
	{ id: "yellow-900", name: "Yellow Dark", value: "#713f12", type: "solid" },
	{ id: "lime-900", name: "Lime Dark", value: "#365314", type: "solid" },
	{ id: "green-900", name: "Green Dark", value: "#14532d", type: "solid" },
	{ id: "emerald-900", name: "Emerald Dark", value: "#064e3b", type: "solid" },
	{ id: "teal-900", name: "Teal Dark", value: "#134e4a", type: "solid" },
	{ id: "cyan-900", name: "Cyan Dark", value: "#164e63", type: "solid" },
	{ id: "sky-900", name: "Sky Dark", value: "#0c4a6e", type: "solid" },
	{ id: "blue-900", name: "Blue Dark", value: "#1e3a8a", type: "solid" },
	{ id: "indigo-900", name: "Indigo Dark", value: "#312e81", type: "solid" },
	{ id: "violet-900", name: "Violet Dark", value: "#4c1d95", type: "solid" },
	{ id: "purple-900", name: "Purple Dark", value: "#581c87", type: "solid" },
	{ id: "fuchsia-900", name: "Fuchsia Dark", value: "#701a75", type: "solid" },
	{ id: "pink-900", name: "Pink Dark", value: "#831843", type: "solid" },
	{ id: "rose-900", name: "Rose Dark", value: "#881337", type: "solid" },
	{ id: "white", name: "White", value: "#ffffff", type: "solid" },

	// ? Gradients
	{
		id: "blue-purple-gradient",
		name: "Blue to Purple",
		value: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
		type: "gradient",
		gradientDirection: "45deg",
	},
	{
		id: "green-blue-gradient",
		name: "Green to Blue",
		value: "linear-gradient(45deg, #10b981, #3b82f6)",
		type: "gradient",
		gradientDirection: "45deg",
	},
	{
		id: "orange-red-gradient",
		name: "Orange to Red",
		value: "linear-gradient(45deg, #f97316, #ef4444)",
		type: "gradient",
		gradientDirection: "45deg",
	},
	{
		id: "pink-purple-gradient",
		name: "Pink to Purple",
		value: "linear-gradient(45deg, #ec4899, #8b5cf6)",
		type: "gradient",
		gradientDirection: "45deg",
	},
	{
		id: "black-white-gradient",
		name: "Black to White",
		value: "linear-gradient(45deg, #000000, #ffffff, #000000)",
		type: "gradient",
		gradientDirection: "45deg",
	},
];

const GRADIENT_DIRECTIONS = [
	{ id: "0deg", name: "Top to Bottom", value: "0deg" },
	{ id: "90deg", name: "Left to Right", value: "90deg" },
	{ id: "45deg", name: "Top Left to Bottom Right", value: "45deg" },
	{ id: "135deg", name: "Top Right to Bottom Left", value: "135deg" },
];

const PADDING_OPTIONS = [
	{ value: 16, label: "Small" },
	{ value: 32, label: "Medium" },
	{ value: 64, label: "Large" },
	{ value: 128, label: "Extra Large" },
];

const FONT_SIZE_OPTIONS = [
	{ value: 12, label: "12px" },
	{ value: 14, label: "14px" },
	{ value: 16, label: "16px" },
	{ value: 18, label: "18px" },
	{ value: 20, label: "20px" },
	{ value: 24, label: "24px" },
];

const DEFAULT_CODE_SAMPLE = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate the first 10 numbers in the sequence
const sequence = [];
for (let i = 0; i < 10; i++) {
  sequence.push(fibonacci(i));
}

console.log(sequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`;
const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES[0].id;
const DEFAULT_THEME = AVAILABLE_THEMES[0].id;
const DEFAULT_BACKGROUND = AVAILABLE_BACKGROUNDS[0];
const DEFAULT_GRADIENT_DIRECTION = GRADIENT_DIRECTIONS[2].value;
const DEFAULT_PADDING = PADDING_OPTIONS[1].value;
const DEFAULT_FONT_FAMILY = AVAILABLE_FONTS[0].id;
const DEFAULT_FONT_SIZE = FONT_SIZE_OPTIONS[1].value;
const DEFAULT_LINE_NUMBERS = true;
const DEFAULT_WINDOW_CONTROLS = true;

export {
	// * Default Values
	DEFAULT_CODE_SAMPLE,
	DEFAULT_LANGUAGE,
	DEFAULT_THEME,
	DEFAULT_BACKGROUND,
	DEFAULT_GRADIENT_DIRECTION,
	DEFAULT_PADDING,
	DEFAULT_FONT_FAMILY,
	DEFAULT_FONT_SIZE,
	DEFAULT_LINE_NUMBERS,
	DEFAULT_WINDOW_CONTROLS,
	// ? Editor Settings
	AVAILABLE_THEMES,
	AVAILABLE_LANGUAGES,
	// ? Background Settings
	AVAILABLE_BACKGROUNDS,
	GRADIENT_DIRECTIONS,
	PADDING_OPTIONS,
	// ? Font Settings
	AVAILABLE_FONTS,
	FONT_SIZE_OPTIONS,
};
