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
import { PADDING_OPTIONS } from "@/constants";
import { useEditorStore } from "@/lib/store";

const PaddingSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onChangeHandler = (val: string) => {
		updateSettings({ padding: parseInt(val, 10) });
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
