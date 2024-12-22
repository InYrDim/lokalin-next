import type { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

const metadata: Metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Lokalin",
	description: "The Tour Recommender for Your Health",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Lokalin",
		description: "The Tour Recommender for Your Health",
		url: defaultUrl,
		siteName: "Lokalin",
		images: [
			{
				url: "/favicon.ico",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	authors: [{ name: "Lokalin", url: defaultUrl }],
	creator: "Lokalin",
	publisher: "Lokalin",
	keywords: ["health", "tour", "recommendation"],
};

export function staticMetadata() {
	return metadata;
}
