import { Routes, Route } from "react-router";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/home";
import AuthContextProvider from "./context/authContext";

export default function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
			</Routes>
		</AuthContextProvider>
	);
}
