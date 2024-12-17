import Link from "next/link";
export default function Brand() {
	return (
		<Link href={"/"}>
			<div className="text-4xl text-apple-600">
				Lokal<span className="text-curious-700 font-bold">in.</span>
			</div>
		</Link>
	);
}
