import ThumbOne from "../images/image-product-1-thumbnail.jpg";
import ThumbTwo from "../images/image-product-2-thumbnail.jpg";
import ThumbThree from "../images/image-product-3-thumbnail.jpg";
import ThumbFour from "../images/image-product-4-thumbnail.jpg";
import ImageOne from "../images/image-product-1.jpg";
import ImageTwo from "../images/image-product-2.jpg";
import ImageThree from "../images/image-product-3.jpg";
import ImageFour from "../images/image-product-4.jpg";

import IconClose from "../images/icon-close.svg";
import IconPrevious from "../images/icon-previous.svg";
import IconNext from "../images/icon-next.svg";
import {
	CarouselModalStyles,
	ThumbModalContainerStyle,
} from "../styles/carouselModal.styled";

const thumbImages = [ThumbOne, ThumbTwo, ThumbThree, ThumbFour];
const images = [ImageOne, ImageTwo, ImageThree, ImageFour];

const CarouselModal = ({ changeModal, setMainImage, mainImage }: any) => {
	const prevImage = () => {
		if (mainImage === 0) return;
		setMainImage((prevState: any) => prevState - 1);
	};

	const nextImage = () => {
		if (mainImage === 3) return;
		setMainImage((prevState: any) => prevState + 1);
	};

	return (
		<CarouselModalStyles>
			<div className="main-container">
				<img
					className="icon-change previous"
					src={IconPrevious}
					alt=""
					onClick={prevImage}
				/>
				<img
					className="icon-change next"
					src={IconNext}
					alt=""
					onClick={nextImage}
				/>
				<img
					className="icon-close"
					src={IconClose}
					alt=""
					onClick={changeModal}
				/>
				<img className="main-image" src={images[mainImage]} alt="" />
			</div>
			<ThumbModalContainerStyle selectedImage={mainImage + 1}>
				{thumbImages.map((elem: any, index: number) => (
					<img
						className="thumbnail__image"
						key={elem}
						src={elem}
						alt=""
						onClick={() => setMainImage(index)}
					/>
				))}
			</ThumbModalContainerStyle>
		</CarouselModalStyles>
	);
};

export default CarouselModal;
