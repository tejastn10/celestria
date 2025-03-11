"use client";

import { FC } from "react";

import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/Button";

import { FontSelector } from "./FontSelector";
import { ThemeSelector } from "./ThemeSelector";
import { PaddingSelector } from "./PaddingSelector";
import { LanguageSelector } from "./LanguageSelector";
import { BackgroundSelector } from "./BackgroundSelector";

import { useEditorStore } from "@/lib/store";

const Toolbar: FC = () => {
	const { settings, updateSettings, resetSettings } = useEditorStore();

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold mb-4">Customize</h2>

			<div className="space-y-4">
				<div>
					<label htmlFor="code-input" className="block text-sm font-medium mb-2">
						Code
					</label>
					<textarea
						id="code-input"
						className="w-full h-40 p-2 bg-transparent border rounded-md font-mono text-sm"
						value={settings.code}
						onChange={(e) => updateSettings({ code: e.target.value })}
						placeholder="Enter your code here..."
					/>
				</div>

				<LanguageSelector />
				<ThemeSelector />
				<BackgroundSelector />
				<FontSelector />
				<PaddingSelector />

				<div className="flex flex-col gap-4 mt-4">
					<div className="flex items-center">
						<Switch
							id="line-numbers"
							className="mr-2"
							checked={settings.lineNumbers}
							onCheckedChange={(val) => updateSettings({ lineNumbers: val })}
						/>
						<Label htmlFor="line-numbers">Show line numbers</Label>
					</div>

					<div className="flex items-center">
						<Switch
							id="window-controls"
							className="mr-2"
							checked={settings.windowControls}
							onCheckedChange={(val) => updateSettings({ windowControls: val })}
						/>
						<Label htmlFor="window-controls">Show window controls</Label>
					</div>
				</div>

				<Button className="w-full mt-4 py-2" onClick={resetSettings}>
					Reset settings
				</Button>
			</div>
		</div>
	);
};

export { Toolbar };
