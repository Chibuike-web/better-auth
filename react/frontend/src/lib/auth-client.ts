import { createAuthClient } from "better-auth/react";

const URL = import.meta.env.VITE_API_BACKEND_URL;
export const authClient = createAuthClient({
	baseURL: URL,
});
