import { useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Testimonials from "../components/testimonials";
import Features from "../components/features";
import { useAuth } from "../context/authContext";

export default function Home() {
	const navigate = useNavigate();

	const auth = useAuth();
	if (!auth) return null;

	const { session, isPending } = auth;

	useEffect(() => {
		if (!isPending && !session) {
			navigate("/sign-in");
		}
	}, [isPending, session, navigate]);

	if (isPending)
		return <div className="min-h-screen grid place-items-center">Authenticating...</div>;

	if (!session) return null;
	return (
		<main className="flex flex-col min-h-screen">
			<Header />
			<Hero />
			<Features />
			<Testimonials />
			<Footer />
		</main>
	);
}
