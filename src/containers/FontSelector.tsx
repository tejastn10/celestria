"use client";

import { FC } from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";

import { useEditorStore } from "@/lib/store";

import { AVAILABLE_FONTS, FONT_SIZE_OPTIONS } from "@/constants";

const FontSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();

	const onFamilyChangeHandler = (val: string) => {
		updateSettings({ fontFamily: val });
	};

	const onSizeChangeHandler = (val: string) => {
		updateSettings({ fontSize: Number(val) });
	};

	return (
		<div className="space-y-4">
			<div>
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

			<div>
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
