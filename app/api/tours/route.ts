import { NextResponse } from "next/server";

export async function GET() {
	const tours = [
		{
			id: 1,
			name: "Bali Island Tour",
			description: "Explore the beautiful beaches and culture of Bali.",
		},
		{
			id: 2,
			name: "Jakarta City Tour",
			description:
				"Visit the bustling capital city of Indonesia with historical sites.",
		},
		{
			id: 3,
			name: "Yogyakarta Heritage Tour",
			description: "A journey through the cultural heart of Java.",
		},
		{
			id: 4,
			name: "Lombok Adventure Tour",
			description:
				"Hike Mount Rinjani and discover the wonders of Lombok.",
		},
		{
			id: 5,
			name: "Komodo Island Expedition",
			description:
				"See the famous Komodo dragons in their natural habitat.",
		},
		{
			id: 6,
			name: "Raja Ampat Diving Tour",
			description:
				"Experience world-class diving in the crystal-clear waters of Raja Ampat.",
		},
		{
			id: 7,
			name: "Bandung Shopping and Nature Tour",
			description:
				"Enjoy shopping in Bandung and explore its scenic surroundings.",
		},
		{
			id: 8,
			name: "Sumatra Wildlife Safari",
			description:
				"Discover the exotic wildlife and rainforests of Sumatra.",
		},
		{
			id: 9,
			name: "Surabaya City Tour",
			description:
				"Explore the cultural and historical landmarks of Surabaya.",
		},
		{
			id: 10,
			name: "Bromo Sunrise Trek",
			description:
				"Hike to the top of Mount Bromo and witness a spectacular sunrise.",
		},
		{
			id: 11,
			name: "Medan Culinary Tour",
			description: "Taste the unique and delicious foods of Medan.",
		},
		{
			id: 12,
			name: "Ubud Art and Culture Tour",
			description:
				"Immerse yourself in the art and culture of Ubud, Bali.",
		},
		{
			id: 13,
			name: "Belitung Island Beach Tour",
			description:
				"Relax on the pristine beaches and explore the island of Belitung.",
		},
		{
			id: 14,
			name: "Malang Nature and History Tour",
			description:
				"Discover the beauty of Malang and its colonial heritage.",
		},
		{
			id: 15,
			name: "Tana Toraja Cultural Tour",
			description:
				"Experience the fascinating culture and traditions of Tana Toraja.",
		},
		{
			id: 16,
			name: "Lake Toba Relaxation Tour",
			description:
				"Enjoy the serenity of Lake Toba, one of the largest volcanic lakes in the world.",
		},
		{
			id: 17,
			name: "Flores Island Eco Tour",
			description:
				"Explore the natural wonders and remote villages of Flores.",
		},
		{
			id: 18,
			name: "Bali Temple Tour",
			description:
				"Visit Bali’s most iconic temples and learn about their spiritual significance.",
		},
		{
			id: 19,
			name: "Gili Islands Snorkeling Tour",
			description: "Snorkel in the clear waters around the Gili Islands.",
		},
		{
			id: 20,
			name: "Solo Heritage and Culinary Tour",
			description:
				"Enjoy a blend of cultural heritage and culinary delights in Solo.",
		},
	];
	return NextResponse.json(tours);
}
