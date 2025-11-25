import { getSessionData } from "@/api/get-session-data";
import { Spinner } from "@/components/ui/spinner";
import AuthContextProvider from "@/context/auth-context";
import { redirect } from "next/navigation";
import { ReactNode, Suspense } from "react";

export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<Suspense
			fallback={
				<div className="h-screen flex items-center justify-center">
					<div className="flex items-center gap-2">
						<Spinner />
						<p>Authenticating</p>
					</div>
				</div>
			}
		>
			<Main>{children}</Main>
		</Suspense>
	);
}

async function Main({ children }: { children: ReactNode }) {
	const session = await getSessionData();
	if (!session) {
		redirect("/sign-in");
	}

	return <AuthContextProvider session={session}>{children}</AuthContextProvider>;
}
