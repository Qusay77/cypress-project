import { MarktingLayout, MarktingImage } from "../style";
import MarketingImage from "../assets/Marketing_image.svg";

const MarktingSection = () => {
	return (
		<MarktingLayout>
			<MarktingImage src={MarketingImage}></MarktingImage>
		</MarktingLayout>
	);
};

export default MarktingSection;
