import IconClose from "../images/icon-close.svg";
import { MobileMenuStyles } from "../styles/mobileMenu.styled";

const MobileMenu = ({ changeMobileMenu }: any) => {
	return (
		<MobileMenuStyles>
			<div className="menu-container">
				<img src={IconClose} alt="" onClick={changeMobileMenu} />
				<ul>
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</MobileMenuStyles>
	);
};

export default MobileMenu;
