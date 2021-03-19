import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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

export default function User(props) {
  const username = props.query.id;
  return (
    <main>
      <Head title="GitHub Profiles" />
      <StyledContainer>
        <h1>{username}</h1>
      </StyledContainer>
    </main>
  );
}

User.PropTypes = {
  query: PropTypes.object,
};
