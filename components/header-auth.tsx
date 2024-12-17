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
		<div className="flex items-center gap-4">
			Hey, {user.email}!
			<form action={signOutAction}>
				<Button type="submit" variant={"noShadow"}>
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
