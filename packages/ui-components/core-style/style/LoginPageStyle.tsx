import styled from "@emotion/styled";
import WebEyezIcon from "../assets/WebeyeZ_Logo.svg";

export const LoginPageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LoginFormContainer = styled.div`
  padding-top: calc(20px + (160 - 20) * ((100vh - 720px) / (1080 - 720)));
  width: 50%;
  display: grid;
  align-content: space-between;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding: 50px;
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 20px;
    width: 100%;
  }
`;

export const LoginFormLayout = styled.div`
  width: 100%;
  max-width: 389px;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LoginHeaderIcon = styled.div`
  background-image: url(${WebEyezIcon});
  background-repeat: no-repeat;
  background-position: left;
  height: 40px;
  width: 100%;
  margin-bottom: 40px;
`;

export const LoginMainTitle = styled.p`
  font-weight: 800;
  font-size: calc(17px + (40 - 17) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 16px;
  line-height: 48px;
`;

export const LoginSecondaryTitle = styled.p`
  font-weight: 400;
  font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));
  line-height: 17px;
  color: #333333;
  width: 400px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const LoginInputFieldsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  margin-top: 40px;
`;

export const LoginTermOfUse = styled.div`
  width: 100%;
  justify-content: center;
  display: inline-block;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
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

export const LoginMarktingLayout = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginMarktingImage = styled.img`
  width: 100%;
  height: ${window.innerHeight}px;
  object-fit: cover;
`;

const LoginStyle = {
	LoginPageContainer,
	LoginFormContainer,
	LoginFormLayout,
	LoginHeaderIcon,
	LoginMainTitle,
	LoginSecondaryTitle,
	LoginInputFieldsContainer,
	LoginTermOfUse,
	LoginMarktingLayout,
	LoginMarktingImage,
};
export default LoginStyle;
