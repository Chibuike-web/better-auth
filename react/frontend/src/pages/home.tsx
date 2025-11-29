import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Testimonials from "../components/testimonials";
import Features from "../components/features";
import { authClient } from "../lib/auth-client";
import { Link } from "react-router";

export default function Home() {
	const { data } = authClient.useSession();

	return (
		<main className="flex flex-col min-h-screen">
			{data?.user && !data?.user.emailVerified && (
				<div className="bg-yellow-100 text-yellow-800 text-center py-3 font-medium">
					Your email is not verified.
					<Link to="/verify-email" className="underline ml-1">
						Verify now
					</Link>
				</div>
			)}
			<Header />
			<Hero />
			<Features />
			<Testimonials />
			<Footer />
		</main>
	);
}
