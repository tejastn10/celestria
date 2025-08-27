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
import { AVAILABLE_BACKGROUNDS, GRADIENT_DIRECTIONS } from "@/constants";
import { useEditorStore } from "@/lib/store";
import { getBackgroundById } from "@/utils/editor";

const BackgroundSelector: FC = () => {
	const { settings, updateSettings } = useEditorStore();
	const selectedBackground = getBackgroundById(settings.background);

	const onBackgroundChangeHandler = (backgroundId: string) => {
		const background = getBackgroundById(backgroundId);
		updateSettings({
			background: backgroundId,
			backgroundType: background.type,
			gradientDirection: background.gradientDirection || settings.gradientDirection,
		});
	};

	const onDirectionChangeHandler = (direction: string) => {
		updateSettings({
			gradientDirection: direction,
		});
	};

	return (
		<div>
			<Select onValueChange={onBackgroundChangeHandler} defaultValue={settings.background}>
				<Label>Background</Label>
				<SelectTrigger className="my-2">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{AVAILABLE_BACKGROUNDS.map((background) => {
							return (
								<SelectItem key={background.id} value={background.id}>
									{background.name}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>

			{selectedBackground.type === "gradient" && (
				<div className="mt-2">
					<Select
						onValueChange={onDirectionChangeHandler}
						defaultValue={settings.gradientDirection}
					>
						<Label>Gradient Direction</Label>
						<SelectTrigger className="my-2">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{GRADIENT_DIRECTIONS.map((direction) => {
									return (
										<SelectItem key={direction.id} value={direction.value}>
											{direction.name}
										</SelectItem>
									);
								})}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			)}
		</div>
	);
};

export { BackgroundSelector };
