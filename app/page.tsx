import Hero from "@/components/section/hero";
import AboutSection from "@/components/section/about";
import FindBestTourSection from "@/components/section/findbest";

export default async function Index() {
	return (
		<>
			<Hero />
			<main className="flex-1 flex flex-col py-10 px-9 ">
				<FindBestTourSection />
			</main>
			<AboutSection />
		</>
	);
}
