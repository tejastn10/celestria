"use client";

import { Download, Moon, Sun } from "lucide-react";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LineGrow } from "@/components/animated/LineGrow";
import { Button } from "@/components/ui/Button";
import { CodeEditor } from "@/containers/Editor";
import { Toolbar } from "@/containers/Toolbar";

import { exportImage } from "@/utils/export";

export default function Home() {
	const [isShikiLoaded, setIsShikiLoaded] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsShikiLoaded(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleExport = async (format: "png" | "jpeg" | "svg" = "png") => {
		try {
			await exportImage(editorRef.current, format);
		} catch (error) {
			console.error("Error exporting image:", error);
		}
	};

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<main className="min-h-screen flex flex-col p-4 md:p-8">
			<div className="max-w-8xl mx-auto w-full">
				<header className="mb-8 text-center">
					<motion.h1
						className="text-6xl font-bold"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						C<span className="text-3xl font-bold">ELESTRIA</span>
					</motion.h1>
					<LineGrow className="my-0 w-50" />
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					<div className="lg:col-span-3 flex flex-col">
						<div className="flex gap-4 justify-between mb-8">
							<Button
								variant="outline"
								size="icon"
								onClick={toggleTheme}
								className="cursor-pointer"
							>
								{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
							</Button>
							<Button
								onClick={() => handleExport("png")}
								variant="outline"
								className="flex items-center gap-2"
							>
								<Download className="w-4 h-4" />
								Export
							</Button>
						</div>
						<div className="bg-slate-50 dark:bg-transparent rounded-lg border overflow-hidden shadow-md">
							{isShikiLoaded ? (
								<div className="p-4 h-full relative" ref={editorRef}>
									<CodeEditor />
								</div>
							) : (
								<div className="p-4 h-full flex items-center justify-center">
									<div className="animate-pulse text-center">
										<div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-4"></div>
										<div className="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="lg:col-span-1 bg-white dark:bg-transparent rounded-lg border p-4 shadow-md">
						<Toolbar />
					</div>
				</div>
			</div>
		</main>
	);
}
