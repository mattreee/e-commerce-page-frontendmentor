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

const Product = () => {
	const [quantity, setQuantity] = useState(0);

	const plusQuantity = () => {
		setQuantity((prevState) => prevState + 1);
	};

	const minusQuantity = () => {
		if (quantity === 0) return;
		setQuantity((prevState) => prevState - 1);
	};

	return (
		<ProductStyles>
			<ProductCarousel />
			<div>
				<CompanyStyle>Sneaker Company</CompanyStyle>
				<TitleStyle>Fall Limited Edition Sneakers</TitleStyle>
				<DescriptionStyle>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</DescriptionStyle>
				<PriceStyle>$125.00</PriceStyle> <DiscountStyle>50%</DiscountStyle>
				<TotalPriceStyle>$250.00</TotalPriceStyle>
				<AddContainer>
					<ButtonContainerStyle>
						<ButtonQuantStyle onClick={minusQuantity}>
							<img src={Minus} alt="" />
						</ButtonQuantStyle>
						<QuantStyle>{quantity}</QuantStyle>
						<ButtonQuantStyle onClick={plusQuantity}>
							<img src={Plus} alt="" />
						</ButtonQuantStyle>
					</ButtonContainerStyle>
					<AddButton>
						{" "}
						<img src={Cart} alt="" />
						Add to cart
					</AddButton>
				</AddContainer>
			</div>
		</ProductStyles>
	);
};

export default Product;
