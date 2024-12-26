import { Button } from "@/components/ui/button";
import Link from "next/link";

import { getTours } from "@/utils/handlers/api";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	const tours = await getTours();
	const tour = tours.find((tour) => tour.id === parseInt(id));

	if (!tour) {
		return <div>Tour not found</div>;
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-bold">{tour.name}</h1>
			<p className="text-sm text-gray-500">{tour.description}</p>
			<Link href="/dashboard/wisata">
				<Button>Back</Button>
			</Link>
		</div>
	);
}
