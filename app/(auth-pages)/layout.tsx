import { Authcard } from "@/components/authcard";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-7xl flex flex-1 justify-center flex-col gap-12 items-start">
			<Authcard>{children}</Authcard>
		</div>
	);
}
