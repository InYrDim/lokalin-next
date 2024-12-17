import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { OAuthLoginUI } from "@/components/oauth";

import { RiSpotifyFill, RiGoogleFill, RiGithubFill } from "@remixicon/react";
import { signInWithGoogle, signInWithGithub } from "@/app/actions";

const provider = [
	{ name: "Google", action: signInWithGoogle, icon: <RiGoogleFill /> },
	{ name: "Github", action: signInWithGithub, icon: <RiGithubFill /> },
];

export function Authcard({ children }: { children: React.ReactNode }) {
	return (
		<Card className="">
			<CardContent>
				{children}
				<OAuthLoginUI provider={provider} />
			</CardContent>
		</Card>
	);
}
