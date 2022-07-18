/* eslint-disable react/jsx-no-target-blank */
import { AttributionStyles } from "../styles/attribution.styled";

const Attribution = () => {
	return (
		<AttributionStyles>
			Challenge by{" "}
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
				Frontend Mentor
			</a>
			. Coded by <a href="https://github.com/mattreee">mattreee</a>.
		</AttributionStyles>
	);
};

export default Attribution;
