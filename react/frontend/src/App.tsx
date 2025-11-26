import { Routes, Route } from "react-router";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/home";
import VerifyEmail from "./pages/auth/verify-email";
import EmailVerifed from "./pages/auth/email-verified";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/verify-email" element={<VerifyEmail />} />
			<Route path="/email-verified" element={<EmailVerifed />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/reset-password" element={<ResetPassword />} />
		</Routes>
	);
}
