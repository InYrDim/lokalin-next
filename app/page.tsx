import Hero from "@/components/hero";
import AboutSection from "@/components/section/about";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const wisatas = [
	{
		id: "Indonesia",
		name: "Indonesia",
		description:
			"Explore the beautiful beaches,	vibrant cities, and rich culture of Indonesia.",
	},
	{
		id: "jawa",
		name: "Jawa",
		description:
			"Discover the temples, volcanoes, and cities of Java, the heart of Indonesia.",
	},
	{
		id: "sumatera",
		name: "Sumatera",
		description:
			"Explore the natural wonders, wildlife, and culture of Sumatra, Indonesia's second largest island.",
	},
];

export default async function Index() {
	return (
		<>
			<Hero />
			<main className="flex-1 flex flex-col py-10 px-9 border-black border-t-2">
				<section className="flex flex-col items-center lg:items-start gap-6">
					<h2 className="text-5xl text-right lg:text-left text-apple-800">
						Temukan Destinasi Wisata Terdekat!
					</h2>
					<p className="text-right lg:text-left text-apple-900">
						Ingin liburan ke destinasi wisata yang populer di
						Indonesia? Kami telah mengumpulkan daftar destinasi
						wisata terbaik di Indonesia untuk Anda.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{wisatas.map((wisata, i) => {
							if (i % 2 === 0)
								return (
									<Card className="transition-all hover:shadow-sm bg-apple-200">
										<CardHeader>
											<CardTitle>{wisata.name}</CardTitle>
											<CardDescription>
												{wisata.description}
											</CardDescription>
										</CardHeader>
									</Card>
								);
							return (
								<Card className="transition-all hover:shadow-sm">
									<CardHeader>
										<CardTitle>{wisata.name}</CardTitle>
										<CardDescription>
											{wisata.description}
										</CardDescription>
									</CardHeader>
								</Card>
							);
						})}
					</div>
				</section>
			</main>
			<AboutSection />
		</>
	);
}
