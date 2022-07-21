import CartIcon from "../images/icon-cart.svg";
import { CartWindowStyles, WindowContainer } from "../styles/cart.styled";

import { useState } from "react";
import CartItem from "./CartItem";

import { useQuantity } from "../CartContext";

const CartWindow = () => {
	const [windowVisible, setWindowVisible] = useState(false);
	const { quantities } = useQuantity();

	const changeWindowVisibility = () => {
		setWindowVisible((prevState) => !prevState);
	};

	const emptyCartBool = Boolean(quantities.length);

	return (
		<CartWindowStyles>
			<img
				className="cart-icon"
				src={CartIcon}
				alt=""
				onClick={changeWindowVisibility}
			/>
			{windowVisible && (
				<WindowContainer>
					<h2 className="cart-title">Cart</h2>
					<div className="cart-contents">
						{!emptyCartBool && (
							<p className="empty-cart">Your cart is empty.</p>
						)}
						{quantities.map((elem: any) => (
							<CartItem key={String(Math.random())} quant={elem} />
						))}
						{emptyCartBool && (
							<button className="button-checkout">Checkout</button>
						)}
					</div>
				</WindowContainer>
			)}
		</CartWindowStyles>
	);
};

export default CartWindow;
