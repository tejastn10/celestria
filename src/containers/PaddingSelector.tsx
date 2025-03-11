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

import { PADDING_OPTIONS } from "@/constants";

const PaddingSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onChangeHandler = (val: string) => {
		updateSettings({ padding: parseInt(val) });
	};

	return (
		<div>
			<Select onValueChange={onChangeHandler} defaultValue={settings.padding.toString()}>
				<Label>Padding</Label>
				<SelectTrigger className="my-2">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{PADDING_OPTIONS.map((option) => {
							return (
								<SelectItem key={option.value} value={option.value.toString()}>
									{option.label}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export { PaddingSelector };
