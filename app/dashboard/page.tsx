import { createClient } from "@/utils/supabase/server";

// next
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// lucide
import { ArrowBigRightDash as LinkIcon, Mail } from "lucide-react";

// components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function ProtectedPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/sign-in");
	}

	return (
		<div className="flex-1 w-full flex flex-col items-center space-y-12 py-12 px-4">
			<div className="flex flex-col gap-4">
				<div className=" w-full flex gap-4">
					<Card className="h-fit">
						<Image
							src={user.user_metadata.avatar_url}
							alt={""}
							width={70}
							height={70}
							className="aspect-square flex-1 object-cover max-w-16"
						/>
					</Card>
					<div className="space-y-2">
						<p className="text-3xl text-apple-900 font-smibold">
							Hello! {user.user_metadata.full_name}
						</p>
						<p className="text-gray-500 flex gap-2">
							<Mail />
							{user.user_metadata.email}
						</p>
					</div>
				</div>

				<Link href="/dashboard/wisata" className="w-full">
					<Button className="flex items-center gap-2 w-full">
						<LinkIcon className="w-4 h-4" /> Go to Wisatas
					</Button>
				</Link>
			</div>

			<Card className="w-full p-4 bg-white">
				<div>
					something <span className="font-bold">BIGG</span> will goes
					on here😊
				</div>
			</Card>

			{/* <div className="flex flex-col gap-2 items-start">
				<h2 className="font-bold text-2xl mb-4">Your user details</h2>
				<textarea
					className="text-xs font-mono p-3 rounded border w-full"
					value={JSON.stringify(user, null, 2)}
				/>
			</div> */}
		</div>
	);
}
