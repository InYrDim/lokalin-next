import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { Badge } from "@/components/ui/badge";

export default async function AuthButton() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user ? (
		<div className="flex items-end sm:items-center gap-4 flex-col sm:flex-row">
			<Link href={"/protected"}>
				<Button variant={"neutral"}>Dashboard</Button>
			</Link>
			<form action={signOutAction}>
				<Button
					type="submit"
					variant={"neutral"}
					className="hover:bg-main"
				>
					Sign out
				</Button>
			</form>
		</div>
	) : (
		<div className="flex gap-2">
			<Button asChild size="sm" variant={"neutral"}>
				<Link href="/sign-in">Login</Link>
			</Button>
		</div>
	);
}
