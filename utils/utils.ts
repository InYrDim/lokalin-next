import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param path - The path to redirect to.
 * @param message - The message to be encoded and added as a query parameter.
 */
export function encodedRedirect(
	type: "error" | "success",
	path: string,
	message: string
): never {
	return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
