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

import { AVAILABLE_LANGUAGES } from "@/constants";

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
