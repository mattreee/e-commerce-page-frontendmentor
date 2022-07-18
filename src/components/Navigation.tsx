import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import ProfileImg from "../images/image-avatar.png";

import { NavigationStyle } from "../styles/navigation.styled";
import { LogoStyle } from "../styles/navigation.styled";
import { ListStyle } from "../styles/navigation.styled";
import { CartStyle } from "../styles/navigation.styled";
import { ProfileStyle } from "../styles/navigation.styled";

const Navigation = () => {
	return (
		<NavigationStyle>
			<LogoStyle src={Logo} alt="logo" />

			<ListStyle>
				<li>Collections</li>
				<li>Men </li>
				<li>Women </li>
				<li>About</li>
				<li>Contact</li>
			</ListStyle>

			<CartStyle src={Cart} alt="cart" />

			<ProfileStyle src={ProfileImg} alt="" />
		</NavigationStyle>
	);
};

export default Navigation;
