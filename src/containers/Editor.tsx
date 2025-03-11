"use client";

import { FC, useEffect, useState } from "react";

import { createHighlighter } from "shiki";

import { useEditorStore } from "@/lib/store";

import { getBackgroundById, getFontById } from "@/utils/editor";

const CodeEditor: FC = () => {
	const { settings } = useEditorStore();
	const [renderedCode, setRenderedCode] = useState("");

	useEffect(() => {
		const renderCodeWithShiki = async () => {
			try {
				// Create a highlighter with the selected theme and language
				const highlighter = await createHighlighter({
					themes: [settings.theme],
					langs: [settings.language],
				});

				// Generate HTML for the code - without the unsupported lineOptions
				const html = highlighter.codeToHtml(settings.code, {
					lang: settings.language,
					theme: settings.theme,
				});

				// Add line numbers manually if they're enabled
				if (settings.lineNumbers) {
					// Manipulate the HTML to add line numbers
					const lineCount = settings.code.split("\n").length;
					const codeWithLineNumbers = addLineNumbers({ html, lineCount });
					setRenderedCode(codeWithLineNumbers);
				} else {
					setRenderedCode(html);
				}
			} catch (error) {
				console.error("Error highlighting code:", error);
			}
		};

		renderCodeWithShiki();
	}, [settings.code, settings.language, settings.theme, settings.lineNumbers]);

	// Helper function to add line numbers to the HTML
	const addLineNumbers = ({ html, lineCount }: { html: string; lineCount: number }) => {
		// Simple approach: we'll wrap the code and add a line number gutter
		// This assumes the HTML from shiki has a structure we can work with
		const lineNumbersHTML = Array.from({ length: lineCount })
			.map((_, i) => `<span class="line-number">${i + 1}</span>`)
			.join("");

		// Find where to insert the line numbers (before the code content)
		const preTagIndex = html.indexOf("<pre");
		if (preTagIndex === -1) return html;

		const preTagEndIndex = html.indexOf(">", preTagIndex);
		if (preTagEndIndex === -1) return html;

		// Insert after the opening <pre> tag
		const modifiedHtml =
			html.substring(0, preTagEndIndex + 1) +
			`<div class="code-with-line-numbers"><div class="line-numbers-gutter">${lineNumbersHTML}</div>` +
			html.substring(preTagEndIndex + 1);

		// Close the wrapper div before the closing </pre> tag
		const closingPreIndex = modifiedHtml.lastIndexOf("</pre>");
		if (closingPreIndex === -1) return modifiedHtml;

		return (
			modifiedHtml.substring(0, closingPreIndex) +
			"</div>" +
			modifiedHtml.substring(closingPreIndex)
		);
	};

	const background = getBackgroundById(settings.background);
	const font = getFontById(settings.fontFamily);
	const fontSize = settings.fontSize;

	const backgroundStyle =
		background.type === "gradient"
			? { background: background.value }
			: { backgroundColor: background.value };

	// Create a unique ID for this editor instance to target with CSS
	const editorId = `code-editor-${Math.random().toString(36).substring(2, 9)}`;

	// Add custom styles to override Shiki's default styling
	const customStyles = `
    #${editorId} .shiki,
    #${editorId} .shiki code,
    #${editorId} .code-content pre,
    #${editorId} .code-content code,
    #${editorId} .code-with-line-numbers {
      font-family: ${font.name}, monospace !important;
      font-size: ${fontSize}px !important;
      line-height: 1.5 !important;
    }
  `;

	return (
		<div
			id={editorId}
			className="editor-container rounded-lg overflow-hidden shadow-lg"
			style={{ ...backgroundStyle, padding: settings.padding }}
		>
			{/* Inject custom styles */}
			<style dangerouslySetInnerHTML={{ __html: customStyles }} />

			<div className="editor-header flex items-center justify-between p-3">
				{settings.windowControls && (
					<div className="window-controls flex gap-2">
						<div className="w-3 h-3 rounded-full bg-red-500"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
						<div className="w-3 h-3 rounded-full bg-green-500"></div>
					</div>
				)}
			</div>

			<div className="code-content p-4" dangerouslySetInnerHTML={{ __html: renderedCode }} />
		</div>
	);
};

export { CodeEditor };
