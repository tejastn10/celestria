import { toPng, toJpeg, toSvg } from "html-to-image";

import { formatFileName } from "@/utils/editor";

// ? Future Enhancements
type ExportFormat = "png" | "jpeg" | "svg";

const exportImage = async (
	element: HTMLElement | null,
	format: ExportFormat = "png",
	fileName: string = "code-snippet"
) => {
	if (!element) {
		throw new Error("Element not found");
	}

	const formattedFileName = formatFileName(fileName);

	try {
		let dataUrl: string;

		switch (format) {
			case "png":
				dataUrl = await toPng(element, { quality: 1 });
				break;
			case "jpeg":
				dataUrl = await toJpeg(element, { quality: 0.95 });
				break;
			case "svg":
				dataUrl = await toSvg(element);
				break;
			default:
				dataUrl = await toPng(element, { quality: 1 });
		}

		// Create a download link
		const link = document.createElement("a");
		link.download = formattedFileName;
		link.href = dataUrl;
		link.click();

		return dataUrl;
	} catch (error) {
		console.error("Error exporting image:", error);
		throw error;
	}
};

export { exportImage };
