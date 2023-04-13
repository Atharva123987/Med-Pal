import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const register = async (
		email,
		password,
		name,
		age,
		gender,
		height,
		weight
	) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			"http://localhost:4000/api/user/register",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
					password,
					name,
					age,
					gender,
					height,
					weight,
				}),
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// save the user to local storage
			localStorage.setItem("user", JSON.stringify(json));

			// update the auth context
			dispatch({ type: "LOGIN", payload: json });

			// update loading state
			setIsLoading(false);
		}
	};

	return { register, isLoading, error };
};
