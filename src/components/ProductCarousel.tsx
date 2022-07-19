import ThumbOne from "../images/image-product-1-thumbnail.jpg";
import ThumbTwo from "../images/image-product-2-thumbnail.jpg";
import ThumbThree from "../images/image-product-3-thumbnail.jpg";
import ThumbFour from "../images/image-product-4-thumbnail.jpg";
import ImageOne from "../images/image-product-1.jpg";
import ImageTwo from "../images/image-product-2.jpg";
import ImageThree from "../images/image-product-3.jpg";
import ImageFour from "../images/image-product-4.jpg";
import {
	ProductCarouselStyles,
	MainImageStyle,
	ThumbsStyle,
} from "../styles/carousel.styled";
import { useState } from "react";

const thumbImages = [ThumbOne, ThumbTwo, ThumbThree, ThumbFour];
const images = [ImageOne, ImageTwo, ImageThree, ImageFour];

const ProductCarousel = () => {
	const [mainImage, setMainImage] = useState(0);

	const selectThumb = (index: number) => {
		setMainImage(index);
	};

	return (
		<ProductCarouselStyles>
			<MainImageStyle>
				<img src={images[mainImage]} alt="" />
			</MainImageStyle>
			<ThumbsStyle selectedImage={mainImage + 1}>
				{thumbImages.map((elem: any, index: number) => (
					<img
						key={elem}
						src={elem}
						alt=""
						onClick={() => selectThumb(index)}
					/>
				))}
			</ThumbsStyle>
		</ProductCarouselStyles>
	);
};

export default ProductCarousel;
