import styled from "@emotion/styled";
import WebEyezIcon from "../assets/WebeyeZ_Logo.svg";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  padding-top: calc(20px + (160 - 20) * ((100vh - 720px) / (1080 - 720)));
  width: 50%;
  @media (max-width: 768px) {
    padding: 50px;
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 20px;
    width: 100%;
  }
`;

const FormLayout = styled.div`
  width: 100%;
  max-width: 389px;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeaderIcon = styled.div`
  background-image: url(${WebEyezIcon});
  background-repeat: no-repeat;
  background-position: left;
  height: 40px;
  width: 100%;
  margin-bottom: 40px;
`;

const MainTitle = styled.p`
  font-weight: 800;
  font-size: calc(17px + (40 - 17) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 16px;
  line-height: 48px;
`;

const SecondaryTitle = styled.p`
  font-weight: 400;
  font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));
  line-height: 17px;
  color: #333333;
`;

const InputFieldsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  margin-top: 40px;
`;

const InputNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 389px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 550px) {
    display: grid;
    gap: 24px;
    justify-content: stretch;
  }
`;

const HaveAccount = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));
  margin-top: 40px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.3);
`;

const TermOfUse = styled.div`
  width: 100%;
  justify-content: center;
  display: inline-block;
  font-size: 14px;
  margin-top: calc(20px + (111 - 20) * ((100vh - 720px) / (1080 - 720)));
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  p {
    display: inline-block;
    color: #b3b3b3;
  }
  span {
    display: inline-block;
    color: #333333;
    opacity: 0.95;
  }
`;

const MarktingLayout = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MarktingImage = styled.img`
  width: 100%;
  height: -webkit-fill-available;
  object-fit: cover;
`;

export {
  PageContainer,
  FormContainer,
  FormLayout,
  HeaderIcon,
  MainTitle,
  SecondaryTitle,
  InputFieldsContainer,
  InputNameContainer,
  HaveAccount,
  TermOfUse,
  MarktingLayout,
  MarktingImage,
};
