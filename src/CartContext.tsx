import { useState, createContext, useContext } from "react";

const cartContext = createContext({});

export function StateProvider({ children }: any) {
	const [quantities, setQuantities] = useState([]);

	return (
		<cartContext.Provider
			value={{
				quantities,
				setQuantities,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}

export function useQuantity() {
	const context = useContext(cartContext);
	const { quantities, setQuantities }: any = context;
	return { quantities, setQuantities };
}
