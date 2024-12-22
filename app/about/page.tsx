import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="h-screen w-full flex flex-col gap-10 items-center justify-center p-10">
			<div className="w-full max-w-5xl">
				<h1 className="text-4xl font-bold">About Page</h1>
				<p className="text-md mt-4">
					Lokalin adalah platform yang membantu Anda menemukan
					informasi terkait tempat wisata yang menarik. Demi kesehatan
					dan kenyamanan Anda, Lokalin menyediakan rekomendasi tempat
					wisata yang aman dan menyenangkan.
				</p>
			</div>

			<Link href="/">
				<Button variant={"neutral"}>Kembali ke halaman utama</Button>
			</Link>
		</div>
	);
}
