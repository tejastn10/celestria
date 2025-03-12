"use client";

import { FC } from "react";

import { Settings, RefreshCw } from "lucide-react";

import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/Button";

import { FontSelector } from "./FontSelector";
import { ThemeSelector } from "./ThemeSelector";
import { PaddingSelector } from "./PaddingSelector";
import { LanguageSelector } from "./LanguageSelector";
import { BackgroundSelector } from "./BackgroundSelector";

import { useEditorStore } from "@/lib/store";
import { GlowingText } from "@/components/animated/GlowingText";

const Toolbar: FC = () => {
	const { settings, updateSettings, resetSettings } = useEditorStore();

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<Settings className="w-5 h-5" />
				<GlowingText text="Customize" className="text-xl font-semibold" />
			</div>

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

				<div className="flex gap-6 mt-4">
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

				<Button
					className="w-full mt-4 py-2 flex items-center justify-center gap-2"
					onClick={resetSettings}
				>
					<RefreshCw className="w-4 h-4" />
					Reset settings
				</Button>
			</div>
		</div>
	);
};

export { Toolbar };
