"use client";

import type { FC } from "react";
import { Label } from "@/components/ui/Label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/Select";
import { AVAILABLE_THEMES } from "@/constants";
import { useEditorStore } from "@/lib/store";

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
