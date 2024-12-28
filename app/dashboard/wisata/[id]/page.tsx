import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	const tourData = [
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
	];

	const tour = tourData.find((tour) => tour.id === Number(id));

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
