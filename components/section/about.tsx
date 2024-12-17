import NextLogo from "../next-logo";
import SupabaseLogo from "../supabase-logo";

export default function AboutSection() {
	return (
		<div className="border-black border-t-2 py-8">
			<div className="text-center mb-4">Build using</div>
			<div className="flex gap-8 justify-center items-center">
				<a
					href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
					target="_blank"
					rel="noreferrer"
				>
					<SupabaseLogo />
				</a>
				<span className="border-l rotate-45 h-6" />
				<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
					<NextLogo />
				</a>
			</div>
		</div>
	);
}
