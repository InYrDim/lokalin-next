import Link from "next/link";
import Image from "next/image";

import { parkinsans } from "@/utils/fonts";

import image from "@/assets/images/logo.png";

export default function Brand() {
	return (
		<Link href={"/"} className="flex items-center gap-2">
			<div className="w-10 h-10 relative">
				<Image
					src={image}
					alt="Lokalin"
					fill
					className="object-contain"
				/>
			</div>
			<div className={`${parkinsans.className} text-4xl text-apple-600`}>
				Lokal<span className="text-curious-700 font-bold">in.</span>
			</div>
		</Link>
	);
}
