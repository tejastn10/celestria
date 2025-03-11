"use client";

import { FC } from "react";

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";

import { useEditorStore } from "@/lib/store";

import { AVAILABLE_THEMES } from "@/constants";

const ThemeSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onChangeHandler = (val: string) => {
		updateSettings({ theme: val });
	};

	return (
		<div>
			<Select onValueChange={onChangeHandler} defaultValue={settings.theme}>
				<Label>Theme</Label>
				<SelectTrigger className="my-2">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{AVAILABLE_THEMES.map((theme) => {
							return (
								<SelectItem key={theme.id} value={theme.id}>
									{theme.name}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export { ThemeSelector };
