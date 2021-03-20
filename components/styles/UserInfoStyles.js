import styled from "styled-components";
import { theme, mixins, media } from "../../styles";
const { colors, fonts } = theme;

const StyledUserInfo = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
  min-height: 100vh;

  ${media.bp600`
    padding-top: 4rem;
  `};

  .avatar {
    ${mixins.flexCenter};
    margin-bottom: 1.5rem;
    border: 0.5rem solid ${colors.blue};
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
    `};
  }

  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }

  h3 {
    color: ${colors.lightblue};
  }

  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${mixins.flexCenter};
    ${media.bp600`
      display: block;
    `};

    &__item {
      ${mixins.flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export default StyledUserInfo;
