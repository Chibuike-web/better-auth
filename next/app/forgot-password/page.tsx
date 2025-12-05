import ClientOnly from "@/components/client-only";
import ForgotPasswordClient from "./forgot-password-client";

export default function ForgotPassword() {
	return (
		<ClientOnly>
			<ForgotPasswordClient />
		</ClientOnly>
	);
}
