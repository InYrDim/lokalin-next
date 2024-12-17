import HeaderAuth from "@/components/header-auth";
// import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Brand from "@/components/brand";

import { MobileNavigator } from "@/components/mobile-navigator";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={GeistSans.className}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-screen flex flex-col items-center">
						<div className="flex-1 w-full flex flex-col items-center border-2">
							<nav className="w-full flex justify-center  border-black border-b-2 h-16">
								<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
									<div className="flex gap-5 items-center font-semibold">
										<div className="flex items-center gap-2">
											<Brand />
										</div>
									</div>
									<div className="flex lg:hidden md:hidden items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-neutral-100">
										<MobileNavigator />
									</div>
									<div className="hidden lg:flex md:flex gap-5 items-center font-semibold">
										<HeaderAuth />
									</div>
								</div>
							</nav>
							<div className="flex flex-1 flex-col max-w-screen-lg">
								{children}
							</div>

							<footer className="w-full flex items-center justify-center  border-black border-t-2 mx-auto text-center text-xs gap-8 py-6">
								&copy; {new Date().getFullYear()} Lokalin
								{/* <ThemeSwitcher /> */}
							</footer>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
