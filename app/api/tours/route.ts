import { NextResponse } from "next/server";

interface Tour {
	id: number;
	name: string;
	description: string;
}
const rawData = new Promise((resolve, reject) => {
	setTimeout(() => {
		const exampleData = [
			{
				id: 1,
				name: "Bali Island Tour",
				description:
					"Explore the beautiful beaches and culture of Bali.",
			},
			{
				id: 2,
				name: "Jakarta City Tour",
				description:
					"Visit the bustling capital city of Indonesia with historical sites.",
			},
		];
		resolve(JSON.stringify(exampleData));
	}, 100); // Simulate network delay
});

/**
 * Retrieves all available tours
 */
export async function GET(): Promise<NextResponse> {
	try {
		const data = await rawData;
		const dt: Tour[] = JSON.parse(data as string);

		const tours = dt.reduce((map, tour) => {
			map.set(tour.id, tour);
			return map;
		}, new Map<number, Tour>());

		return NextResponse.json({ data: tours }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch tours" },
			{ status: 500 }
		);
	}
}

/**
 * Creates a new tour
 */
export async function POST(request: Request): Promise<NextResponse> {
	try {
		const body = await request.json();

		if (!body.name || !body.description) {
			return NextResponse.json(
				{ error: "Name and description are required" },
				{ status: 400 }
			);
		}

		const data = await rawData;
		const dt: Tour[] = JSON.parse(data as string);

		const tours = dt.reduce((map, tour) => {
			map.set(tour.id, tour);
			return map;
		}, new Map<number, Tour>());

		const newTour: Tour = {
			id: tours.size + 1,
			name: body.name,
			description: body.description,
		};

		tours.set(newTour.id, newTour);

		return NextResponse.json({ data: newTour }, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create tour" },
			{ status: 500 }
		);
	}
}
