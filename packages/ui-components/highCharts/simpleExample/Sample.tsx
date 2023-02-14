import {
	ArrowImg,
	Body,
	DomCard,
	DomLink,
	Light,
	HiddenArea,
	Raw,
	RowUpperContantWrapper,
	RowUpperContent,
} from "./components/ExpandedRow";

import DownArrow from "./Assits/Icons/arrow-circle-down.svg";
import UpArrow from "./Assits/Icons/arrow-circle-up.svg";
import { Collapse } from "react-collapse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetDomainMutation } from "@qusay77/orgs";
import ClipLoader from "react-spinners/ClipLoader";

export interface orgsType {
	orgId?: number;
	name?: string | number;
	package?: string;
	startDate?: string;
	endDate?: string;
	isSelectedOrg: boolean;
}

export interface domainTypes {
	domain: string;
}
interface SampleProps {
	arrayOfObects: Array<orgsType>;
}

const Sample = ({ arrayOfObects }: SampleProps) => {
	const navigateTo = useNavigate();
	const [getDomain, { isLoading }] = useGetDomainMutation();
	const [orgs, setOrgs] = useState(arrayOfObects);
	const [doms, setDoms] = useState([]);
	const [index, setExpandedIndex] = useState(0);

	useEffect(() => {
		setOrgs(arrayOfObects);
	}, [arrayOfObects]);

	const handleGetDomain = async (orgID: number, index: number) => {
		console.log("index", index);

		await getDomain({ id: orgID }).then((response: any) => {
			setDoms(response?.data?.organizations);
			setExpandedIndex(index);
		});
	};

	useEffect(() => {
		const tempArray = [...orgs].map((ele, i) => {
			return {
				...ele,
				isSelectedOrg: index === i ? !ele?.isSelectedOrg : false,
			};
		});
		setOrgs(tempArray);
	}, [doms]);
	return (
		<Body>
			{orgs?.map((ele: any, index: number) => {
				return (
					<>
						<Raw
							onClick={() => {
								handleGetDomain(ele?.orgId, index);
							}}
						>
							<RowUpperContantWrapper>
								<Light trailExpired={ele?.trailExpired} />
								<RowUpperContent>{ele?.name}</RowUpperContent>
							</RowUpperContantWrapper>
							{ele?.isSelectedOrg ? (
								<ArrowImg src={UpArrow} />
							) : (
								<ArrowImg src={DownArrow} />
							)}
						</Raw>
						{ele?.isSelectedOrg && (
							<Collapse isOpened={true}>
								<HiddenArea>
									{doms?.map((ele: domainTypes) => {
										return (
											<>
												<DomCard
													onClick={() => {
														navigateTo("/Sessions");
													}}
												>
													<DomLink href="#">{ele.domain}</DomLink>
												</DomCard>
											</>
										);
									})}
								</HiddenArea>
							</Collapse>
						)}
					</>
				);
			})}
		</Body>
	);
};

export default Sample;
