import {
	ProductStyles,
	CompanyStyle,
	TitleStyle,
	DescriptionStyle,
	PriceStyle,
	DiscountStyle,
	TotalPriceStyle,
	AddContainer,
	ButtonContainerStyle,
	ButtonQuantStyle,
	QuantStyle,
	AddButton,
} from "../styles/product.styled";
import ProductCarousel from "./ProductCarousel";
import Cart from "../images/icon-cart.svg";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

import { useState } from "react";
import { useQuantity } from "../CartContext";

const Product = () => {
	const [quantity, setQuantity] = useState(0);
	const { setQuantities } = useQuantity();

	const plusQuantity = () => {
		setQuantity((prevState) => prevState + 1);
	};

	const minusQuantity = () => {
		if (quantity === 0) return;
		setQuantity((prevState) => prevState - 1);
	};

	const addValue = () => {
		setQuantities((prevState: any) => [...prevState, quantity]);
	};

	return (
		<ProductStyles>
			<ProductCarousel />
			<section>
				<CompanyStyle>Sneaker Company</CompanyStyle>
				<TitleStyle>Fall Limited Edition Sneakers</TitleStyle>
				<DescriptionStyle>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</DescriptionStyle>
				<div className="prices-container">
					<PriceStyle>$125.00</PriceStyle>
					<DiscountStyle>50%</DiscountStyle>
					<TotalPriceStyle>$250.00</TotalPriceStyle>
				</div>
				<AddContainer>
					<ButtonContainerStyle>
						<ButtonQuantStyle src={Minus} alt="" onClick={minusQuantity} />
						<QuantStyle>{quantity}</QuantStyle>
						<ButtonQuantStyle src={Plus} alt="" onClick={plusQuantity} />
					</ButtonContainerStyle>
					<AddButton onClick={addValue}>
						{" "}
						<img src={Cart} alt="" />
						Add to cart
					</AddButton>
				</AddContainer>
			</section>
		</ProductStyles>
	);
};

export default Product;
