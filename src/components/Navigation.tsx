import Logo from "../images/logo.svg";
import ProfileImg from "../images/image-avatar.png";

import {
	NavigationStyle,
	LogoStyle,
	ListStyle,
	ProfileStyle,
} from "../styles/navigation.styled";

import CartWindow from "./CartWindow";

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

			<CartWindow />

			<ProfileStyle src={ProfileImg} alt="" />
		</NavigationStyle>
	);
};

export default Navigation;
