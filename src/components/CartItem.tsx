import { CartItemStyle } from "../styles/cart.styled";

import ThumbOne from "../images/image-product-1-thumbnail.jpg";
import IconDelete from "../images/icon-delete.svg";

const CartItem = ({ quant }: any) => {
	const price = 125;

	return (
		<CartItemStyle>
			<img className="cart-thumb" src={ThumbOne} alt="" />
			<div className="cart__item--container">
				<p className="cart__item--name">Fall Limited edition Sneakers</p>
				<p className="cart__item--prices">
					<span className="item-price">$125.00</span>&nbsp;
					<span>x</span>&nbsp;
					<span className="item-quantity">{quant}</span>&nbsp;
					<span className="item-total">$ {quant * price}</span>
				</p>
			</div>
			<img className="cart__item--delete" src={IconDelete} alt="" />
		</CartItemStyle>
	);
};

export default CartItem;
