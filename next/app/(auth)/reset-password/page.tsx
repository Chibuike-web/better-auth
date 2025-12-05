import ClientOnly from "@/components/client-only";
import ResetPasswordClient from "./reset-password-client";

export default function ResetPassword() {
	return (
		<ClientOnly>
			<ResetPasswordClient />
		</ClientOnly>
	);
}
