import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "../components";
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

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: ${colors.lightblue};
  font-weight: 400;
`;

export default function User(props) {
  const username = props.query.id;
  return (
    <main>
      <Head title="DevProfiles" />
      <StyledContainer>
        <StyledTitle>{username}</StyledTitle>
      </StyledContainer>
    </main>
  );
}

User.PropTypes = {
  query: PropTypes.object,
};
