export default function Header() {
	return (
		<div className="flex flex-col gap-16 items-center max-w-5xl p-5 mt-5">
			<h1 className="sr-only">
				Lokalin Memberikan Kamu Rekomendasi Tempat Wisata
			</h1>
			<p className="text-6xl lg:text-7xl !leading-tight mx-auto sm:max-w-4xl  text-apple-900 md:text-center">
				Lokalin Memberikan Kamu Rekomendasi Tempat{" "}
				<b className="text-apple-700">Wisata.</b>
			</p>
			<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
		</div>
	);
}
