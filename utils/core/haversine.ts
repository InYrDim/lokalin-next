interface LatLong {
	latitude: number;
	longitude: number;
}

/**
 * Calculates the total distance between multiple points using the Haversine formula
 * @param points Array of LatLong coordinates (minimum 2 points required)
 * @returns Total distance in kilometers
 */
export function calculateHaversineDistance(points: LatLong[]): number {
	if (points.length < 2) {
		throw new Error("At least 2 points are required to calculate distance");
	}

	const R = 6371; // Earth's radius in kilometers

	let totalDistance = 0;

	for (let i = 0; i < points.length - 1; i++) {
		const lat1 = (points[i].latitude * Math.PI) / 180;
		const lat2 = (points[i + 1].latitude * Math.PI) / 180;
		const deltaLat =
			((points[i + 1].latitude - points[i].latitude) * Math.PI) / 180;
		const deltaLon =
			((points[i + 1].longitude - points[i].longitude) * Math.PI) / 180;

		const a =
			Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
			Math.cos(lat1) *
				Math.cos(lat2) *
				Math.sin(deltaLon / 2) *
				Math.sin(deltaLon / 2);

		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c;

		totalDistance += distance;
	}

	return totalDistance;
}
