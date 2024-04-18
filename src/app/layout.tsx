import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	title: "Global Clean",
	description: "Explore this dummy landing page for demonstration purposes only. Discover how Globalclean offers top-quality shoe and sneaker care services. This page is for illustration purposes and does not represent an actual service.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={cn("font-sans antialiased bg-background min-h-screen", fontSans.variable)}>{children}</body>
		</html>
	);
}
