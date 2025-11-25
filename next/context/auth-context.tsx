"use client";

import { createContext, use, type ReactNode } from "react";
import type { Session, User } from "better-auth";

export type AuthContextType = {
	user: User | null;
	session: Session | null;
};
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = use(AuthContext);
	if (!context) {
		console.error("UserContext should be used in the context of UserContext Provider");
	}
	return context;
};

export default function AuthContextProvider({
	session,
	children,
}: {
	session: AuthContextType;
	children: ReactNode;
}) {
	return (
		<AuthContext.Provider
			value={{
				user: session?.user ?? null,
				session: session?.session ?? null,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
