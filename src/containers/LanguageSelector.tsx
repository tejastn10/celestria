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
import { AVAILABLE_LANGUAGES } from "@/constants";
import { useEditorStore } from "@/lib/store";

const LanguageSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onChangeHandler = (val: string) => {
		updateSettings({ language: val });
	};

	return (
		<div>
			<Select onValueChange={onChangeHandler} defaultValue={settings.language}>
				<Label>Language</Label>
				<SelectTrigger className="my-2">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{AVAILABLE_LANGUAGES.map((language) => {
							return (
								<SelectItem key={language.id} value={language.id}>
									{language.name}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export { LanguageSelector };
