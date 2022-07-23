import Logo from "../images/logo.svg";
import ProfileImg from "../images/image-avatar.png";
import IconMenu from "../images/icon-menu.svg";

import {
	NavigationStyle,
	LogoStyle,
	ListStyle,
	ProfileStyle,
} from "../styles/navigation.styled";

import { useState } from "react";
import CartWindow from "./CartWindow";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobile = window.innerWidth > 750;

	const changeMobileMenu = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	return (
		<NavigationStyle>
			{!mobile && (
				<img
					className="mobile-menu"
					src={IconMenu}
					alt=""
					onClick={changeMobileMenu}
				/>
			)}

			{mobileMenuOpen && <MobileMenu changeMobileMenu={changeMobileMenu} />}

			<LogoStyle src={Logo} alt="logo" />

			{mobile && (
				<ListStyle>
					<li>Collections</li>
					<li>Men </li>
					<li>Women </li>
					<li>About</li>
					<li>Contact</li>
				</ListStyle>
			)}

			<CartWindow />

			<ProfileStyle src={ProfileImg} alt="" />
		</NavigationStyle>
	);
};

export default Navigation;
