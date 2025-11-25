import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getSessionData() {
	const h = await headers();
	return cachedSession(h);
}

async function cachedSession(h: Headers) {
	"use cache";
	const session = await auth.api.getSession({
		headers: h,
	});
	return session;
}
