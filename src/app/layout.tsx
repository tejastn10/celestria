import "./globals.css";

import type { Metadata } from "next";

import { JetBrains_Mono, Outfit, Roboto_Mono, Source_Code_Pro } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { DATA } from "@/data/data";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	variable: "--font-roboto-mono",
});

const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
	variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
	title: {
		default: DATA.name,
		template: `%s | ${DATA.name}`,
	},
	description: DATA.description,
	openGraph: {
		title: `${DATA.name}`,
		description: DATA.description,
		siteName: `${DATA.name}`,
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "",
		yandex: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={outfit.variable}>
			<body
				className={`${outfit.variable} ${jetbrainsMono.variable} ${robotoMono.variable} ${sourceCodePro.variable} font-outfit antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
