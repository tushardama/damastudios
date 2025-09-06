import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Load Space Grotesk font
const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
	weight: ["300", "400", "500", "600", "700"], // optional: load all weights
});

export const metadata = {
	title: "Dama Studios",
	description: "Helping businesses 🚀 skyrocket their growth Premium Websites & Marketing that drive results Talk to us ✉️",
	icons: {
		icon: "/favicon.ico",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
