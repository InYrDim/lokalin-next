import AnimatedCard from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<AnimatedCard className="sm:min-h-screen sm:flex items-center justify-center">
			<div className="flex flex-col items-center -mt-20 sm:mt-0 h-screen sm:h-auto justify-center max-w-5xl py-20">
				<h1 className="sr-only">
					Lokalin Memberikan Kamu Rekomendasi Tempat Wisata
				</h1>
				<p className="p-10 lg:p-0 text-5xl lg:text-7xl !leading-tight mx-auto sm:max-w-4xl  text-apple-100 md:text-center">
					Lokalin Memberikan Kamu Rekomendasi Tempat{" "}
					<b className="text-apple-900">Wisata.</b>
				</p>
				<Button variant={"neutral"} className="mt-10">
					<Link
						href="/dashboard"
						className=" flex items-center gap-2"
					>
						Cari Wisata <ArrowRight />
					</Link>
				</Button>
			</div>
		</AnimatedCard>
	);
}
