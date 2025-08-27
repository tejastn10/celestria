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
import { AVAILABLE_FONTS, FONT_SIZE_OPTIONS } from "@/constants";
import { useEditorStore } from "@/lib/store";

const FontSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onFamilyChangeHandler = (val: string) => {
		updateSettings({ fontFamily: val });
	};

	const onSizeChangeHandler = (val: string) => {
		updateSettings({ fontSize: Number(val) });
	};

	return (
		<div className="flex space-x-4">
			<div className="w-2/3">
				<Select onValueChange={onFamilyChangeHandler} defaultValue={settings.fontFamily}>
					<Label>Font Family</Label>
					<SelectTrigger className="my-2">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{AVAILABLE_FONTS.map((option) => {
								return (
									<SelectItem key={option.id} value={option.id}>
										{option.name}
									</SelectItem>
								);
							})}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="w-1/3">
				<Select onValueChange={onSizeChangeHandler} defaultValue={settings.fontSize.toString()}>
					<Label>Font Size</Label>
					<SelectTrigger className="my-2">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{FONT_SIZE_OPTIONS.map((option) => {
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
		</div>
	);
};

export { FontSelector };
