import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Framer from "../framer";
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

export default function showFindBestTourSection() {
	return (
		<section className="flex flex-col items-center lg:items-start gap-6">
			<h2 className="text-7xl text-right lg:text-left text-apple-800">
				Temukan Destinasi Wisata Terdekat!
			</h2>
			<p className="text-right lg:text-left text-apple-900">
				Ingin liburan ke destinasi wisata yang populer di Indonesia?
				Kami telah mengumpulkan daftar destinasi wisata terbaik di
				Indonesia untuk Anda.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{wisatas.map((wisata, i) => {
					if (i % 2 === 0)
						return (
							<Framer key={i} delay={i * 0.2}>
								<Card className="transition-all hover:shadow-sm bg-apple-200">
									<CardHeader>
										<CardTitle>{wisata.name}</CardTitle>
										<CardDescription>
											{wisata.description}
										</CardDescription>
									</CardHeader>
								</Card>
							</Framer>
						);
					return (
						<Framer>
							<Card className="transition-all hover:shadow-sm">
								<CardHeader>
									<CardTitle>{wisata.name}</CardTitle>
									<CardDescription>
										{wisata.description}
									</CardDescription>
								</CardHeader>
							</Card>
						</Framer>
					);
				})}
			</div>
		</section>
	);
}
