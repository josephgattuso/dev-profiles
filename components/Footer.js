import styled from "styled-components";
import { theme, mixins, media } from "../styles";
const { colors } = theme;

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  color: ${colors.grey};
  font-size: 14px;
  font-weight: 500;
  padding: 2rem 5rem;
  text-align: center;
  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  a {
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        <a
          href="https://gattuso.dev"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src="../static/logo.svg" width="34" height="34" alt="Logo" />
        </a>
        &copy; {new Date().getFullYear()}. Built by Joseph Gattuso
      </span>
    </StyledFooter>
  );
}
