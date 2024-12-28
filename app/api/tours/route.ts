import { NextResponse } from "next/server";

interface Tour {
	id: number;
	name: string;
	description: string;
}

function createTours({ id, name, description }: Tour) {
	const toursMap = new Map();
	toursMap.set("id", id);
	toursMap.set("name", name);
	toursMap.set("description", description);
	return toursMap;
}

const tours = new Array();
tours.push(
	createTours({
		id: 1,
		name: "Bali Island Tour",
		description: "Explore the beautiful beaches and culture of Bali.",
	})
);
tours.push(
	createTours({
		id: 2,
		name: "Jakarta City Tour",
		description:
			"Visit the bustling capital city of Indonesia with historical sites.",
	})
);
tours.push(
	createTours({
		id: 3,
		name: "Yogyakarta Heritage Tour",
		description: "A journey through the cultural heart of Java.",
	})
);
tours.push(
	createTours({
		id: 4,
		name: "Lombok Adventure Tour",
		description: "Hike Mount Rinjani and discover the wonders of Lombok.",
	})
);

function convertMapToObject(map: any) {
	return {
		id: map.get("id"),
		name: map.get("name"),
		description: map.get("description"),
	};
}

export async function GET() {
	const toursData = tours.map((tour: Tour) => convertMapToObject(tour));

	return NextResponse.json(toursData);
}

export async function POST(request: Request) {
	const tour = await request.json();
	const { id, name, description } = tour;

	tours.push(
		createTours({
			id: id ?? new Date().getTime(),
			name: name,
			description: description,
		})
	);

	const toursData = tours.map((tour: Tour) => convertMapToObject(tour));

	return NextResponse.json(toursData);
}
