import { orgsType } from "storybook/stories/OrgList.stories";
import { domainTypes } from "storybook/stories/OrgList.stories";
import {
	ArrowImg,
	Body,
	DomCard,
	DomLink,
	GreenLight,
	HiddenArea,
	Raw,
	RowUpperContantWrapper,
	RowUpperContent,
} from "./components/ExpandedRow";

import DownArrow from "./Assits/Icons/arrow-circle-down.svg";
import UpArrow from "./Assits/Icons/arrow-circle-up.svg";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface SampleProps {
	arrayOfObects: Array<orgsType>;
	domains: Array<domainTypes>;
}

const Sample = ({ arrayOfObects, domains }: SampleProps) => {
	const navigateTo = useNavigate();
	const [orgs, setOrgs] = useState(arrayOfObects);

	const handleShowDomains = (index: number) => {
		const tempArray = [...orgs].map((ele, i) => {
			return {
				...ele,
				opened: index === i ? !ele?.opened : ele?.opened,
			};
		});
		setOrgs(tempArray);
	};
	return (
		<Body>
			{orgs?.map((ele: orgsType, index: number) => {
				return (
					<>
						<Raw onClick={() => handleShowDomains(index)}>
							<RowUpperContantWrapper>
								<GreenLight />
								<RowUpperContent>{ele?.name}</RowUpperContent>
							</RowUpperContantWrapper>
							{ele?.opened ? (
								<ArrowImg src={UpArrow} />
							) : (
								<ArrowImg src={DownArrow} />
							)}
						</Raw>
						<Collapse isOpened={ele?.opened}>
							<HiddenArea>
								{domains?.map((ele) => {
									return (
										<>
											<DomCard
												onClick={() => {
													navigateTo("/Sessions");
												}}
											>
												<DomLink href="#">{ele?.domain}</DomLink>
											</DomCard>
										</>
									);
								})}
							</HiddenArea>
						</Collapse>
					</>
				);
			})}
		</Body>
	);
};

export default Sample;
