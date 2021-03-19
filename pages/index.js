import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";
import Head from "../components/Head";
import { theme, mixins } from "../styles";
const { colors, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background: ${colors.black};
  background-image: linear-gradient(
    ${colors.black} 0%,
    ${colors.darkGrey} 100%
  );
  color: ${colors.offWhite};
  height: 100vh;
`;

const StyledForm = styled.form`
  background: transparent;
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 20vh;
  max-width: 600px;
  text-align: center;
`;

const StyledIcon = styled(MarkGithubIcon)`
  color: ${colors.blue};
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 2rem;
`;

const StyledInput = styled.input`
  background: #26303c;
  border-radius: 0.25rem;
  border: 0;
  color: ${colors.lightblue};
  font-family: ${fonts.mono};
  font-size: 2rem;
  font-weight: 400;
  margin: 0 auto;
  padding: 1rem;
  outline: 0;
  text-align: center;
  width: 100%;
  max-width: 500px;
`;

export default function Home() {
  const [username, setUsername] = useState("");
  const handleChange = (e) => setUsername(e.target.value);

  return (
    <main>
      <Head title="GitHub Profiles" />
      <StyledContainer>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            Router.push({
              pathname: "/user",
              query: { id: username },
            });
          }}
        >
          <StyledIcon size="large" />
          <StyledLabel htmlFor="username">Find Your GitHub Profile</StyledLabel>
          <StyledInput
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
        </StyledForm>
      </StyledContainer>
    </main>
  );
}
