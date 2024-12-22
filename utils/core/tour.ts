import { createClient } from "@/utils/supabase/server";
import { calculateHaversineDistance } from "./haversine";

interface LatLong {
	latitude: number;
	longitude: number;
}

interface Tour {
	id?: number;
	name: string;
	points: LatLong[];
	created_at?: string;
	description?: string;
}

export class TourManager {
	private supabase;

	constructor() {
		this.supabase = createClient();
	}

	async getAllTours(): Promise<Tour[]> {
		const { data, error } = await (await this.supabase)
			.from("tours")
			.select("*");

		if (error) {
			throw new Error(`Failed to fetch tours: ${error.message}`);
		}

		return data || [];
	}

	async getTourById(id: number): Promise<Tour | null> {
		const { data, error } = await (await this.supabase)
			.from("tours")
			.select()
			.eq("id", id)
			.single();

		if (error) {
			throw new Error(`Failed to fetch tour: ${error.message}`);
		}

		return data;
	}

	async addTour(
		name: string,
		points: LatLong[],
		description?: string
	): Promise<Tour> {
		if (points.length < 2) {
			throw new Error("Tour must have at least 2 points");
		}

		const newTour: Tour = {
			name,
			points,
			description,
		};

		const { data, error } = await (await this.supabase)
			.from("tours")
			.insert([newTour])
			.select()
			.single();

		if (error) {
			throw new Error(`Failed to add tour: ${error.message}`);
		}

		return data;
	}

	async updateTour(id: number, updates: Partial<Tour>): Promise<Tour> {
		const { data, error } = await (await this.supabase)
			.from("tours")
			.update(updates)
			.eq("id", id)
			.select()
			.single();

		if (error) {
			throw new Error(`Failed to update tour: ${error.message}`);
		}

		return data;
	}

	async deleteTour(id: number): Promise<void> {
		const { error } = await (await this.supabase)
			.from("tours")
			.delete()
			.eq("id", id);

		if (error) {
			throw new Error(`Failed to delete tour: ${error.message}`);
		}
	}

	calculateTourDistance(points: LatLong[]): number {
		return calculateHaversineDistance(points);
	}
}
