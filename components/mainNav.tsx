import HeaderAuth from "@/components/header-auth";

import Brand from "@/components/brand";
import { MobileNavigator } from "@/components/mobile-navigator";

export default function MainNav() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white">
			<nav className="w-full flex justify-center border-black border-b-2 h-16">
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
		</div>
	);
}
