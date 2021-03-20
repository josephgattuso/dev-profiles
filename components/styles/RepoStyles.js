import styled from "styled-components";
import { theme, mixins, media } from "../../styles";
const { colors, fonts } = theme;

const RepoStyles = styled.div`
  .dropdown-wrapper {
    color: ${colors.grey};
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
`;

export default RepoStyles;
