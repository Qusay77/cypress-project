import styled from "@emotion/styled";
// import { Collapse } from "react-collapse";

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Raw = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: solid 2px #f5f5f5;
  cursor: pointer;

  & + & {
    margin-top: 0.25rem;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  &[open] {
    background-color: #ebebeb;
    border-color: #ebebeb;
    // max-height: 50em;

    .accordion__title {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.976 22.025l7.024-7.023 7.022 7.023 3.091-3.090-8.568-8.568c-0.413-0.412-0.961-0.64-1.545-0.64s-1.133 0.228-1.545 0.64l-8.569 8.569 3.091 3.090z' fill='%23555555'/%3e%3c/svg%3e");
    }
  }
`;

export const RowUpperContantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
export const RowUpperContent = styled.div`
  list-style-type: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: #555555;
  padding: 0.875rem 2.5rem 0.875rem 0.875rem;
`;

export const Light = styled.div<any>`
  background: ${(props) => (props.trailExpired ? "#ca0314" : "#03ca62")};
  box-shadow: ${(props) =>
		props.trailExpired
			? "0 0 4px 1px  #ec4856"
			: "0 0 4px 1px rgb(3 202 98 / 60%)"};
  margin-left: 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const ArrowImg = styled.img`
  margin-right: 20px;
`;

export const HiddenArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 97%;
  padding: 24px;
`;
export const DomLink = styled.a``;
export const DomCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: auto;
  border-radius: 5px;
  padding: 8px 16px;
  float: left;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
