export interface Tour {
	id: number;
	name: string;
	description: string;
}

const origin = process.env.VERCEL_URL || "http://localhost:3000";

// // get
export async function getTours(): Promise<Tour[]> {
	const tours = await fetch(`${origin}/api/tours`);
	const { data }: { data: Tour[] } = await tours.json();
	return data;
}

// // get by id
export async function getTour(id: number): Promise<Tour | undefined> {
	const tours = await getTours();
	return tours.find((tour) => tour.id === id);
}

// // post
export async function postTour(tour: Tour): Promise<Tour> {
	const res = await fetch("/api/tours", {
		method: "POST",
		body: JSON.stringify(tour),
	});
	const { data } = await res.json();
	return data;
}
