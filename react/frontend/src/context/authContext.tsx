import { createContext, use, type ReactNode } from "react";
import { authClient } from "../lib/auth-client";
import type { Session, User } from "better-auth";

export type AuthContextType = {
	user: User | null;
	session: Session | null;
	isPending: boolean;
};
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = use(AuthContext);
	if (!context) {
		console.error("UserContext should be used in the context of UserContext Provider");
	}
	return context;
};

export default function AuthContextProvider({ children }: { children: ReactNode }) {
	const { data, isPending } = authClient.useSession();

	return (
		<AuthContext.Provider
			value={{
				user: data?.user ?? null,
				session: data?.session ?? null,
				isPending,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
