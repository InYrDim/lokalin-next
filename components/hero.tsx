import AnimatedCard from "./AnimatedCard";

export default function Hero() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<AnimatedCard className="mt-5 ">
				<div className="flex flex-col gap-16 items-center justify-center max-w-5xl py-20">
					<h1 className="sr-only">
						Lokalin Memberikan Kamu Rekomendasi Tempat Wisata
					</h1>
					<p className="p-10 lg:p-0 text-5xl lg:text-7xl !leading-tight mx-auto sm:max-w-4xl  text-apple-100 md:text-center">
						Lokalin Memberikan Kamu Rekomendasi Tempat{" "}
						<b className="text-apple-900">Wisata.</b>
					</p>
				</div>
			</AnimatedCard>
		</div>
	);
}
