import { OrgBody } from "./Theme";
import Simple from "@qusay77/high-chart";
import { useGetOrgsMutation, useGetDomainMutation } from "@qusay77/orgs";
import { useEffect, useState } from "react";

const Organization = () => {
	const [orgs, setOrgs] = useState([]);

	const [getOrgs] = useGetOrgsMutation();

	const handleEmailLogin = async () => {
		await getOrgs({}).then((res: any) => {
			setOrgs(res?.data?.result);
		});
	};

	useEffect(() => {
		handleEmailLogin();
	}, []);

	return (
		<>
			<OrgBody>
				<Simple arrayOfObects={orgs} />
			</OrgBody>
		</>
	);
};

export default Organization;
