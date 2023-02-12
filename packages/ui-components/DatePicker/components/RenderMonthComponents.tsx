import styled from "@emotion/styled";
const NavIcon = styled.div`
	border-radius: 50%;
	position: absolute;
	top: 2px;
	width: 24px;
	height: 24px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;

	&:active {
		transform: scale(0.92);
	}
	&.prev {
		left: 7px;
	}
	&.next {
		right: -7px;
		transform: rotate(180deg);
	}
`;

const MonthCaption = styled.div`
	font-size: 14px;
	line-height: 17px;
	color: var(--Blue-Primary);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	span:nth-of-type(1) {
		font-weight: 700;
	}
	span:nth-of-type(2) {
		font-weight: 400;
	}
`;

export { NavIcon, MonthCaption };
