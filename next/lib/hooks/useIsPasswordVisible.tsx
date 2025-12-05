import { useState } from "react";

export default function useIsPasswordVisible() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return { isPasswordVisible, setIsPasswordVisible };
}
