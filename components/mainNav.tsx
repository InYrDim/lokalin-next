import HeaderAuth from "@/components/header-auth";

import Brand from "@/components/brand";
import { MobileNavigator } from "@/components/mobile-navigator";
import Link from "next/link";

export default function MainNav() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white">
			<nav className="relative w-full flex justify-center border-black border-b-2">
				<div className="w-full max-w-5xl flex justify-between items-center text-sm">
					<div className="flex gap-5 items-center font-semibold">
						<div className="flex items-center gap-5">
							<Brand />
							<div className="text-sm bg-apple-500 transition-all duration-300 hover:bg-apple-600 py-4 px-5 border-black border-x-2">
								<Link href="/about" className="text-md">
									About
								</Link>
							</div>
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
		</div>
	);
}
