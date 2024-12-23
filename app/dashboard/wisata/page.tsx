import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { tours } from "./toursData"; // TODO: remove this, use API when ready
import Framer from "@/components/framer";

export default function Page() {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold">Lihat Wisata di Sekitar Anda</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				{tours.map((tour, idx) => (
					<Framer key={tour.id}>
						<Card
							key={tour.id}
							className={`w-full p-0 ${idx % 2 === 0 ? "bg-gray-50" : ""}`}
						>
							<CardHeader>
								<CardTitle>{tour.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-2 ">
								<p>{tour.description}</p>
								<Link
									href={`/dashboard/wisata/${tour.id}`}
									className="ms-auto"
								>
									<Button variant={"neutral"}>View</Button>
								</Link>
							</CardContent>
						</Card>
					</Framer>
				))}
			</div>
		</div>
	);
}