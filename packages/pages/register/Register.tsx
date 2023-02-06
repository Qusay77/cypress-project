import { Global, css } from "@emotion/react";
import PageLayout from "./ui/PageLayout";
const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Inter");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");
  body {
    font-family: Inter;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const Register = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <PageLayout></PageLayout>
    </>
  );
};

export default Register;
