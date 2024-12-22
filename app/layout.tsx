// import { ThemeSwitcher } from "@/components/theme-switcher";

import MainNav from "@/components/mainNav";
import "./globals.css";

import { Providers } from "@/components/providers";

import { parkinsans } from "@/utils/fonts";

import { staticMetadata } from "@/utils/metadata";

export const metadata = staticMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={parkinsans.className}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground">
				<Providers>
					<main className="min-h-screen flex flex-col items-center">
						<div className="flex-1 w-full flex flex-col items-center border-2">
							<MainNav />
							<div className="flex flex-1 flex-col max-w-screen-lg">
								{children}
							</div>

							<footer className="w-full flex items-center justify-center  border-black border-t-2 mx-auto text-center text-xs gap-8 py-6">
								&copy; {new Date().getFullYear()} Lokalin
								{/* <ThemeSwitcher /> */}
							</footer>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
