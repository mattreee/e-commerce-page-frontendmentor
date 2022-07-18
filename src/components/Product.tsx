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

import Cart from "../images/icon-cart.svg";

const Product = () => {
	return (
		<ProductStyles>
			<div></div>
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
						<ButtonQuantStyle>-</ButtonQuantStyle>
						<QuantStyle>0</QuantStyle>
						<ButtonQuantStyle>+</ButtonQuantStyle>
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
